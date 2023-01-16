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
                  Alaungpaya was the founder of the Konbaung Dynasty of Burma.
                  By the time of his death from illness during his campaign in
                  Siam, this former chief of a small village in Upper Burma had
                  unified Burma,
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
                  Anawrahta Minsaw was the founder of the Pagan Empire.
                  Considered the father of the Burmese nation, Anawrahta turned
                  a small principality in the dry zone of Upper Burma into the
                  first Burmese Empire that formed the basis of modern-day
                  Burma.
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
                  Bayinnaung Kyawhtin Nawrahta was king of the Toungoo Dynasty
                  of Myanmar from 1550 to 1581. During his 31-year reign, which
                  has been called the "greatest explosion of human energy ever
                  seen in Burma"
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
                  A knight is a person granted an honorary title of knighthood
                  by a head of state or representative for service to the
                  monarch, the church or the country, especially in a military
                  capacity. Knighthood finds origins in the Greek hippeis and
                  hoplite and Roman eques and centurion of classical antiquity.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
