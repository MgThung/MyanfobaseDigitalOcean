import { Link } from "react-router-dom";
import "./technology.css";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Container } from "@mui/material";

export default function Technology() {
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  // let length = 0;
  // for (let i = posts.length - 1; i < posts.length - 4; i--) {

  // }

  return (
    <>
      <section className="container technology">
        <Box sx={{ marginButtom: "10px" }}>
          <Breadcrumbs
            color={"#747474"}
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography>Home</Typography>
            </Link>
            <Typography>Technology</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Technology
        </Typography>
        <div className="Catabutton">
          <Link to="/computer">
            <button className="tec">Computer</button>
          </Link>
          <Link to="/electronic">
            <button className="tec">Electronics</button>
          </Link>

          <Link to="/smartphone">
            <button className="tec">Smartphone</button>
          </Link>
          <Link to="/software">
            <button className="tec">Software</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Modern technology has become a total phenomenon for civilization, the
          defining force of a new social order in which efficiency is no longer
          an option but a necessity imposed on all human activity.
        </Typography>
      </section>

      <section className="container">
        <div className="photo">
          <Container maxWidth="xl">
            <Grid container direction="row" spacing={1}>
              <Grid item lg={8} md={12} sm={12}>
                <div className="firstphoto">
                  <div className="tech-firstphoto">
                    <img
                      className="fbphoto"
                      src="./images/literature/literaturebanner1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="firstpara">
                    <button className="cateTechnology">Technology</button>

                    <Typography
                      className="literaturecolor"
                      variant="h4"
                      fontWeight="bold"
                    >
                      Top 10 Trending Technologies in 2023{" "}
                    </Typography>
                    <p>
                      1.AI and Machine Learning 2.Cybersecurity 3.METAVERSE
                      4.Devops 5.Full Stack Development 6.Blockchain 7.CLOUD
                      Computing 8.HyperAutomation 9.Data Science Business
                      10.Intelligence
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={12}>
                <div className="secphoto">
                  <Grid container direction="row" spacing={1}>
                    <Grid item lg={12} md={6} xs={12}>
                      <div className="secrobot">
                        <div className="tecsecdiv-firstphoto">
                          <img
                            className="robotphoto"
                            src="./images/literature/literaturebanner2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="robotpara">
                          <button className="cateTechnology">Technology</button>
                          <br></br>
                          <Typography
                            className="literaturecolor"
                            variant="p"
                            fontSize="1rem"
                            color="white"
                            fontWeight="bold"
                          >
                            The iPhone 15 models will likely be released in
                            September 2023.
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={6} xs={12}>
                      <div className="secair">
                        <div className="tec-lastbannerphotos">
                          <img
                            className="airbudphoto"
                            src="./images/science/hp.jpg"
                            alt=""
                          />
                        </div>
                        <div className="airbudpara">
                          <button className="cateTechnology">Technology</button>
                          <br></br>
                          <Typography
                            className="literaturecolor"
                            variant="p"
                            fontSize="1rem"
                            color="white"
                            fontWeight="bold"
                          >
                            The best HP laptop for most people is "HP Spectre
                            x360 14-inch"
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </>
  );
}
