import React from "react";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import { Grid } from "@mui/material";
import EqulityBanner from "../../components/education/EdusubCate/Equality/EqualityBanner";
import EqualityHeader from "../../components/education/EdusubCate/Equality/EqualityHeader";

export default function EqualityPage() {
  return (
    <>
      <EqualityHeader/>
      <EqulityBanner />
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
