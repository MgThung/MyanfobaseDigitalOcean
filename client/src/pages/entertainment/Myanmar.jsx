import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Myanmarbanner from "../../components/enterment/entermentsetmenu/myanmar/Myanmarbanner";
import Myanmarheader from "../../components/enterment/entermentsetmenu/myanmar/Myanmarheader";
import { Grid } from "@mui/material";
import Entertainmentmain from "../../components/enterment/Entertainmentmain";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function Myanmar() {
  return (
    <>
      <Myanmarheader />
      <Myanmarbanner />
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
