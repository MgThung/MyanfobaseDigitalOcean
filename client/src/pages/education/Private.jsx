import React from "react";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import { Grid } from "@mui/material";
import PrivateBanner from "../../components/education/EdusubCate/Private/PrivateBanner";
import PrivateHeader from "../../components/education/EdusubCate/Private/PrivateHeader";

export default function PrivateSchoolPage() {
  return (
    <>
      <PrivateHeader />
      <PrivateBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BusinMain category={"Schools"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BusinRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
