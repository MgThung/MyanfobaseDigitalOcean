import { Link } from "react-router-dom";
import "./detail.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
  const editpostid = async () => {
    const reqdata = await fetch(
      `https://desolate-hollows-16342.herokuapp.com/editpost/${id}`
    );
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
          <Link to="/${postDetail.cateName}" className="link1">
            <Typography>{postDetail.cateName}</Typography>
          </Link>
        </Breadcrumbs>
      </Box>
      <div>
        <Link to={`/${postDetail.cateName}`} className="link1">
          <button className={` cate${postDetail.cateName}`}>
            {postDetail.cateName}
          </button>
        </Link>
        <h1>How My Phone’s Most Annoying Feature Saved My Life</h1>
      </div>
      <div className="para">
        <p className="detailpara">
          Modern technology has become a total phenomenon for civilization, the
          defining force of a new social order in which efficiency is no longer
          an option but a necessity imposed on all human activity.
        </p>
      </div>
      <div className="postName1">
        <img src="../images/homeimgs/viedo4.jpg" alt="" />
        <div className="postwrite">
          <p>
            <span className="pName">Paina Ta Kon</span> - Senior EditorOct 1,
            2021
          </p>
          <span className="pDate">Updated 2022/02/15 at 3:38 AM</span>
        </div>
      </div>
      {/* <Socialbar /> */}
    </section>
  );
}
