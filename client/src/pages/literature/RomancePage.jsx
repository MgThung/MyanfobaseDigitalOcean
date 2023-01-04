import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import LiteratureMain from "../../components/literature/LiteratureMain";
import Romance from "../../components/literature/SubcateLiterature/Romance";
import RomanceBanner from "../../components/literature/SubcateLiterature/RomanceBanner";
import { Grid } from "@mui/material";

export default function RomancePage() {
  return (
    <>
      <Romance />
      <RomanceBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <LiteratureMain category={"Romance"} />
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
