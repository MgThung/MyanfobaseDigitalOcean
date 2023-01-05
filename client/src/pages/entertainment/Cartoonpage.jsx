import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Cartoonbanner from "../../components/enterment/entermentsetmenu/cartoon/Cartoonbanner";
import Cartoonheader from "../../components/enterment/entermentsetmenu/cartoon/Cartoonheader";
import Entertainmentmain from "../../components/enterment/Entertainmentmain";
import { Grid } from "@mui/material";

export default function Cartoonpage() {
  return (
    <>
      <Cartoonheader />

      <Cartoonbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Entertainmentmain category={"Cartoon"} />
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
