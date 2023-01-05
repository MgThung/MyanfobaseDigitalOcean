import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import LiteratureMain from "../../components/literature/LiteratureMain";
import Novel from "../../components/literature/SubcateLiterature/Novel";
import NovelBanner from "../../components/literature/SubcateLiterature/NovelBanner";
import { Grid } from "@mui/material";

export default function NovelPage() {
  return (
    <>
      <Novel />
      <NovelBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <LiteratureMain category={"Novel"} />
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
