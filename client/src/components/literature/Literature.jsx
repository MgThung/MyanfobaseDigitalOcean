import React from "react";
import { Link } from "react-router-dom";
import "../travelling/theader.css";
import "../technology/technology.css";
import "./literature.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Breadcrumbs, Stack } from "@mui/material";
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
          Literature allows a person to step back in time and learn about life
          on Earth from the ones who walked before us. We can gather a better
          understanding of culture and have a greater appreciation of them. We
          learn through the ways history is recorded, in the forms of
          manuscripts and through speech itself.
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
                        src="./images/literature/litera1.jpg"
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
                        Myanmar Literature
                      </Typography>
                      <p>
                        From the fifteenth century up to the nineteenth
                        century,Palm-lead and folded-paper liteature became
                        common.Such works were filled with Buddhist piety and
                        courtly refinement of language.
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
                              src="./images/literature/litera2.jpg"
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
                              "Glass Palace" trnaslator wins Myanmar National
                              Literature Award!
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={12} md={6} xs={12}>
                        <div className="secair">
                          <div className="tec-lastbannerphotos">
                            <img
                              className="airbudphoto"
                              src="./images/literature/litera3.jpg"
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
                              Literature Roundtable Held At Pathein University
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
