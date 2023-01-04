import React from "react";
import Culbanner from "../../components/history/Culture/Culbanner";
import Culhead from "../../components/history/Culture/Culhead";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";
import { Grid } from "@mui/material";


export default function Culture() {
  return (
    <>
      <Culhead />
      <Culbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <HistSide />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <HistRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
