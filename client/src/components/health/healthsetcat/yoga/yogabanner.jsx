import React from "react";
import "../../healthbanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function YogaBanner() {
  return (
    <section className=" container wholebanner">
      <Box>
        <div className="beauty-banner ">
          <Container maxWidth="xl">
            <Grid container direction="row">
              <Grid item lg={8.22} md={12} sm={12}>
                <div className="beauty-firstrow">
                  <Grid container direction="row">
                    <Grid item lg={12} md={12}>
                      <div className="firstrow-firstdiv">
                        <div className="blogger-img">
                          <img src="./images/health/yogo1.jpg" alt="" />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>
                              Yogo trip Myanmar: trip to the country of smiles
                            </h4>
                            <p>
                              You will live in your own skin as the combination
                              of “ traveling doing yoga ” enriches your
                              experience, making this adventure unique and
                              unrepeatable. <br />
                              It doesn't matter if you haven't practiced yoga
                              before, this trip is a perfect excuse to get
                              started. In the event that you are a yoga regular,
                              you will love the experience of continuing to
                              practice it while traveling in unique places and
                              places.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12}>
                      <div className="low-photos">
                        <Grid container direction="row">
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-secdiv">
                              <div className="skincare-img">
                                <img src="./images/health/yogo3.jpg" alt="" />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>A Home for Om:Yoga</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img src="./images/health/yogo2.jpg" alt="" />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>Green Organic Fram Yoga Retreat</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item lg={3.78}>
                <div className="ban-secrow">
                  <Grid container direction="row">
                    <Grid item lg={12}>
                      <div className="seccol-firstdiv">
                        <Grid container direction="row">
                          <Grid item lg={12}>
                            <div className="secrow-firstdiv">
                              <div className="beauty-img">
                                <img src="./images/health/yogo4.jpg" alt="" />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>Yoga Teacher</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={12}>
                            <div className="secrow-secdiv">
                              <div className="clinic-img">
                                <img src="./images/health/yogo5.jpg" alt="" />
                              </div>
                              <div className="clinic-p">
                                <div className="clinic-para">
                                  <h4>Yangon Yoga House</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item lg={12}>
                      <div className="secrow-thirddiv">
                        <div className="natural-img">
                          <img src="./images/health/yogo6.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              Unravelling the benefits of yoga with one of
                              Yangon's best known yogis-Jessica Mudditt
                            </h4>
                          </div>
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
  );
}
