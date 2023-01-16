import React from "react";
import "../../healthbanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function InfodoctorBanner() {
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
                          <img src="./images/health/uzaw.jpg" alt="" />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>Dr. U Zaw Wai Soe</h4>
                            <p>
                              Burmese orthopaedics surgeon, physician, and
                              professor who currently serves as the acting Union
                              Minister for the Ministry of Labour, Immigration
                              and Population, the Ministry of Education, and the
                              Ministry of Health and Sports since 2 March 2021,
                              appointed by the CRPH.
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
                                  src="./images/health/infoDoc1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>Dr. Tun Hla (BDS,DDS) Senior Doctor</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img
                                  src="./images/health/infoDoc2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>
                                    IHH Group's $70m Parkway Hospital project in
                                    Myanmar hits roadblock
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
                                  src="./images/health/infoDoc3.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>
                                    Dr. Zaw Win Htay (Plastic & Cosmetic
                                    Surgeon)
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
                                  <h4>We can treat for your beautiful!</h4>
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
                          <img src="./images/health/infoDoc4.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              Dr.Aye Moe Thu Ma headed a much-needed medical
                              mission to her native Myanmar
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
