import React from "react";
import Sketchesbanner from "../../components/artss/artsetmenu/sketches/Sketchesbanner";
import Sketchesheader from "../../components/artss/artsetmenu/sketches/Sketchesheader";
import ArtssMain from "../../components/artss/ArtssMain";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import { Grid } from "@mui/material";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function Sketchespage() {
  return (
    <>
      <Sketchesheader />
      <Sketchesbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ArtssMain category={"Art-Sketches"} />
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
