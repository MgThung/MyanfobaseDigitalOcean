import React from "react";
import EduRight from "../../components/education/EduRight";
import EduSlide from "../../components/education/EduSlide";
import Univerbenner from "../../components/education/EdusubCate/university/Univerbenner";
import UniversityHeader from "../../components/education/EdusubCate/university/Univerhead";
import { Grid } from "@mui/material";

const UniversityPage = () => {
  return (
    <>
      <UniversityHeader/>
     <Univerbenner/>
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <EduSlide />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <EduRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default UniversityPage;
