import { Link } from "react-router-dom";
import "./detail.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SavePost from "../sidebar/SavePost";
// import Socialbar from "./Socialbar";
export default function Detailhead() {
  Moment.globalFormat = "D MMM YYYY";
  const [postDetail, setPostDetail] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    createdAt: "",
    username: "",
    userprofile: "",
    files: [],
  });
  const { id } = useParams();
  const { cate } = useParams();
  const editpostid = async () => {
    const reqdata = await fetch(`http://178.128.56.127/detailwithview/${id}`);
    // const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
    const res = await reqdata.json(); // JSON.parse(json);
    console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    editpostid().then((data) => {
      setPostDetail(data);
    });
  }, [id]);
  return (
    <section className="detailhead container">
      <Box sx={{ marginButtom: "10px" }}>
        <Breadcrumbs
          aria-aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link to="/" className="link1" fontSize="25px">
            <Typography color={"black"}>Home</Typography>
          </Link>
          <Link to={`"/${cate}"`} className="link1">
            <Typography>{cate}</Typography>
          </Link>
        </Breadcrumbs>
      </Box>
      <div key={id}>
        <Link to={`/${postDetail.cateName}`} className="link1">
          <button className={` cate${postDetail.cateName}`}>
            {postDetail.cateName}
          </button>
        </Link>
        <h1 className="detail_title">{postDetail.title}</h1>
      </div>

      <div className="postName1">
        <div className="postmanProfile">
          {postDetail.userprofile === "" ||
          postDetail.userprofile[0] === "" ||
          postDetail.userprofile.length === 0 ? (
            <img src="./images/userprofile/defaultuserprofile.png" alt="" />
          ) : (
            <img src={postDetail.userprofile} alt="" />
          )}
        </div>

        <div className="postwrite">
          <div>
            <span className="profileName">{postDetail.username}</span>
            <span className="profileDate">
              <Moment format="DD/MMM/YYYY">{postDetail.createdAt}</Moment>
            </span>
          </div>
          {/* <SavePost getCateData={postDetail} /> */}
        </div>
      </div>
    </section>
  );
}
