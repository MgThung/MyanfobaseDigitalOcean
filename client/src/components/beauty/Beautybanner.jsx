import React from "react";
import "./beautybanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";
export default function Beautybanner() {
  return (
    <section className="container wholebanner">
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
                          <img
                            src="./images/homeimgs/May-Oo-Makeup-7.jpg"
                            alt=""
                          />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>May Oo (Make-up artist)</h4>
                            <p>
                              May Oo is a Burmese make-up artist and LGBTQ+
                              rights activist. He was named in The Myanmar Times
                              "Top 10 Make-up artists" list in 2018. During the
                              2021 Myanmar coup d'état, May Oo became one of the
                              most prominent revolutionaries of Myanmar's ruling
                              military junta.
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
                                <img
                                  src="./images/homeimgs/skincare.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>
                                    5 Home Remedies for Glowing Skin 1.Coconut
                                    oil. 2.Aloe vera. 3.Moisturize. 4.Sunscreen.
                                    5.Cleanse.
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img
                                  src="./images/homeimgs/actress.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>
                                    Margot Robbie (Top 1 Attractive actress in
                                    World)
                                  </h4>
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
                                <img
                                  src="./images/homeimgs/bestskincare.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>
                           GLOSSIER The best
                                    Skincare Set 2022
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={12}>
                            <div className="secrow-secdiv">
                              <div className="clinic-img">
                                <img
                                  src="./images/homeimgs/skin-clinic.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="clinic-p">
                                <div className="clinic-para">
                                  <h4>
                                    Best Skin Clinic | Yangon, Myanmar | My Aura
                                    Aesthetic
                                  </h4>
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
                          <img src="./images/homeimgs/t8.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              T8 Hair Design(Kyaik Waing Pagoda Road Yangon,
                              Myanmar)
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
