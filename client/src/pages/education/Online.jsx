import React from "react";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import { Grid } from "@mui/material";
import OnlineClassBanner from "../../components/education/EdusubCate/OnlineClass/OnlineClassBanner";
import OnlineClassHeader from "../../components/education/EdusubCate/OnlineClass/OnlineClassHeader";

export default function OnlineClassPage() {
  return (
    <>
      <OnlineClassHeader />
      <OnlineClassBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BusinMain category={"Online-Class"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BusinRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
