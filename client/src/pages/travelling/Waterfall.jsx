import React from "react";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";
import Waterbanner from "../../components/travelling/Waterfall/Waterbanner";
import Waterhead from "../../components/travelling/Waterfall/Waterhead";
import { Grid } from "@mui/material";

export default function Waterfall() {
  return (
    <>
      <Waterhead />
      <Waterbanner />
      <section className="container">
        <Grid my={2} container sx={{ margin: "0px" }}>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <TravSidebar category={"Waterfalls"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <TravRbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
