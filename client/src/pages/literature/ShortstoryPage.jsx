import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import LiteratureMain from "../../components/literature/LiteratureMain";
import Shortstory from "../../components/literature/SubcateLiterature/Shortstory";
import ShortstoryBanner from "../../components/literature/SubcateLiterature/ShortstoryBanner";
import { Grid } from "@mui/material";

export default function ShortstoryPage() {
  return (
    <>
      <Shortstory />
      <ShortstoryBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <LiteratureMain category={"Short-Story"} />
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
