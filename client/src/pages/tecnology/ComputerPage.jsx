import React from "react";
import "./tecnologyPage.css";
import { Grid } from "@mui/material";

import Computer from "../../components/subcategory/Computer";
import Subcategorybanner from "../../components/subcategory/Subcategorybanner";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function ComputerPage() {
  return (
    <>
      <Computer />
      <Subcategorybanner />
      <section className="container">
        <Grid container my={2}>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Tecmain category={"Computer"} />
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
