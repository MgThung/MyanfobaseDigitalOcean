import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import AdvertiseEducation from "./AdvertiseEducation";

import "./homeeducation.css";

import TrainingClass from "./trainingClass";

export default function HomeEducation() {
  return (
    <section className="container EducSect">
      <div className="titleEducation">
        <Typography variant="h4" fontWeight="bold" className="popular-title">
          Education{" "}
        </Typography>
        <span className="headerline"></span>
      </div>
      <Box maxWidth="xl">
        <div className="educationHOme">
          {/* <div id="homeeducation" className="edusection"> */}
          <Grid container direction="row" spacing={4}>
            <Grid item lg={8}>
              <TrainingClass />
            </Grid>
            <Grid item lg={4}>
              <AdvertiseEducation />
            </Grid>
          </Grid>
          {/* </div> */}
        </div>
      </Box>

      {/* <div className="educationHOme">
        <div id="homeeducation" className="edusection">
          <TrainingClass />
          <AdvertiseEducation />
        </div>
      </div> */}
    </section>
  );
}
