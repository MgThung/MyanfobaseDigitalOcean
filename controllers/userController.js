const jwt = require("jsonwebtoken"); //for tokern
const bcrypt = require("bcryptjs"); // to encrypt password
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const fs = require("fs");
const mainPath = require("../routes/baseFilepath");
const path = require("path");
const PostModel = require("../models/Posts");
const UserVerification = require("../models/UserVerification");
const aws = require("aws-sdk");
const { S3_ENDPOINT, BUCKET_NAME } = process.env;

const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
});

//reset password Model
const PasswordResetModel = require("../models/PasswordReset");

//email handler
const nodemailer = require("nodemailer");
//unique String
const { v4: uuidv4 } = require("uuid");
//env variables
require("dotenv").config();

//nodemailer stuff
let transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  // host: "git.heroku.com",
  port: 465,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

//testing success
transporter.verify((err, success) => {
  if (err) {
    console.log("verify state error is", err);
  } else {
    console.log("Ready for message");
    console.log(success);
  }
});

//@desc Register new user
//@route Post/api/users/
const registerUser = asyncHandler(async (req, res) => {
  let { username, email, password, googleId = "null" } = req.body;

  username = username.trim();
  email = email.trim();
  password = password.trim();
  googleId = googleId.trim();

  if (!username || !email || !password) {
    res.status(400).json({
      status: "FAILED",
      message: "Empty input Fields!",
    });
  } else if (!/^[a-zA-Z ]*$/.test(username)) {
    res.status(400).json({
      status: "FAILED",
      message: "Invalid name entered",
    });
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    res.status(400).json({
      status: "FAILED",
      message: "Invalid email entered",
    });
  } else if (password.length < 8) {
    res.status(400).json({
      status: "FAILED",
      message: "Password is too short!",
    });
  } else {
    await User.find({ email })
      .then((result) => {
        if (result.length) {
          //A user already exits
          res.json({
            status: "FAILED",
            message: "User with the provided email already exists",
          });
        } else {
          //to create a new user

          //password handling
          const saltRounds = 10;
          bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword) => {
              const newUser = new User({
                username,
                email,
                password: hashedPassword,
                googleId: req.body.googleId,
                verified: false,
              });
              newUser
                .save()
                .then((result) => {
                  //handle account verification
                  sendVerificationEmail(result, res);
                })
                .catch((err) => {
                  res.status(400).json({
                    status: "FAILED",
                    message: "An error occurred while saving user account!",
                  });
                });
            })
            .catch((err) => {
              res.json({
                status: "FAILED",
                message: "An error occurred while hashing password!",
              });
            });
        }
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occured while checking for existing user!",
        });
      });
  }
});

//send verification email
const sendVerificationEmail = ({ _id, email }, res) => {
  //url to be used in email
  const currentUrl = "https://www.myanfobase.com/api/users/";
  // const currentUrl = "http://localhost:8080/api/users/";
  // const currentUrl = "https://desolate-hollows-16342.herokuapp.com/api/users/";
  const uniqueString = uuidv4() + _id;

  //mailOptions
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify Your Email",
    html: `<p>Verify your email address to complete the sigup and login into your account.</p><p>This link <b>expires in 6 hours</b>.</p><p>Press <a href=${
      currentUrl + "verify/" + _id + "/" + uniqueString
    }>here</a>to proceed.</p>`,
  };
  //hash the uniqueString
  const saltRounds = 10;
  bcrypt
    .hash(uniqueString, saltRounds)
    .then((hashedUniqueString) => {
      //set values in userVerification collection
      const newVerification = new UserVerification({
        userId: _id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expiresAt: Date.now() + 21600000,
      });
      newVerification
        .save()
        .then(() => {
          transporter
            .sendMail(mailOptions)
            .then(() => {
              //email sent and verification record saved
              res.json({
                status: "PENDING",
                message: "Verification email sent",
              });
            })
            .catch((error) => {
              console.log("error is", error);
              res.json({
                status: "FAILED",
                message: "Verification email failed!",
              });
            });
        })
        .catch((error) => {
          res.json({
            status: "FAILED",
            message: "Couldn't save verification email data!",
          });
        });
    })
    .catch(() => {
      res.json({
        status: "FAILED",
        message: "An error occurred while hashing email data!",
      });
    });
};

