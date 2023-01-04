import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import SportMain from "../../components/sport/SportMain";
import Boxingbanner from "../../components/sport/sportsetmenu/boxing/Boxingbanner";
import Boxingheader from "../../components/sport/sportsetmenu/boxing/Boxingheader";
import { Grid } from "@mui/material";

export default function Boxingpage() {
  return (
    <>
      <Boxingheader />
      <Boxingbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <SportMain />
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
