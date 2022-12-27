"use strict";
const fs = require("fs");
const mainPath = require("../routes/baseFilepath");
const asyncHandler = require("express-async-handler");
const PostModel = require("../models/Posts");
const FavModel = require("../models/Favourite");
const User = require("../models/User");
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const { S3_ENDPOINT, BUCKET_NAME } = process.env;

const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
});

// for all addpost
//@route Post/api/addpost
const multipleFileUpload = async (req, res, next) => {
  console.log("reqfile name in controller is", req.files);
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.key,
        // filePath: element.path,
        filePath: element.location,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);

      // console.log("req profile picture ", req.user.profilePicture.length);
      // console.log("req profile picture ", req.user.profilePicture);
    });
    // console.log("req use id is", req.user.id);
    const post = await PostModel.create({
      user: req.user.id,
      username: req.user.username,
      userprofile:
        req.user.profilePicture[0] == "" || req.user.profilePicture.length == 0
          ? ""
          : req.user.profilePicture[0].filePath,
      cateId: req.body.cateId,
      cateName: req.body.cateName,
      title: req.body.title,
      postAccept: req.user.isAdmin,
      description: req.body.description,
      timeCreated: req.body.timeCreated,
      files: filesArray,
    });

    // await post.save();
    console.log("post is", post);

    res.status(201).send(post); //send(post)
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// for all getpost
//@route Get/api/getposts
const getposts = async (req, res, next) => {
  try {
    const files = await PostModel.find().sort({ _id: -1 });
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// for all getpost based on category
//@route Get/api/getposts
const getcatename = async (req, res, next) => {
  const cate = req.params.cate;
  try {
    const files = await PostModel.find({
      cateName: cate,
      postAccept: true,
    }).sort({ _id: -1 });
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// to get last 2 weekago posts
//@route Get/lastpost
const getLastPosts = async (req, res, next) => {
  const resulData = await PostModel.find({
    timeCreated: {
      $gt: new Date(Date.now() - 7 * 60 * 60 * 24 * 1000),
    },
    postAccept: true,
  }).sort({ _id: -1 });
  res.send(resulData);
};

const postdetail = async (req, res) => {
  const id = req.params.id;
  PostModel.findById(id, (err, result) => {
    if (err) {
      res.send(err);
      // console.log(err);
    } else {
      res.send(result);
      // return result;
    }
  });
};

// to get category count
// Get /catecount
const getCateCount = async (req, res) => {
  try {
    const data = await PostModel.aggregate([
      {
        $group: {
          _id: "$cateName",
          count: { $sum: 1 },
        },
      },
    ]);
    // const data = await PostModel.aggregate().sortByCount("cateName");

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

// Get /ViewCount
const getViewCount = async (req, res, next) => {
  try {
    const files = await PostModel.find({ viewcount: { $gt: 0 } }).sort({
      viewcount: -1,
    });
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

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

// for all updatepost
//@route Put/api/updatepost/:id

const updatepost = asyncHandler(async (req, res) => {
  console.log("req.user id is", req.user.id);
  console.log("req.use isAdmin", req.user.isAdmin);
  console.log("reqbody is", req.body);
  const { id, title, description, cateId, cateName, postAccept } = req.body;
  const files = req.files;
  console.log("id of req.body is", id);
  const postDetail = await PostModel.findById(id);
  /* Check for user */
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }
  //make sure the logged in user matches the posted user
  if (postDetail.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not autorized");
  }

  let filesArray = [];
  files.forEach((element) => {
    const file = {
      fileName: element.key,
      filePath: element.location,
      fileType: element.mimetype,
      fileSize: fileSizeFormatter(element.size, 2),
    };
    filesArray.push(file);
  });

  // console.log("post Detail files length", postDetail.files.length);
  // console.log("req files", files.length);

  files === [] || files.length === 0
    ? postDetail.files.forEach((element) => {
        const file = {
          fileName: element.fileName,
          filePath: element.filePath,
          fileType: element.fileType,
          fileSize: element.fileSize,
        };
        filesArray.push(file);
      })
    : postDetail.files.map(async (data) => {
        /* for aws image file delete */
        return (
          await s3
            .deleteObject({
              Bucket: `${BUCKET_NAME}/uploads`,
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
        // return fs.unlink(path.join(data.filePath), (err) => {
        //   if (err) {
        //     console.log("error occur", err);
        //   }
        //   return console.log("file is deleted successully");
        // });
      });

  await PostModel.updateOne(
    { _id: id },
    {
      $set: {
        title: title,
        description: description,
        cateId: cateId,
        cateName: cateName,
        postAccept: postAccept,
        files: filesArray,
      },
    }
  );
  //if someone update post , the favorite data also need to update
  await FavModel.updateMany(
    { postId: id },
    {
      $set: {
        title: title,
        cateId: cateId,
        cateName: cateName,
        files: filesArray[0].filePath,
      },
    }
  );
  // const updatedFav = await FavModel.find({ postId: _id });
  // console.log("upd favorite result is", updatedFav);

  const updatedData = await PostModel.findById(id);
  res.status(200).json(updatedData);
  console.log("updated data result is", updatedData);
});

// for admin accept post updatepost
//@route Put/api/update/admin/:id

const updAdminAccept = asyncHandler(async (req, res) => {
  // console.log("req.user id is", req.user._id);
  // console.log("req.use isAdmin", req.user.isAdmin);
  // console.log("reqbody is", req.body);
  const { _id, title, description, cateId, cateName, postAccept } = req.body;
  const files = req.body.files;
  console.log("id of req.body is", _id);
  console.log("file of req.body is", files);
  // const postDetail = await PostModel.findById(_id);
  /* Check for user */
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }
  //make sure the logged in user matches the posted user
  if (req.user.isAdmin !== true) {
    res.status(401);
    throw new Error("User not autorized");
  }
  let filesArray = [];
  if (files.length !== 0) {
    files.forEach((element) => {
      const file = {
        fileName: element.fileName,
        filePath: element.filePath,
        fileType: element.fileType,
        fileSize: element.fileSize,
      };
      filesArray.push(file);
    });
  }
  // 633595b63e142367922e17c6
  await PostModel.updateOne(
    { _id: _id },
    {
      $set: {
        title: title,
        description: description,
        cateId: cateId,
        cateName: cateName,
        postAccept: postAccept,
        files: filesArray,
      },
    }
  );

  const updatedData = await PostModel.findById(_id);
  res.status(200).json(updatedData);
  console.log("updated data result is", updatedData);
});

// for all deletepost
//@route Delete/api/deletepost/:id
const deletepost = async (req, res) => {
  const id = req.params.id;

  const postUserId = await PostModel.findById(id);

  /* Check for user */
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }

  // make sure the logged in user matches the posted user
  if (postUserId.user.toString() !== req.user.id && req.user.isAdmin !== true) {
    res.status(401);
    throw new Error("User not autorized");
  }

  PostModel.findById(id, (err, result) => {
    if (err) throw err;

    result.files.length === [] || result.files.length === 0
      ? console.log("file is empty file")
      : result.files.map(async (data) => {
          /* for aws image file delete */
          return (
            await s3
              .deleteObject({
                Bucket: `${BUCKET_NAME}/uploads`,
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
          // return fs.unlink(path.join(data.filePath), (err) => {
          //   if (err) {
          //     console.log("error occur", err);
          //   }

          //   return console.log("file is deleted successully");
          // });
        });
  });
  //if someone delete post , the favorite data also need to delete
  await FavModel.deleteMany({ postId: id }).exec();

  await PostModel.findByIdAndRemove(id).exec();
  res.status(200).json({ id: id });
  // res.send();
};

module.exports = {
  multipleFileUpload,
  getposts,
  fileSizeFormatter,
  updatepost,
  updAdminAccept,
  deletepost,
  postdetail,
  getcatename,
  getLastPosts,
  getCateCount,
  getViewCount,
};
