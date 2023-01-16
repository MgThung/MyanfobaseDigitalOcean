import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";
import { reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";
const Result = (prop) => {
  return (
    <p className="resultnoticolor">
      An email with a password reset link has been sent to your email:
      <b> {prop.email}</b> <br />
      Check your email and come back to proceed!
    </p>
  );
};

const ErrorShow = (prop) => {
  return (
    <p className="resultnoticolor">
      <span className="warningcol">Warrning:</span>
      <b> {prop.errormessage}</b> <br />
    </p>
  );
};

const ForgetPassword = () => {
  const [isContainerActive, setIsContainerActive] = useState(true);
  const [focused, setFocused] = useState(false);
  const [result, showResult] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  const handleFocus = (e) => {
    setFocused(true);
  };

  /*Register Data */
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  const redirectUrl = "https://www.myanfobase.com/passwordreset";
  // const redirectUrl = "http://localhost:3000/passwordreset";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
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

    if (email.length === 0 || email === null) {
      return alert("please fill require all data");
    } else {
      const userData = {
        email,
        redirectUrl,
      };
      // axios
      //   .post("http://localhost:8080/api/users/requestPasswordReset", userData)
      axios
        .post(
          "https://www.myanfobase.com/api/users/requestPasswordReset",
          userData
        )
        .then(() => {
          showResult(true);
        })

        // showResult(true))
        .catch((error) => {
          // console.log("erro from data sent is", error.response.data.message);
          const data = error.response.data.message;
          setErrormessage(data);
          // toast.error("error data is", data);
        });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={"login-con " + (isContainerActive ? "signupmode" : " ")}>
        <div className="forms-con">
          <div className="signin-signup">
            {/* <!-- for sign up --> */}
            <form action="" className="sign-up-form" onSubmit={onSubmit}>
              <h2 className="titlt">Reset Password</h2>
              <h4>Please enter your email to change the new password</h4>
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
                />
                <span className="singupusermsg">
                  It should be a vaild email address!
                </span>
              </div>

              <input type="submit" value="Submit" className="logbtn solid" />
              <div className="row">
                {result ? (
                  <Result email={email} />
                ) : errormessage ? (
                  <ErrorShow errormessage={errormessage} />
                ) : (
                  " "
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel"></div>

          <div className="panel right-panel">
            <div className="login-content">
              <h3>One of Us ?</h3>
              <p>
                If you have already created user account, Please Login here!
              </p>
              <Link to="/login">
                <button className="logbtn transparent" id="sign-in-btn">
                  Sign In
                </button>
              </Link>
            </div>
            <img src="../images/homeimgs/login1.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
