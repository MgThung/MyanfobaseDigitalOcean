import React from "react";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";
import Regionbanner from "../../components/history/Region/Regionbanner";
import Regionhead from "../../components/history/Region/Regionhead";
import { Grid } from "@mui/material";

export default function Region() {
  return (
    <>
      <Regionhead />
      <Regionbanner />
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
