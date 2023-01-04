import React from "react";
import "./beauty.css";
import Blogger from "../../components/beauty/setcat/blogger";
import Bloggerbanner from "../../components/beauty/setcat/Bloggerbanner";
import { Grid } from "@mui/material";

import BeautySidebar from "../../components/beauty/Beautysidebar";
import BeautyRighrbar from "../../components/beauty/Bearightbar";

export default function Beautyblogger() {
  return (
    <>
      
      <Blogger />
      <Bloggerbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BeautySidebar />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BeautyRighrbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
