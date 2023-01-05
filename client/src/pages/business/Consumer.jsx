import React from "react";
import "./business.css";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import { Grid } from "@mui/material";
import ConsumerHeader from "../../components/business/subcateBusiness/Consumer/ConsumerHeader";
import ConsumerBanner from "../../components/business/subcateBusiness/Consumer/ConsumerBanner";
export default function ConsumerPage() {
  return (
    <>
      <ConsumerHeader />
      <ConsumerBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BusinMain category={"Consumer-Service"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BusinRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
