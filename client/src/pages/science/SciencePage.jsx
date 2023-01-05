import React from "react";
import "./sciencebody.css";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Science from "../../components/science/Science";
import ScienceMain from "../../components/science/ScienceMain";
import ScienceBanner from "../../components/science/ScienceBanner";
import { Grid } from "@mui/material";
import PopularNews from "../../components/catepagerightbar/PopularNews";
export default function SciencePage() {
  return (
    <>
      <Science />
      <ScienceBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ScienceMain category={"Science"} />
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
