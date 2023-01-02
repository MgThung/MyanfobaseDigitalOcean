import { Link, useNavigate } from "react-router-dom";
import "./detail.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useSelector } from "react-redux";
import "./userdetail.css";
import "../sidebar/sidebar.css";
import SavePost from "../sidebar/SavePost";
// import Socialbar from "./Socialbar";
export default function Detailhead(props) {
  const navigate = useNavigate();
  Moment.globalFormat = "D MMM YYYY";

  const { user, isError, message } = useSelector((state) => state.auth);
  useEffect(() => {}, [user, navigate, isError, message]);

  const cate = props.cate;
  const postDetail = props.postDetail;

  return (
    <>
      {postDetail && postDetail.length !== 0 ? (
        <section className="detailhead container">
          <Box sx={{ marginButtom: "10px" }}>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link to="/" className="link1" fontSize="25px">
                <Typography color={"black"}>Home</Typography>
              </Link>
              <Link to={`/${cate}`} className="userlink">
                <Typography>
                  <span>{cate}</span>
                </Typography>
              </Link>
            </Breadcrumbs>
          </Box>
          <div>
            <h3 className="titledetail">{postDetail.title}</h3>
            <Link to={`/${postDetail.cateName}`} className="">
              <button className={` cate${postDetail.cateName} detailbtn`}>
                {postDetail.cateName}
              </button>
            </Link>
          </div>

          <div className="postman">
            <div className="postmanProfile">
              {postDetail.userprofile === "" ||
              postDetail.userprofile[0] === "" ||
              postDetail.userprofile.length === 0 ? (
                <img
                  src="../images/userprofile/defaultuserprofile.png"
                  alt=""
                />
              ) : (
                <img
                  src={postDetail.userprofile}
                  // src={`https://desolate-hollows-16342.herokuapp.com/${postDetail.userprofile}`}
                  // src={`http://localhost:8080/${postDetail.userprofile}`}
                  alt=""
                />
              )}
            </div>
            <span className="profileName">{postDetail.username}</span>
            <span className="profileDate">
              <Moment format="DD/MMM/YYYY">{postDetail.createdAt}</Moment>
            </span>

            {user && user ? (
              <SavePost getCateData={postDetail} />
            ) : (
              <Link to="/login">
                <BookmarkBorderIcon />
                to save this post login here!
              </Link>
            )}
          </div>
          {/* <Socialbar /> */}
        </section>
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </>
  );
}
