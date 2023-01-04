import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import LiteratureMain from "../../components/literature/LiteratureMain";
import Poetry from "../../components/literature/SubcateLiterature/Poetry";
import PoetryBanner from "../../components/literature/SubcateLiterature/PoetryBanner";
import { Grid } from "@mui/material";

export default function PoetryPage() {
  return (
    <>
      <Poetry />
      <PoetryBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <LiteratureMain />
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