//Verify email
const verifyMail = asyncHandler(async (req, res) => {
  let { userId, uniqueString } = req.params;
  UserVerification.find({ userId })
    .then((result) => {
      if (result.length > 0) {
        //user verification record exits so we proceed
        const { expiresAt } = result[0];
        const hashedUniqueString = result[0].uniqueString;
        //checking for expired unique string
        if (expiresAt < Date.now()) {
          //record has expired so we delete it
          UserVerification.deleteOne({ userId })
            .then((result) => {
              User.deleteOne({ _id: userId })
                .then(() => {
                  let message = "Link has expired. Please sign up again";
                  res.redirect(`/verified/error=true&&message=${message}`);
                })
                .catch((error) => {
                  let message =
                    "Clearing user with expired unique string failed";
                  res.redirect(`/verified/error=true&&message=${message}`);
                });
            })
            .catch((error) => {
              console.log(error);
              let message =
                "An error occurred while clearing expired user verification record";
              res.redirect(`/verified/error=true&&message=${message}`);
            });
        } else {
          //valid record exists so we validate the user string
          //First compare the hashed unique string
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then((result) => {
              if (result) {
                //string match
                User.updateOne({ _id: userId }, { verified: true })
                  .then(() => {
                    UserVerification.deleteOne({ userId })
                      .then(() => {
                        res.sendFile(
                          path.join(__dirname, "./views/verified.html")
                        );
                      })
                      .catch((error) => {
                        console.log(error);
                        let message =
                          "An error occurred while finalizing successful verification.";
                        res.redirect(
                          `/verified/error=true&&message=${message}`
                        );
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    let message =
                      "An error occurred while updating user record to show verified.";
                    res.redirect(`/verified/error=true&&message=${message}`);
                  });
              } else {
                //existing record but incorrect verification details passed
                let message =
                  "Invalid verification details passed. Check your inbox.";
                res.redirect(`/verified/error=true&&message=${message}`);
              }
            })
            .catch((error) => {
              let message = "An error occurred while comparing unique strings";
              res.redirect(`/verified/error=true&&message=${message}`);
            });
        }
      } else {
        //user verification record doesn't exit
        let message =
          "Account record doesn't exist or has been verified already.Please sign up or login in";
        res.redirect(`/verified/error=true&&message=${message}`);
      }
    })
    .catch((error) => {
      console.log(error);
      let message =
        "An error occurred while checking for existing user verification record";
      res.redirect(`/verified/error=true&&message=${message}`);
    });
});

//verified page route
const verifiedPage = asyncHandler(async (req, res) => {
  res.sendFile(path.join(__dirname, "./views/verified.html"));
});

/*Check if user exits*/
// const userExits = await User.findOne({ email });

// if (userExits) {
//   res.status(400);
//   throw new Error("User already exits");
// }

/*Hash password*/
// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(password, salt);

/*Create user*/
//   const user = await User.create({
//     username,
//     email,
//     password: hashedPassword,
//     googleId: req.body.googleId,
//   });

//   if (user) {
//     res.status(201).json({
//       _id: user.id,
//       username: user.username,
//       login: user.login,
//       email: user.email,
//       googleId: googleId,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid user data");
//   }
// });

//@desc Authenticate a user
//@route Post/api/users/login
const loginUser = asyncHandler(async (req, res) => {
  let { loginemail: email, loginpassword: password } = req.body;
  email = email.trim();
  password = password.trim();

  if (email == "" || password == "") {
    res.json({
      status: "FAILED",
      message: "Empty credentials supplied",
    });
  } else {
    /* Check for user email*/
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      if (user.verified == true) {
        User.updateOne({ _id: user.id }, { login: true })
          .then(() => {
            res.json({
              _id: user.id,
              username: user.username,
              email: user.email,
              bio: user.bio,
              dob: user.dob,
              address: user.address,
              gender: user.gender,
              profilePicture: user.profilePicture,
              login: true,
              verified: user.verified,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
            });
          })
          .catch((err) => {
            res.status(400).json({
              status: "FAILED",
              message: "An error occur while updating login data update",
            });
          });
      } else {
        res.status(400).json({
          status: "FAILED",
          message:
            "If your email is valid, you will get comfirmation in your check box and plz confirm,if you don't get any mail,register again with valid email",
        });
      }
    } else {
      res.status(400).json({
        status: "FAILED",
        message: "Email, Password is something wrong",
      });
    }
  }
});

//@desc Get user data
//@route Get/api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  try {
    const userdetail = await User.findById(req.user.id);
    res.status(200).send(userdetail);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//get user detial
const getDetail = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const userdetail = await User.findById(id);
    res.status(200).send(userdetail);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//for img file format
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 byte";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + "-" + sizes[index]
  );
};

