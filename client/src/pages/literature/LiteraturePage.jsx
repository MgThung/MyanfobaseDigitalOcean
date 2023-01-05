import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Literature from "../../components/literature/Literature";
import LiteratureMain from "../../components/literature/LiteratureMain";
import { Grid } from "@mui/material";
import "./literaturebody.css";

export default function LiteraturePage() {
  return (
    <>
      <Literature />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <LiteratureMain category={"Literature"} />
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
