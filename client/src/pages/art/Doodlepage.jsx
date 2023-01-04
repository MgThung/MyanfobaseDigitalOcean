import React from "react";
import Doodlebanner from "../../components/artss/artsetmenu/doodle/Doodlebanner";
import Doodleheader from "../../components/artss/artsetmenu/doodle/Doodleheader";
import ArtssMain from "../../components/artss/ArtssMain";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import { Grid } from "@mui/material";

export default function Doodlepage() {
  return (
    <>
      <Doodleheader />
      <Doodlebanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ArtssMain />
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
