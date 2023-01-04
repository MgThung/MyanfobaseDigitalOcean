import React, { useState, useEffect, memo } from "react";
import "./detail.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Moment from "react-moment";
import "../../App.css";

export default memo(function DetailMustRead(props) {
  const category = props.category;
  Moment.globalFormat = "DD MMM YYYY";
  const [getCateData, setCateData] = useState([]);
  console.log("get Categorey data", getCateData);
  console.log("get Categorey categoryis ", category);
  const getAlldata = async () => {
    const reqdata = await fetch(
      // `https://desolate-hollows-16342.herokuapp.com/api/postcate/${category}`
      // `http://localhost:8080/api/postcate/${category}`
      `https://www.myanfobase.com/api/postcate/${category}`
    );
    const res = await reqdata.json(); // JSON.parse(json);

    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setCateData(data);
    });
  }, [category]);

  return (
    <section>
      <div className="mustread">
        <h2>Must Read</h2>
        <span className="must-read-line"></span>
      </div>
      <Grid
        my={4}
        container
        sx={{
          margin: "2rem 0 2rem 0",
          gap: { sm: "1rem", md: "0.9rem", lg: "1.3rem", xl: "1.6rem" },
        }}
      >
        {getCateData &&
          getCateData.length >= 1 &&
          getCateData.slice(0, 4).map((data, index) => {
            return (
              <Grid item md={2.8} sm={5.8} xs={12} key={index}>
                <div className="tec-mustread1">
                  <div className="tecmust-buttonimg">
                    <div className="tec-mustread-img1">
                      <img src={data.files[0].filePath} alt="" />
                    </div>
                    {console.log("data", data)}
                    <Link to={`/${data.cateName}`}>
                      <button className={`Tecmust-button cate${data.cateName}`}>
                        {data.cateName}
                      </button>
                    </Link>
                  </div>
                  <div className="tec-must-para">
                    <Link
                      to={`/${category}/${data._id}`}
                      className={`${category}hover colorBlack`}
                    >
                      <h4 className="mustreadtitle">
                        {data.title.substring(0, 25)}..
                      </h4>
                    </Link>
                    <p>
                      <Moment format="DD/MMM/YYYY">{data.createdAt}</Moment>
                    </p>
                  </div>
                </div>
              </Grid>
            );
          })}

        {/* <Grid item md={2.8} sm={5.8} xs={12}>
          <div className="tec-mustread2">
            <div className="tecmust-buttonimg">
              <div className="tec-mustread-img2">
                <img src="../images/homeimgs/tecmustread2.jpg" alt="" />
              </div>
              <Link to="/beauty" className="Tecmust-button cateTechnology">
                Technology
              </Link>
            </div>
            <div className="tec-must-para">
              <h4>"Why Should I use the Apple products?"</h4>
              <p>jul 11,2022</p>
            </div>
          </div>
        </Grid>
        <Grid item md={2.8} sm={5.8} xs={12}>
          <div className="tec-mustread3">
            <div className="tecmust-buttonimg">
              <div className="tec-mustread-img3">
                <img src="../images/homeimgs/tecmustread3.jpg" alt="" />
              </div>
              <Link to="/beauty" className="Tecmust-button cateTechnology">
                Technology
              </Link>
            </div>
            <div className="tec-must-para">
              <h4>"Why Should I use the Apple products?"</h4>
              <p>jul 11,2022</p>
            </div>
          </div>
        </Grid>
        <Grid item md={2.8} sm={5.8} xs={12}>
          <div className="tec-mustread4">
            <div className="tecmust-buttonimg">
              <div className="tec-mustread-img4">
                <img src="../images/homeimgs/tecmustread4.jpg" alt="" />
              </div>
              <Link to="/beauty" className="Tecmust-button cateTechnology">
                Technology
              </Link>
            </div>
            <div className="tec-must-para">
              <h4>"Why Should I use the Apple products?"</h4>
              <p>jul 11,2022</p>
            </div>
          </div>
        </Grid> */}
      </Grid>
    </section>
  );
});
