import React from "react";
// import "./history.css";
import { Grid, Typography } from "@mui/material";
import "../travelling/tbanner.css";
export default function Histbanner() {
  return (
    <section>
      <Grid my={4} container sx={{ margin: "0px" }}>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/history/Alaungpaya.jpg" alt="" />
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
                  Alaung Paya
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  One of the most beautiful beaches in Myanmar. Already stand as
                  a famous tourist attraction from Myanmar. Can easily fly by
                  domestic flights and seafoods are ...
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/history/anawratha_king.jpg" alt="" />
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
                  Anaw Ratha
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  Kyauk Kalap is located in the middle of a pretty artificial
                  lake and basically consists of a large piece of dramatic rock,
                  atop which is a scenic pagoda.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/history/Bayinnaung.jpg" alt="" />
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
                  Ba Yin Naung
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  Hkakabo Razi is believed to be Myanmar's highest mountain. The
                  5,881-meter (19,295 ft)-tall mountain is the highest mountain
                  in Southeast Asia as well.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/history/history44.jpg" alt="" />
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
                  Knight
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  Bagan is an ancient city and a UNESCO World Heritage Site in
                  the Mandalay Region of Myanmar From the 9th to 13th centuries,
                  the city was the capital of the Bagan Kingdom, the first
                  kingdom that unified the regions that would later constitute
                  Myanmar.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
