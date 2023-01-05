import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import ScienceMain from "../../components/science/ScienceMain";
import Astronomy from "../../components/science/SubcateScience/Astronomy";
import AstronomyBanner from "../../components/science/SubcateScience/AstronomyBanner";
import { Grid } from "@mui/material";

export default function AstronomyPage() {
  return (
    <>
      <Astronomy />
      <AstronomyBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ScienceMain category={"Astronomy"} />
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
