import React from "react";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import ElematryBanner from "../../components/education/EdusubCate/Elematry/ElematryBanner";
import { Grid } from "@mui/material";
import ElematryHeader from "../../components/education/EdusubCate/Elematry/ElematryHeader";

export default function ElematryPage() {
  return (
    <>
      <ElematryHeader/>
      <ElematryBanner />
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
