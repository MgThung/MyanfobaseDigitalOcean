import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Latestbar from "../../components/catepagerightbar/Latestbar";

import Detailbanner from "../../components/detailpagecompo/Detailbanner";
import Detailhead from "../../components/detailpagecompo/Detailhead";
import Latestdetail from "../../components/detailpagecompo/Latestdetail";
import Latestpho from "../../components/detailpagecompo/Latestpho";
import RelatedA from "../../components/detailpagecompo/RelatedA";
import DetailMustRead from "../../components/detailpagecompo/DetailMustRead";
import { Grid } from "@mui/material";
import "./detailpage.css";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Advtecbar from "../../components/catepagerightbar/Advtecbar";
import LatestArticle from "../../components/catepagerightbar/LatestArticle";

export default function DetailPage() {
  const [postDetail, setPostDetail] = useState("");
  const { id } = useParams();
  const { cate } = useParams();
  const editpostid = async () => {
    // const reqdata = await fetch(
    //   `https://desolate-hollows-16342.herokuapp.com/detailwithview/${id}`
    // );
    const reqdata = await fetch(
      `https://www.myanfobase.com/detailwithview/${id}`
    );
    // const reqdata = await fetch(`http://localhost:8080/detailwithview/${id}`);
    const res = await reqdata.json(); // JSON.parse(json);

    return res;
  };
  useEffect(() => {
    editpostid().then((data) => {
      setPostDetail(data);
    });
  }, [id]);

  return (
    <>
      <Detailhead postDetail={postDetail} cate={cate} />
      <section className="container detailbody">
        <Grid container my={2} sx={{ margin: "auto", gap: "1.5rem" }}>
          <Grid item xs={12} md={7.6}>
            <Detailbanner postDetail={postDetail} />
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="allRightBar detailcontainer">
              <PopularNews />
              <span className="lastestbottomline "></span>
              <Advtecbar />
              <LatestArticle />
            </div>
          </Grid>
        </Grid>
      </section>
      <div className="container">
        <DetailMustRead category={cate} />
      </div>
    </>
  );
}
