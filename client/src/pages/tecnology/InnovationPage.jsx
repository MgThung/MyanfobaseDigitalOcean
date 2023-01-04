import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import Innovation from "../../components/technology/SubcateTechno/Innovation";
import InnovationBanner from "../../components/technology/SubcateTechno/InnovationBanner";
import { Grid } from "@mui/material";


export default function InnovationPage() {
  return (
    <>
      <Innovation />
      <InnovationBanner />
      <section className="container">
        <Grid container my={2}>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Tecmain />
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
