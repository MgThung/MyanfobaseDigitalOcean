import { Link } from "react-router-dom";
import React, { useState, useEffect, memo } from "react";
import Moment from "react-moment";
import "./homelifestyle.css";
import { Box, Container, Grid } from "@mui/material";

const Lifestylenew = () => {
  const [getCateData, setCateData] = useState("");
  const category = "Lifestyles";
  Moment.globalFormat = "DD MMM YYYY";

  useEffect(() => {
    const getAlldata = async () => {
      const reqdata = await fetch(
        // `https://desolate-hollows-16342.herokuapp.com/api/postcate/${category}`
        // `http://localhost:8080/api/postcate/${category}`
        `https://www.myanfobase.com/api/postcate/${category}`
      );
      const res = await reqdata.json(); // JSON.parse(json);
      

      return res;
    };
    getAlldata().then((data) => {
      setCateData(data);
    });
  }, [category]);

  return (
    <Box maxWidth="xl">
      <div className="thaw-1">
        {/* <Container maxWidth="xl"> */}
        {getCateData.length !== 0 ? (
          <Grid container direction="row" spacing={4}>
            <Grid item lg={6} xs={12}>
              <div className="part-1">
                <div className="photo-exercise">
                  <div className="exercise-photo">
                  
                    <img
                      className="photo-ex1"
                      src={getCateData[0].files[0].filePath}
                      // src={`https://desolate-hollows-16342.herokuapp.com/${getCateData[0].files[0].filePath}`}
                      // src={`http://localhost:8080/${getCateData[0].files[0].filePath}`}
                      alt=""
                    />
                    <Link to={`/${category}`} className="link1">
                      <button
                        className={`life-exbtn cateLifestyles cate${category}`}
                      >
                        {category}
                      </button>
                    </Link>
                  </div>
                  <div className="paragraph">
                    <Link
                      to={`/${category}/${getCateData[0]._id}`}
                      className={`colorBlack ${category}hover`}
                    >
                      <h4>{getCateData[0].title.substring(0, 70)}...</h4>
                    </Link>
                    <div className="postman1">
                      <div className="postmanProfile1">
                        {getCateData[0].userprofile === "" ||
                        getCateData[0].userprofile[0] === "" ||
                        getCateData[0].userprofile.length === 0 ? (
                          <img
                            src="./images/userprofile/defaultuserprofile.png"
                            alt=""
                          />
                        ) : (
                          <img
                            src={getCateData[0].userprofile}
                            // src={`http://localhost:8080/${getCateData[0].userprofile}`}
                            alt=""
                          />
                        )}
                      </div>
                      <span className="profileName1">
                        {getCateData[0].username}
                      </span>
                      <span className="profileDate1">
                        <Moment format="DD/MMM/YYYY">
                          {getCateData[0].createdAt}
                        </Moment>
                      </span>
                    </div>

                    <p>{getCateData[0].description.substring(0, 160)}...</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={6} xs={12}>
              <div className="honey">
                {getCateData.length !== 0 ? (
                  getCateData.slice(1, 4).map((data, index) => {
                    return (
                      <Box maxWidth="xl" key={index}>
                        <div className="honey-1">
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={5}>
                              <div className="honeyImg">
                                <img
                                  className="sunset-photo"
                                  src={data.files[0].filePath}
                                  // src={`https://desolate-hollows-16342.herokuapp.com/${data.files[0].filePath}`}
                                  // src={`http://localhost:8080/${data.files[0].filePath}`}
                                  alt=""
                                />
                              </div>
                            </Grid>

                            <Grid item xs={7}>
                              <div className="honey-paragraph">
                                <Link
                                  to={`/${category}/${data._id}`}
                                  className={`colorBlack ${category}hover`}
                                >
                                  <h4>{data.title.substring(0, 30)}...</h4>
                                </Link>
                                <p>{data.description.substring(0, 110)}...</p>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Box>
                    );
                  })
                ) : (
                  <div>
                    <h4>There has No Data or Loading !</h4>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        ) : (
          <div>
            <h4> Loading !</h4>
          </div>
        )}
        {/* </Container> */}
      </div>
    </Box>
  );
};

export default Lifestylenew;
