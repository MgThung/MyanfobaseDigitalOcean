import React from "react";
import "./healthbanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function HealthBanner() {
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
                          <img src="./images/health/health1.jpg" alt="" />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>
                              (၂၁)ကြိမ်မြောက်
                              မြန်မာ့တိုင်းရင်းဆေးသမားတော်များညီလာခံနှင့်
                              မြန်မာ့တိုင်းရင်းဆေးပညာနှီးနှောဖလှယ်ပွဲ
                              အကြိုညှိနှိုင်းဆွေးနွေးပွဲ ကျင်းပပြုလုပ်
                            </h4>
                            <p>
                              (၂၁)ကြိမ်မြောက်
                              မြန်မာတိုင်းရင်းဆေးသမားတော်များညီလာခံကို ဒီဇင်ဘာလ
                              ၈ ရက်နေ့ တွင် လည်းကောင်း၊
                              မြန်မာ့တိုင်းရင်းဆေးပညာရှင်များ
                              နှီးနှောဖလှယ်ပွဲကို ဒီဇင်ဘာလ ၉ ရက်နေ့ တွင်
                              လည်းကောင်း၊ နေပြည်တော်ရှိ မြန်မာအပြည်ပြည် ဆိုင်ရာ
                              ကွန်ဗင်းရှင်းဗဟိုဌာန-၂ တွင် ကျင်းပမည်
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
                                <img src="./images/health/health2.jpg" alt="" />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>
                                    Myanmar Launches Covid Vaccination
                                    Drive,Prioritises Healthcare Workers
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img src="./images/health/health3.jpg" alt="" />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>
                                    A great step forward for access to
                                    healthcare in myanmar
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
                                <img src="./images/health/health4.jpg" alt="" />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>Ministry of Health of Myanmar</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={12}>
                            <div className="secrow-secdiv">
                              <div className="clinic-img">
                                <img src="./images/health/health5.jpg" alt="" />
                              </div>
                              <div className="clinic-p">
                                <div className="clinic-para">
                                  <h4>
                                    Local clinics boost health literacy in
                                    Myanmar
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
                          <img src="./images/health/health6.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              Increasing access to Diabetic Retinopathy Services
                              in Rural Myanmar
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
