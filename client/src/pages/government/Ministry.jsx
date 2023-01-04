import React from "react";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import Minbanner from "../../components/goverment/Ministry/Minbanner";
import Minhead from "../../components/goverment/Ministry/Minhead";
import { Grid } from "@mui/material";

const Ministry = () => {
  return (
    <>
      <Minhead />
      <Minbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <GoverLeft category={"Ministry"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <GoverRide />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Ministry;
