import React from "react";
import "./business.css";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import { Grid } from "@mui/material";
import TradingHeader from "../../components/business/subcateBusiness/Trading/TradingHeader";
import TradingBanner from "../../components/business/subcateBusiness/Trading/TradingBanner";
export default function TradingPage() {
  return (
    <>
      <TradingHeader />
      <TradingBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BusinMain category={"Trading-goods"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BusinRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
