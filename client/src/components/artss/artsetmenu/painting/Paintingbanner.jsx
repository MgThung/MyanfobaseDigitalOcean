import React from "react";
import "../../artssbanner.css";
import { Grid } from "@mui/material";

export default function Paintingbanner() {
  return (
    <section className="container">
      <Grid my={2} container sx={{ margin: "0px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artphoto">
            <img src="./images/art/art6.jpg" alt="" />;
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artpara">
            <h1>Colorful, Painting Art</h1>
            <div className="datepara">
              <p>
                APRIAL - 15, 2098 <br />
                On Margot Note Consulting LLC <br />
                Artmajeur Online Art Gallery
              </p>
            </div>

            <div className="companypara">
              <p>Painting by Tran Tuan | Artmajeur</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
