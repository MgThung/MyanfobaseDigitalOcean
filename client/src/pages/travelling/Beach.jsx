import React from "react";
import Beabanner from "../../components/travelling/Beach/Beabanner";
import Beahead from "../../components/travelling/Beach/Beahead";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";
import { Grid } from "@mui/material";

export default function Beach() {
  return (
    <>
      <Beahead />
      <Beabanner />
      <section className="container">
        <Grid my={2} container sx={{ margin: "0px" }}>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <TravSidebar />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <TravRbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