/*get all user without token */
const getAlluser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//update user fucntion
const updateUser = asyncHandler(async (req, res) => {
  const { username, email, dob, gender, address, bio, token } = req.body;
  const profilePicture = req.file;
  const id = req.user.id;

  // console.log("user profile picture", profilePicture);
  const userDetail = await User.findById(id);
  /* Check for user */
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }

  let filesArray = [];
  if (profilePicture !== undefined && profilePicture !== []) {
    const file = {
      fileName: profilePicture.key,
      filePath: profilePicture.location,
      fileType: profilePicture.mimetype,
      fileSize: fileSizeFormatter(profilePicture.size, 2),
    };
    filesArray.push(file);
  }

  // console.log("user Detail profile", userDetail.profilePicture);

  //checking img and remove old img
  (profilePicture === [] || profilePicture === undefined) &&
  userDetail.profilePicture[0] !== ""
    ? userDetail.profilePicture.forEach((element) => {
        const file = {
          fileName: element.fileName,
          filePath: element.filePath,
          fileType: element.fileType,
          fileSize: element.fileSize,
        };
        filesArray.push(file);
      })
    : userDetail.profilePicture[0] === "" ||
      userDetail.profilePicture.length === 0
    ? console.log("new user is updated without new profile image")
    : userDetail.profilePicture.map(async (data, index) => {
        //for aws pic delete
        return (
          await s3
            .deleteObject({
              Bucket: `${BUCKET_NAME}/uploadProfile`,
              Key: data.fileName,
            })
            .promise(),
          (err) => {
            if (err) {
              console.log("error occur", err);
            }
            return console.log("file is deleted successully");
          }
        );
        // return fs.unlink(path.join(mainPath, data.filePath), (err) => {
        //   if (err) {
        //     console.log("error occur", err);
        //   }
        //   return console.log("file is deleted successully");
        // });
      });

  //update user
  await User.updateOne(
    { _id: id },
    {
      $set: {
        username: username,
        email: email,
        bio: bio,
        login: true,
        dob: dob,
        gender: gender,
        address: address,
        profilePicture: filesArray ? filesArray : [],
      },
    }
  );
  // console.log("file array is", filesArray[0].filePath);
  // console.log("file array is", filesArray[0].filePath);

  await PostModel.updateMany(
    { user: id },
    {
      $set: {
        userprofile: filesArray ? filesArray[0].filePath : "",
      },
    }
  );

  const updatedData = await User.findById(id);
  res.status(200).json({
    _id: id,
    username: updatedData.username,
    email: updatedData.email,
    bio: updatedData.bio,
    dob: updatedData.dob,
    address: updatedData.address,
    gender: updatedData.gender,
    profilePicture: updatedData.profilePicture,
    login: updatedData.login,
    isAdmin: updatedData.isAdmin,
    token: token,
  });
  // console.log("request user token is", token);
  // console.log("updated data user result is", updatedData);
});

/*Generate JWT */
const generateToken = (id) => {
  return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
    expiresIn: "30d",
  });
};

