import React from "react";
import Advbanner from "../../components/travelling/Advanture-trip/Advbanner";
import Advheader from "../../components/travelling/Advanture-trip/Advheader";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";
import { Grid } from "@mui/material";

export default function Advanture() {
  return (
    <>
      <Advheader />
      <Advbanner />
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
