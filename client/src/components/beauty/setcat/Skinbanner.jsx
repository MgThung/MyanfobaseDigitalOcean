import React from "react";
import "../beautybanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Skinbanner() {
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
                            src="./images/homeimgs/scrub.jpg"
                            alt=""
                          />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>Rub but Gentle Body Polish</h4>
                            <p>
                              ခုလိုဆောင်းရာသီမှာ ငပျင်းလေးတွေအတွက်ဆို ကွက်တိပေါ့
                              ။ 3 in 1 လို Scrubတိုက်ရုံးပဲလေ ….
                              ရေဆေးချလိုက်တာနဲ့ အသားက အိအိစိုစိုလေး Baby
                              Skinအတိုင်းပဲ တကယ် ။
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
                                    whatever how old are you?
                                    <br></br>
                                    You must do Skin care!
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img src="./images/homeimgs/skin.jpg" alt="" />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>
                                    ညဘက်အိပ်ခါနီး skin care ကြပါ cleansing water
                                    ,facial foam , toner , essences , serum ,
                                    moisture , eye cream Night cream (or)
                                    sleeping mask , lip mask ❤️
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
                                  src="./images/homeimgs/cleaner.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>
                                    Skin Care Steps တွေထဲမှာ အရေးကြီးဆုံး step
                                    <br></br>
                                    Cleansing Step
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={12}>
                            <div className="secrow-secdiv">
                              <div className="clinic-img">
                                <img
                                  src="./images/homeimgs/biooil.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="clinic-p">
                                <div className="clinic-para">
                                  <h4>
                                    Lotion နဲ့လဲ တွဲလိမ်းပြီး
                                    အသားကြည်ကြည်စိုစိုလေးဖြစ်လို့ အသုံးများလာတဲ့
                                    Bio oil လေး
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
                          <img src="./images/homeimgs/jmsolution.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              Budget cleansing water (or) JM solution Derma Care
                              Centella Cleansing Water 💦{" "}
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
