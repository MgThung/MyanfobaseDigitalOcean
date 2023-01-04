import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import Smartphone from "../../components/technology/SubcateTechno/Smartphone";
import SmartphoneBanner from "../../components/technology/SubcateTechno/SmartphoneBanner";
import { Grid } from "@mui/material";


export default function SmartphonePage() {
  return (
    <>
      <Smartphone />
      <SmartphoneBanner />
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
