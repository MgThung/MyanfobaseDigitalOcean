import React from "react";
import "../beautybanner.css";
import "animate.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function BeautyClinicBanner() {
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
                            src="./images/homeimgs/filter.jpg"
                            alt=""
                          />
                        </div>
                        <div className="blogger-para">
                          <div className="blogger-p">
                            <h4>
                              Filler အကြောင်းသိကောင်းစရာ<br></br>Filler
                              Treatment ဆိုတာ ချိုင့်တဲ့နေရာလေးတွေကို
                              ဖြည့်ပြီးပိုပီးငယ်ရွယ်နုပျိုတဲ့ Look လေးရစေဖို့
                              အရေးကြောင်းလေးတွေ သက်သာစေဖို့နဲ့ ကိုယ်လိုချင်တဲ့
                              Facial Shape လေး ချက်ခြင်းရဖို့အတွက်ဖြစ်ပါတယ်ရှင့်
                            </h4>
                            <p>
                              Filler Treatment Type (6)မျိုးရှိပါတယ်ရှင့် (1)
                              Undereye Filler (2) Smlie line Filler (3) Cheek
                              Filler (4) Lip Filler (5) Chin Filler (6) Nose
                              Filler တို့ဖြစ်ပါတယ်
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
                                  src="./images/homeimgs/burmabeauty.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="skin-p">
                                <div className="skincare-para">
                                  <h4>
                                    အရည်အသွေးမြင့်တဲ့ဆေးတွေ၊
                                    နောက်ဆုံးပေါ်ကမ္ဘာ့အကောင်းဆုံးလေဆာစက်တွေကိုသာအသုံးပြုပြီးကုသပေးတဲ့
                                    Burma Beauty<br></br>
                                    ☎️09-408600022 ကိုဆက်သွယ်ပြီး
                                    မေးမြန်းနိုင်ပါတယ်...
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={6} md={6} xs={12}>
                            <div className="firstrow-thirddiv">
                              <div className="makeup-img">
                                <img
                                  src="./images/homeimgs/chin.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="makeup-p">
                                <div className="makeup-para">
                                  <h4>
                                    မေးနှစ်ထပ်ဖြစ်လို့စိတ်ညစ်နေလား?? မေး အောက်က
                                    အဆီပိုတွေက
                                    လေ့ကျင့်ခန်းတွေလုပ်နေတာတောင်ကျမသွားဘူးဆိုရင်
                                    Dr Glow ရဲ့ Double Chin Treatment
                                    လေးကိုသတိရလိုက်နော်။
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
                                  src="./images/homeimgs/clinic.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="beauty-p">
                                <div className="beauty-para">
                                  <h4>
                                    Best Skin Clinic | Yangon, Myanmar | My Aura
                                    Aesthetic
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
                                    ကိုလာဂျင်ကြိုးတိုက်ရိုက်ထိုးတာ
                                    ပိုမြန်တာ​ပေါ့ တင်းရင်းဖို့ လှပဖို့
                                    အ​သေချာဆုံးပဲ​လေ ...
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
                          <img src="./images/homeimgs/deglow.jpg" alt="" />
                        </div>
                        <div className="natural-p">
                          <div className="natural-para">
                            <h4 className="animate__fadeOut">
                              ✨အသားအရေဖြူစင်ကြည်လင်ဖို့ အိမ်မက်တွေရှိနေတဲ့
                              Glowy လေးတို့အတွက် Dr Glow ရဲ့ IV Whitening Drip!!
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
