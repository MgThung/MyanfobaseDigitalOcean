import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import SportMain from "../../components/sport/SportMain";
import Caneballbanner from "../../components/sport/sportsetmenu/caneball/Caneballbanner";
import Caneballheader from "../../components/sport/sportsetmenu/caneball/Caneballheader";
import { Grid } from "@mui/material";

export default function Caneballpage() {
  return (
    <>
      <Caneballheader />
      <Caneballbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <SportMain category={"Cane-Ball"} />
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
