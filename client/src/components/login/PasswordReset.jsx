import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";
import { login, register, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { FiLock, FiMail } from "react-icons/fi";
import axios from "axios";

const ErrorShow = (prop) => {
  return (
    <p className="resultnoticolor">
      <span className="warningcol">Warrning:</span>
      <b> {prop.errormessage}</b> <br />
    </p>
  );
};

const PasswordReset = () => {
  const [isContainerActive, setIsContainerActive] = useState(true);
  const [focused, setFocused] = useState(false);
  const { userId, resetString } = useParams();
  const [errormessage, setErrormessage] = useState("");

  const handleFocus = (e) => {
    setFocused(true);
  };

  /*Register Data */
  const [formData, setFormData] = useState({
    newPassword: "",
    password2: "",
  });
  const { newPassword, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (newPassword !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        userId,
        resetString,
        newPassword,
      };

      axios
        // .post("http://localhost:8080/api/users/resetPassword", userData)
        .post("http://178.128.56.127/api/users/resetPassword", userData)
        .then(() => {
          toast.success("Password successfully changed");
          navigate("/login");
        })

        // showResult(true))
        .catch((error) => {
          console.log("erro from data sent is", error.response.data.message);
          const data = error.response.data.message;
          setErrormessage(data);
          // toast.error("error data is", data);
        });
    }
  };

  return (
    <>
      <div className={"login-con " + (isContainerActive ? "signupmode" : " ")}>
        <div className="forms-con">
          <div className="signin-signup">
            {/* <!-- for sign up --> */}
            <form action="" className="sign-up-form" onSubmit={onSubmit}>
              <h2 className="titlt">Change New Password</h2>
              <h4>Please change your new password Here!</h4>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="new Password"
                  name="newPassword"
                  pattern="^(?=*[A-Za-z])(?= *\d)[A-Za-z\d]{8,20}$"
                  value={newPassword}
                  required
                  onChange={onChange}
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  icon={<FiLock />}
                />
                <span className="singupusermsg">
                  Password should be 8-20 characters and include at least 1
                  letter, 1 number!
                </span>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="password2"
                  name="password2"
                  required
                  pattern={formData.newPassword}
                  value={password2}
                  onChange={onChange}
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  icon={<FiLock />}
                />
                <span className="singupusermsg">Passwords don't match!</span>
              </div>

              <input type="submit" value="Submit" className="logbtn solid" />
              {errormessage ? <ErrorShow errormessage={errormessage} /> : " "}
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

export default PasswordReset;
