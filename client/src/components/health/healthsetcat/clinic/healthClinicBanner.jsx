import React from "react";
import "../../healthbanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function HealthClinicbanner() {
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
                          <img src="./images/health/clinic2.jpg" alt="" />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>Shwe Gon Dine (SSC) Specialist Centre</h4>
                            <p>
                              Shwe Gon Dine (SSC) Specialist Centre, as its name
                              states, is a reliable place for medical care.
                              Address: 7 Shwe Gon Daing (East) Street, Bahan,
                              Yangon Tel: (01) 544128 or 544116
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
                                <img src="./images/health/clinic1.jpg" alt="" />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>BAHOSI HOSPITAL</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img src="./images/health/clinic4.jpg" alt="" />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>Mandalay International Hospital</h4>
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
                                <img src="./images/health/clinic3.jpg" alt="" />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>Yangon General Hospital</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={12}>
                            <div className="secrow-secdiv">
                              <div className="clinic-img">
                                <img src="./images/health/clinic5.jpg" alt="" />
                              </div>
                              <div className="clinic-p">
                                <div className="clinic-para">
                                  <h4>Mandalay General Hospital</h4>
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
                          <img src="./images/health/clinic6.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              Pun Haling Hospital
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
