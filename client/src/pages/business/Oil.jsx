import React from "react";
import "./business.css";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import { Grid } from "@mui/material";
import OilHeader from "../../components/business/subcateBusiness/oil/OilHeader";
import OilBanner from "../../components/business/subcateBusiness/oil/OilBanner";
export default function OilPage() {
  return (
    <>
          <OilHeader />
          <OilBanner/>
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BusinMain />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BusinRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
