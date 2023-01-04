import React from "react";
import Moubanner from "../../components/travelling/Mountain/Moubanner";
import Mouhead from "../../components/travelling/Mountain/Mouhead";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";
import { Grid } from "@mui/material";

export default function Mountain() {
  return (
    <>
      <Mouhead />
      <Moubanner />
      <section className="container">
        <Grid my={2} container sx={{ margin: "0px" }}>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <TravSidebar category={"Mountain"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <TravRbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
