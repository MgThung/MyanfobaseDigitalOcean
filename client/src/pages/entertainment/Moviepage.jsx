import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Moviebanner from '../../components/enterment/entermentsetmenu/movie/Moviebanner'
import Movieheader from '../../components/enterment/entermentsetmenu/movie/Movieheader'
import { Grid } from "@mui/material";
import Entertainmentmain from '../../components/enterment/Entertainmentmain'
import PopularNews from '../../components/catepagerightbar/PopularNews';


export default function Moviepage() {
  return (
    <>
      <Movieheader />
      <Moviebanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Entertainmentmain />
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