/*Reset Password */
const PasswordReset = asyncHandler(async (req, res) => {
  const { email, redirectUrl } = req.body;

  //check if email exists
  User.find({ email })
    .then((data) => {
      if (data.length) {
        //user exist
        //check if user is verified
        if (!data[0].verified) {
          res.status(400).json({
            status: "FAILED",
            message: "Email hasn't been verified yet.Check your mail inbox",
          });
        } else {
          //proceed with email to reset password
          PasswordResetModel.find({ userId: data[0]._id }).then((result) => {
            if (result.length) {
              res.status(400).json({
                status: "FAILED",
                message: "Password reset message already sent to this email",
              });
            } else {
              sendResetEmail(data[0], redirectUrl, res);
            }
          });
        }
      } else {
        res.status(404).json({
          status: "FAILED",
          message: "No account with the supplied email exists!",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        status: "FAILED",
        message: "An error occurred while checking for existing user",
      });
    });
});

//send password reset email
const sendResetEmail = ({ _id, email }, redirectUrl, res) => {
  const resetString = uuidv4() + _id;

  //first,we clear all existing reset records
  PasswordResetModel.deleteMany({ userId: _id })
    .then((result) => {
      //Reset records deleted successfully
      //Now we send the email
      //mailOptions
      const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Password Reset",
        html: `<p>We heard that you lost the password.</p> <p>Don't warry, use the link below to reset it.</p> <p>This link <b>expires in 60 minutes</b>.</p><p>Press <a href=${
          redirectUrl + "/" + _id + "/" + resetString
        }> here</a> to proceed.</p>`,
      };

      //hash the reset string
      const saltRounds = 10;
      bcrypt
        .hash(resetString, saltRounds)
        .then((hashedResetString) => {
          //set values in password reset collection
          const newPasswordReset = new PasswordResetModel({
            userId: _id,
            resetString: hashedResetString,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000,
          });

          newPasswordReset
            .save()
            .then(() => {
              transporter
                .sendMail(mailOptions)
                .then(() => {
                  //reset email sent and password reset record saved
                  res.json({
                    status: "PENDING",
                    message: "Password reset email sent",
                  });
                })
                .catch((error) => {
                  console.log(error);
                  res.status(400).json({
                    status: "FAILED",
                    message: "Password reset email failed",
                  });
                });
            })
            .catch((error) => {
              console.log(error);
              res.status(400).json({
                status: "FAILED",
                message: "Couldn't save password reset data!",
              });
            });
        })
        .catch((error) => {
          console.log(error);
          res.status(400).json({
            status: "FAILED",
            message: "An error occurred while hashing the password reset data!",
          });
        });
    })
    .catch((err) => {
      //error while clearing existing records
      console.log(err);
      res.status(400).json({
        status: "FAILED",
        message: "Clearing existing password reset records failed",
      });
    });
};

/*set actual Password */
const NewPassword = asyncHandler(async (req, res) => {
  const { userId, resetString, newPassword } = req.body;

  PasswordResetModel.find({ userId })
    .then((result) => {
      if (result.length > 0) {
        //password reset record exist so we proceed
        const { expiresAt } = result[0];
        const hashedResetString = result[0].resetString;
        //checking for expired reset string
        if (expiresAt < Date.now()) {
          PasswordResetModel.deleteOne({ userId })
            .then(() => {
              //Reset record deleted successfully
              res.status(400).json({
                status: "FAILED",
                message: "Password reset link has expired",
              });
            })
            .catch((error) => {
              //deletion failed
              console.log(error);
              res.status(400).json({
                status: "FAILED",
                message: "Clearing password reset record failed.",
              });
            });
        } else {
          //valid reset record exists so we validate the reset string
          //First compare the hashed reset string
          bcrypt
            .compare(resetString, hashedResetString)
            .then((result) => {
              if (result) {
                //strings matched
                //hash password again

                const saltRounds = 10;
                bcrypt
                  .hash(newPassword, saltRounds)
                  .then((hashedNewPassword) => {
                    //update user password
                    User.updateOne(
                      { _id: userId },
                      { password: hashedNewPassword }
                    )
                      .then(() => {
                        //update complete. Now delete reset record
                        PasswordResetModel.deleteOne({ userId })
                          .then(() => {
                            //both user record and reset record updated

                            res.status(200).json({
                              status: "SUCCESS",
                              message: "Password has been reset successfully.",
                            });
                          })
                          .catch((error) => {
                            res.status(400).json({
                              status: "FAILED",
                              message:
                                "An error occurred while finalizing password reset.",
                            });
                          });
                      })
                      .catch((error) => {
                        res.status(400).json({
                          status: "FAILED",
                          message: "Updating user password failed.",
                        });
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    res.status(400).json({
                      status: "FAILED",
                      message: "An error occurred while hashing new password.",
                    });
                  });
              } else {
                //Existing record but incorrect reset string passed.
                res.status(400).json({
                  status: "FAILED",
                  message: "Invalid password reset details passed.",
                });
              }
            })
            .catch((error) => {
              res.status(400).json({
                status: "FAILED",
                message: "Comparing password reset strings failed.",
              });
            });
        }
      } else {
        //Password reset record doesn't exist
        res.status(400).json({
          status: "FAILED",
          message: "Password reset request not found.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        status: "FAILED",
        message: "Checking for existing password reset record failed",
      });
    });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  updateUser,
  getDetail,
  getAlluser,
  verifyMail,
  verifiedPage,
  PasswordReset,
  NewPassword,
};
