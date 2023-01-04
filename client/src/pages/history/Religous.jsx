import React from "react";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";
import Relibanner from "../../components/history/Religion/Relibanner";
import Relihead from "../../components/history/Religion/Relihead";
import { Grid } from "@mui/material";

export default function Religous() {
  return (
    <>
      <Relihead />
      <Relibanner />
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
