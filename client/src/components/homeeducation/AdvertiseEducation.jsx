import React from "react";
import { Box, Grid } from "@mui/material";

import "./advertiseeducation.css";

export default function AdvertiseEducation() {
  return (
    <div className="Advwrapper">
      <div className="advertisetitle">
        <h3>You Can Advertise Here!</h3>
        <span className="headerline"></span>
      </div>
      <Box>
        <Grid container direction="row">
          <Grid item lg={12} md={6} xs={12} marginBottom={5}>
            <div className="advBot">
              <div className="advimg">
                <img loading="lazy" src="./images/homeimgs/adver2.jpg" alt="" />
                <span>
                  BuyNow<i className="uil uil-angle-right-b"></i>
                </span>
              </div>
              <h4>If you buy the whole set you can GET 50% OFF</h4>
            </div>
          </Grid>
          <Grid item lg={12} md={6} xs={12} marginBottom={5}>
            <div className="secAdv">
              <div className="advimg">
                <img loading="lazy" src="./images/homeimgs/adver1.jpg" alt="" />
                <span>
                  BuyNow<i className="uil uil-angle-right-b"></i>
                </span>
              </div>
              <h4>Airpot 2Pro Comfortable your ear and nice sound</h4>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
