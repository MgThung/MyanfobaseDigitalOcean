import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Musicbanner from "../../components/enterment/entermentsetmenu/music/Musicbanner";
import Musicheader from "../../components/enterment/entermentsetmenu/music/Musicheader";
import Entertainmentmain from "../../components/enterment/Entertainmentmain";
import { Grid } from "@mui/material";

export default function Music() {
  return (
    <>
      <Musicheader />
      <Musicbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Entertainmentmain category={"Music"} />
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
