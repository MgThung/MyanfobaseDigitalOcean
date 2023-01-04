import React from "react";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import Passbanner from "../../components/goverment/Passport/Passbanner";
import Passhead from "../../components/goverment/Passport/Passhead";
import { Grid } from "@mui/material";


export default function Passport() {
  return (
    <>
      <Passhead />
      <Passbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <GoverLeft />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <GoverRide />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
