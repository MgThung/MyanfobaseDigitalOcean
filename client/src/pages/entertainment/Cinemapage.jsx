import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import { Grid } from "@mui/material";

import Cinemabanner from "../../components/enterment/entermentsetmenu/cinema/Cinemabanner";
import Cinemaheader from "../../components/enterment/entermentsetmenu/cinema/Cinemaheader";

import Entertainmentmain from "../../components/enterment/Entertainmentmain";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function Cinemapage() {
  return (
    <>
      <Cinemaheader />
      <Cinemabanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Entertainmentmain />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <PopularNews />
            <Latestbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
