import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import ScienceMain from "../../components/science/ScienceMain";
import Plants from "../../components/science/SubcateScience/Plants";
import PlantsBanner from "../../components/science/SubcateScience/PlantsBanner";
import { Grid } from "@mui/material";

export default function PlantsPage() {
  return (
    <>
      <Plants />
      <PlantsBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ScienceMain category={"Plants"} />
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
