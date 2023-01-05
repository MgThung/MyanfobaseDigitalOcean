import React from "react";
import "./business.css";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";
import { Grid } from "@mui/material";
import JewelryHeader from "../../components/business/subcateBusiness/Jewelery/JeweleryHeader";
import JeweleryBanner from "../../components/business/subcateBusiness/Jewelery/JeweleryBanner";
export default function JewelryPage() {
  return (
    <>
      <JewelryHeader />
      <JeweleryBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BusinMain category={"Jewelry"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BusinRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
