import React from "react";
// import "./gover.css";
import "../travelling/tbanner.css";
import { Grid, Typography } from "@mui/material";
const Goverbanner = () => {
  return (
    <section>
      <Grid my={4} container sx={{ margin: "0px" }}>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/government/gov1.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "25px",
                      md: "30px",
                      lg: "34px",
                    },
                  }}
                >
                  Daw Aung San Su Kyi
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  Aung San Suu Kyi AC is a Burmese politician, diplomat, author,
                  and a 1991 Nobel Peace Prize laureate who served as State
                  Counsellor of Myanmar and Minister of Foreign Affairs from
                  2016 to 2021.<br></br>Born: 19 June 1945 (age 77 years),
                  <br></br>Education: SOAS University of London (1985–1987),
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/government/gov3.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "25px",
                      md: "30px",
                      lg: "34px",
                    },
                  }}
                >
                  Superme Court
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  ဒေါ်အောင်ဆန်းစုကြည်ကို လွှတ်ရန်၊ စစ်တပ်၏ အကြမ်းဖက်မှုများ
                  ရပ်တန့်ရန် အပါအဝင် ကုလ လုံခြုံရေးကောင်စီ ၏ ဆုံးဖြတ်ချက်များ
                  စစ်ကောင်စီ မလိုက်နာလျှင် အရေးယူမှုများ ရှိလာနိုင်ဟု သံအမတ်ကြီး
                  ဦးကျော်မိုးထွန်း ပြောဆို
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/government/gov6.jpg" alt="" />
            </div>

            <div className="t-info">
              <div className="t-content">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "25px",
                      md: "30px",
                      lg: "34px",
                    },
                  }}
                >
                  DR. Sar Sar
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  Dr Sasa, is a Chin medical doctor, philanthropist and civil
                  society activist[3] who currently serves as the Minister of
                  International Cooperation in the cabinet of National Unity
                  Government.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="../images/government/gov8.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "25px",
                      md: "30px",
                      lg: "34px",
                    },
                  }}
                >
                  ASEAN, #Reject Min Aung Hlaing
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  The People of Myanmar Have Rejected the Generals. ASEAN and
                  the World Must Do so as Well
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Goverbanner;
