import React from "react";
import "../beautybanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Salonbanner() {
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
                            src="./images/homeimgs/v47.jpg"
                            alt=""
                          />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>V47 Hair Design & Beauty Salon</h4>
                            <p>
                              တခါတလေလူများသွားတတ်ပြီး
                              မရတာမျိုး၊ထိုင်စောင့်ရတာမျိုးဖြစ်မှာစိုးတဲ့အတွက်
                              သွားချင်တဲ့ဆိုင်ခွဲကို ဖုန်းလေးကြိုဆက်ပြီး Booking
                              လေးကြိုတင်ထားမယ်ဆိုရင်ပိုအဆင်ပြေပါတယ်ခင်ဗျာ။လှည်းတန်းဆိုင်ခွဲ
                              (ရန်ကုန်)​ အမှတ် (၁၀၁)၊ ရန်ကုန် အင်းစိန်လမ်း၊
                              (စံရိပ်ငြိမ်ဂမုန်းပွင့်နဲ့ မျက်နှာချင်းဆိုင်)၊
                              ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့။​ Phone : 09 959 542
                              155​
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
                                <img src="./images/homeimgs/t8.jpg" alt="" />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>
                                    {" "}
                                    T8 Hair Design(Kyaik Waing Pagoda Road
                                    Yangon, Myanmar)
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img
                                  src="./images/homeimgs/maxx.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>
                                    MAAX HAIR SALON <br></br>{" "}
                                    ☎️09-773108699/09-773108488
                                    -အမှတ်၁၃၈/စမ်းချောင်းလမ်း/ပဒုမ္မာပန်းခြံဘေး/ရှင်စောပုရပ်ကွက်-စမ်းချောင်းSpritအနီး/ဒဂုံCentreအနီး-ရန်ကုန်မြို့။
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
                                  src="./images/homeimgs/tonytuntun.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>Tony Tun Tun Hair and beauty salon</h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={12}>
                            <div className="secrow-secdiv">
                              <div className="clinic-img">
                                <img
                                  src="./images/homeimgs/tk7.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="clinic-p">
                                <div className="clinic-para">
                                  <h4>
                                    TK 7 - Hair Salon
                                    <br></br>
                                    No,74-တပင်ရွှေထီးလမ်း/သမိုင်းမြို.ဟောင်း(၁)ရပ်ကွက်/မရမ်းကုန်း,
                                    Yangon, Myanmar
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
                          <img src="./images/homeimgs/vip.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              VIP Hair salon<br></br>
                              မနော်ဟရီလမ်းနှင့်၆၅လမ်းထောင့်၊မန္တလေးမြို့။
                              ☎️09445390038
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
