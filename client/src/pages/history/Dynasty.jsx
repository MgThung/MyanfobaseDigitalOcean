import React from "react";
import Dynabanner from "../../components/history/Dynasty/Dynabanner";
import Dynahead from "../../components/history/Dynasty/Dynahead";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";
import { Grid } from "@mui/material";

export default function Dynasty() {
  return (
    <>
      <Dynahead />
      <Dynabanner />
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
