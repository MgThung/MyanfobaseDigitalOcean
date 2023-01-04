import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "../travelling/theader.css"
import "./literature.css";
import { Box, Container, Grid, Typography} from "@mui/material";
import {  Breadcrumbs, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export default function Literature() {
  return (
    <>
    
      <section className="container travel">
        <Box sx={{ marginButtom: "10px" }}>
          <Breadcrumbs
            color={"#747474"}
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography>Home</Typography>
            </Link>

            <Typography>Literature</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Literature
        </Typography>

        <div className="button">
          <Link to="/novel">
            <button className="tec">Novel</button>
          </Link>
          <Link to="/shortstory">
            <button className="tec">Short-Story</button>
          </Link>
          <Link to="/romance">
            <button className="tec">Romance</button>
          </Link>
          <Link to="/fiction">
            <button className="tec">Fiction</button>
          </Link>
          <Link to="/poetry">
            <button className="tec">Poetry</button>
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
        <Box>
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
                      <button className="cateLiterature">Literature</button>

                      <Typography
                        className="literaturecolor"
                        variant="h4"
                        color="white"
                      >
                        How to Mark yourself 'Safe' on Socials Media
                      </Typography>
                      <p>
                        Modern technology has become a total phenomenon for
                        civilization, the defining force of a new social order
                        in which efficiency is no longer an option but a
                        necessity imposed on all human activity.
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
                            <button className="cateLiterature">
                              Literature
                            </button>
                            <Typography
                              className="literaturecolor"
                              variant="h4"
                              color="white"
                            >
                              Corsair HS80 RGB Wirless Gaming Headset Review
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={12} md={6} xs={12}>
                        <div className="secair">
                          <div className="tec-lastbannerphotos">
                            <img
                              className="airbudphoto"
                              src="./images/science/sciencebanner11.jpg"
                              alt=""
                            />
                          </div>
                          <div className="airbudpara">
                            <button className="cateLiterature">
                              Literature
                            </button>
                            <Typography
                              className="literaturecolor"
                              variant="h4"
                              color="white"
                            >
                              Corsair HS80 RGB Wirless Gaming Headset Review
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
        </Box>
      </section>
    </>
  );
}
