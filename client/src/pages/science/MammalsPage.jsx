import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import ScienceMain from "../../components/science/ScienceMain";
import SciencePopular from "../../components/science/SciencePopular";
import Mammals from "../../components/science/SubcateScience/Mammals";
import MammalsBanner from "../../components/science/SubcateScience/MammalsBanner";
import { Grid } from "@mui/material";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function MammalsPage() {
  return (
    <>
      <Mammals />
      <MammalsBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ScienceMain />
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
