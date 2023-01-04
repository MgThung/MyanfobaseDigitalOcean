import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Koreanbanner from "../../components/enterment/entermentsetmenu/korean/Koreanbanner";
import Koreanheader from "../../components/enterment/entermentsetmenu/korean/Koreanheader";
import Entertainmentmain from "../../components/enterment/Entertainmentmain";
import { Grid } from "@mui/material";

// import TechnologyPopular from "../../components/technology/TechnologyPopular";

export default function Koreanpage() {
  return (
    <>
      <Koreanheader />
      <Koreanbanner />
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
