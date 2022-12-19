import React from "react";
import { useParams } from "react-router-dom";
// import Latestbar from "../../components/catepagerightbar/Latestbar";

import Detailbanner from "../../components/detailpagecompo/Detailbanner";
import Detailhead from "../../components/detailpagecompo/Detailhead";
import Latestdetail from "../../components/detailpagecompo/Latestdetail";
import Latestpho from "../../components/detailpagecompo/Latestpho";
import RelatedA from "../../components/detailpagecompo/RelatedA";
import DetailMustRead from "../../components/detailpagecompo/DetailMustRead";

import "./detailpage.css";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Advtecbar from "../../components/catepagerightbar/Advtecbar";
import LatestArticle from "../../components/catepagerightbar/LatestArticle";

export default function DetailPage() {
  const detailid = useParams();
  console.log("detalid is ", detailid);

  return (
    <>
      <Detailhead />
      <section className="container detailbody">
        <Detailbanner detailid={detailid} />

        <div className="allRightBar detailcontainer">
          <PopularNews />
          <span className="lastestbottomline "></span>
          <Advtecbar />
          <LatestArticle />
        </div>
      </section>
      <div className="container">
        <DetailMustRead />
      </div>
    </>
  );
}
