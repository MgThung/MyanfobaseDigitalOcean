import React from "react";
import "../../artssbanner.css";
import { Grid } from "@mui/material";

export default function Animebanner() {
  return (
    <section className="container">
      <Grid my={2} container sx={{ margin: "0px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artphoto">
            <img src="./images/art/animeimg3.jpg" alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artpara">
            <h1>Kawaii Anime Girl Drawing</h1>
            <div className="datepara">
              <p>
                FEBRUARY 27-MAY 28, 2018 <br />
                On view at Beautiful Anime Girl <br />
                in Gallery 209
              </p>
            </div>

            <div className="companypara">
              <p>
                created by
                <a href="https://www.pinterest.com/ocrions"> 𝖔𝖈𝖗𝖎 ☄︎</a>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
