import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import ScienceMain from "../../components/science/ScienceMain";
import EarthScience from "../../components/science/SubcateScience/EarthScience";
import EarthScienceBanner from "../../components/science/SubcateScience/EarthScienceBanner";
import { Grid } from "@mui/material";

export default function EarthSciencePage() {
  return (
    <>
      <EarthScience />
      <EarthScienceBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ScienceMain category={"Earth-Science"} />
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
