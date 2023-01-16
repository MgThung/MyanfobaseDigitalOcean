import React from "react";
import "../beautybanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";
export default function Bloggerbanner() {
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
                                <img src="./images/homeimgs/nail.jpg" alt="" />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>
                                    2500 နဲ့ 😱 Gel ဆက်လို့ရမဲ့ ဆိုင်လေး...💓
                                    <br></br>
                                    ၃၆လမ်း၊ ၇၃ နဲ့ ၇၄ ကြား၊ မန်းတလေးမြို့
                                    <br></br>☎ 09409076662
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img
                                  src="./images/homeimgs/suncream.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>Lebelage Skincare က Suncream အသစ်</h4>
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
                                  src="./images/homeimgs/hairbam.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>
                                    ပြောင်းဖူးမွေး လိုဆံပင်တွေကိုတောင်မှ
                                    ပြန်ကောင်းလာနိုင်တယ်ဆိုပြီးပြောနေကြတဲ့
                                    <br></br>
                                    YVES ROCHER Hair Blam
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={12}>
                            <div className="secrow-secdiv">
                              <div className="clinic-img">
                                <img
                                  src="./images/homeimgs/lacome.png"
                                  alt=""
                                />
                              </div>
                              <div className="clinic-p">
                                <div className="clinic-para">
                                  <h4>
                                    LANCÔME Tonique Comfort Toner
                                    <br></br>
                                    Dry skin တွေအတွက် Toner ကောင်းကောင်း
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
                          <img src="./images/homeimgs/dryserum.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              ဂျိုင်းချွေးနံ့ထွက်သူတွေ /
                              ဂျိုင်းအသားညစ်သူတွေအတွက် Vaseline Dry Serum
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
