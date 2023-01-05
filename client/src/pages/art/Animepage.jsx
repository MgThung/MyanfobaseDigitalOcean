import React from "react";
import Animebanner from "../../components/artss/artsetmenu/anime/Animebanner";
import Animeheader from "../../components/artss/artsetmenu/anime/Animeheader";
import ArtssMain from "../../components/artss/ArtssMain";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import { Grid } from "@mui/material";

export default function Animepage() {
  return (
    <>
      <Animeheader />
      <Animebanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ArtssMain category={"Anime-Art"} />
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
