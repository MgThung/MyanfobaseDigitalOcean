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
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

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
  const usernameref = useRef(null);
  const emaileref = useRef(null);
  const password1ref = useRef(null);
  const confirmpasref = useRef(null);

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setErrormessage(message);
    }

    if (isSuccess && user && user._id) {
      return navigate("/");
    } else {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  /* Register data onchange */

  /* Register data onsubmit */
  const onSubmit = (e) => {
    e.preventDefault();

    if (password1ref.current.value !== confirmpasref.current.value) {
      toast.error("Passwords do not match");
    } else {
      const formData = new FormData();
      formData.append("username", usernameref.current.value);
      formData.append("email", emaileref.current.value);
      formData.append("password", password1ref.current.value);

      usernameref.current.value = "";
      emaileref.current.value = "";
      password1ref.current.value = "";
      confirmpasref.current.value = "";

      dispatch(register(formData)).then(() => {
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
                  label="Email"
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
                  <FacebookOutlinedIcon />
                </a>
                <a href="#" className="social-icon">
                  <TwitterIcon />
                </a>
                <a
                  href="https://www.myanfobase.com/auth/google"
                  className="social-icon"
                >
                  <GoogleIcon />
                </a>
                <a href="#" className="social-icon">
                  <LinkedInIcon />
                </a>
              </div>
            </form>
            {/* <!-- end of sign in --> */}

            {/* <!-- for sign up --> */}
            <form action="" className="sign-up-form" onSubmit={onSubmit}>
              <h2 className="titlt">Sign Up</h2>
              <div className="input-field">
                <PersonIcon className="inputlock" />
                <input
                  type="text"
                  pattern="^[a-zA-Z0-9 ]{3,16}$"
                  placeholder="Username"
                  name="username"
                  id="username"
                  required
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  ref={usernameref}
                  // onChange={onChange}
                />
                <span className="msgforUsername">
                  Username should be 3-16 characters and shouldn't include any
                  special character!
                </span>
              </div>

              <div className="input-field">
                <EmailIcon className="inputlock" />{" "}
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  ref={emaileref}
                  // onChange={onChange}
                  icon={<FiMail />}
                />
                <span className="msgforEmail">
                  It should be a vaild email address!
                </span>
              </div>
              <div className="input-field">
                <LockIcon className="inputlock" />
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  name="password"
                  pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}"
                  required
                  ref={password1ref}
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  icon={<FiLock />}
                />
                <label className="singuppassword" onClick={handleShow}>
                  {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </label>
                <span className="msgforPassword">
                  at least 8-20 characters and include 1 letter, 1 number and 1
                  special character!
                </span>
              </div>
              <div className="input-field">
                <LockIcon className="inputlock" />
                <input
                  type={comfirmpwshow ? "text" : "password"}
                  placeholder="Confirm Password"
                  id="password2"
                  name="password2"
                  required
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]- , _, @, ., /, #, &, +{8,20}$"
                  ref={confirmpasref}
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
                  <FacebookOutlinedIcon />
                </a>
                <a href="#" className="social-icon">
                  <TwitterIcon />{" "}
                </a>
                <a href="#" className="social-icon">
                  <GoogleIcon />{" "}
                </a>
                <a href="#" className="social-icon">
                  <LinkedInIcon />{" "}
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
