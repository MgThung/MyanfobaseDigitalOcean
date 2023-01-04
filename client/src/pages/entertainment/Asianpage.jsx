import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import PopularNews from '../../components/catepagerightbar/PopularNews'
import Asianbanner from '../../components/enterment/entermentsetmenu/asian/Asianbanner'
import Asianheader from '../../components/enterment/entermentsetmenu/asian/Asianheader'
import Entertainmentmain from '../../components/enterment/Entertainmentmain'
import { Grid } from "@mui/material";

export default function Asianpage() {
  return (
    <>
        <Asianheader />
      <Asianbanner />
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
