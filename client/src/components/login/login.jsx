import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";
import { login, register, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { FiLock, FiMail } from "react-icons/fi";
import { Stack, TextField } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ErrorShow = (prop) => {
 
  return (
    <p className="resultnoticolor">
      <span className="warningcol">Warrning:</span>
      <b> {prop.errormessage}</b> <br />
    </p>
  );
};

const LoginCompo = () => {
  const [isContainerActive, setIsContainerActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const [errormessage, setErrormessage] = useState("");

  // password show and hide start
  const [show, setShow] = useState(false);
  const [comfirmpwshow, setComfirmpwshow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handlecomfirmpwShow = () => {
    setComfirmpwshow(!comfirmpwshow);
  };

  // password show and hide end

  const signUpButton = () => {
    setIsContainerActive(true);
    setErrormessage("");
    setShow(false);
  };
  const signInButton = () => {
    setIsContainerActive(false);
    setErrormessage("");
    setShow(false);
  };
  const handleFocus = (e) => {
    setFocused(true);
  };

  /*Register Data */
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      // toast.error(message);
      setErrormessage(message);
    }

    if (isSuccess && user && user._id) {
      // setIsContainerActive(false);
      return navigate("/");
    } else {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  /* Register data onchange */
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  /* Register data onsubmit */
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData)).then(() => {
        navigate("/login");
        toast.success("Your Account successfully created");
      });
    }
  };
  /* login data */
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { email: loginemail, password: loginpassword } = loginData;

  /* login data onChange */
  const onChangelogin = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  /* login data onsubmit */
  const onSubmitlogin = (e) => {
    e.preventDefault();
    const userData = {
      loginemail,
      loginpassword,
    };
    dispatch(login(userData)).then(() => {
      if (isSuccess) {
        navigate("/");
      }
    });

    // .then((res, err) => {
    //   if (err) {
    //     alert(err);
    //   } else {
    //     navigate("/");
    //     setLoginData({
    //       email: "",
    //       password: "",
    //     });
    //   }
    // })
    // .catch((err) => {
    //   alert(err);
    // });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={"login-con " + (isContainerActive ? "signupmode" : " ")}>
        <div className="forms-con">
          <div className="signin-signup">
            {/* <!-- for sign in --> */}
            <form action="" className="sign-in-form" onSubmit={onSubmitlogin}>
              <h2 className="titlt">Sign in</h2>

              <Stack>
                <TextField
                  className="singinemail"
                  variant="outlined"
                  label="Email
"
                  id="loginemail"
                  name="email"
                  value={loginemail}
                  onChange={onChangelogin}
                  required
                  icon={<FiMail />}
                />
              </Stack>
              <Stack className="singinpassword">
                {/* <i className="fas fa-lock"></i> */}
                <TextField
                  className="singinemail"
                  type={show ? "text" : "password"}
                  label="password"
                  id="loginpassword"
                  name="password"
                  value={loginpassword}
                  onChange={onChangelogin}
                  icon={<FiLock />}
                />
                <label className="passwordshow" onClick={handleShow}>
                  {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </label>
              </Stack>
              <input type="submit" value="Login" className="logbtn solid" />
              {errormessage ? <ErrorShow errormessage={errormessage} /> : ""}
              <p>
                Forget Password?
                <Link to="/forgetpassword">
                  <span> reset it</span>
                </Link>
              </p>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.myanfobase.com/auth/google"
                  className="social-icon"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            {/* <!-- end of sign in --> */}

            {/* <!-- for sign up --> */}
            <form action="" className="sign-up-form" onSubmit={onSubmit}>
              <h2 className="titlt">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  pattern="^[a-zA-Z0-9 ]{3,16}$"
                  placeholder="Username"
                  name="username"
                  id="username"
                  required
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  value={username}
                  onChange={onChange}
                />
                <span className="msgforUsername">
                  Username should be 3-16 characters and shouldn't include any
                  special character!
                </span>
              </div>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  required
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  onChange={onChange}
                  icon={<FiMail />}
                />
                <span className="msgforEmail">
                  It should be a vaild email address!
                </span>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  name="password"
                  pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}"
                  value={password}
                  required
                  onChange={onChange}
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  icon={<FiLock />}
                />
                <label className="singuppassword" onClick={handleShow}>
                  {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </label>
                <span className="msgforPassword">
                  at least 8-20 characters and include 1
                  letter, 1 number and 1 special character!
                </span>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type={comfirmpwshow ? "text" : "password"}
                  placeholder="Confirm Password"
                  id="password2"
                  name="password2"
                  required
                  pattern={formData.password}
                  value={password2}
                  onChange={onChange}
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  icon={<FiLock />}
                />
                <label className="singuppassword" onClick={handlecomfirmpwShow}>
                  {comfirmpwshow ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </label>
                <span className="msgforcomfirmps">Passwords don't match!</span>
              </div>

              <input type="submit" value="Sign Up" className="logbtn solid" />
              {errormessage ? <ErrorShow errormessage={errormessage} /> : ""}

              <p className="social-text">Or Sign Up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="login-content">
              <h3>New Here ?</h3>
              <p>If you don't have an account.Please create new one.</p>
              <button
                className="logbtn transparent"
                onClick={signUpButton}
                id="sign-up-btn"
              >
                Sign Up
              </button>
            </div>
            <img src="../images/homeimgs/login2.png" className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="login-content">
              <h3>One of Us ?</h3>
              <p>
                If you have already created user account, Please Login here!
              </p>
              <button
                className="logbtn transparent"
                id="sign-in-btn"
                onClick={signInButton}
              >
                Sign In
              </button>
            </div>
            <img src="../images/homeimgs/login1.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCompo;
