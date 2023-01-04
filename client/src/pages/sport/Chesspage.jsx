import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import SportMain from "../../components/sport/SportMain";
import Chessbanner from "../../components/sport/sportsetmenu/chess/Chessbanner";
import Chessheader from "../../components/sport/sportsetmenu/chess/Chessheader";
import { Grid } from "@mui/material";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function Chesspage() {
  return (
    <>
      <Chessheader />
      <Chessbanner />
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
