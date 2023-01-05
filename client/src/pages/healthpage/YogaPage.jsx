import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Yoga from "../../components/health/healthsetcat/yoga/yoga";
import YogaBanner from "../../components/health/healthsetcat/yoga/yogabanner";
import HealthSidebar from "../../components/health/Healthsidebar";
import { Grid } from "@mui/material";

export default function Yogapage() {
  return (
    <>
      <Yoga />
      <YogaBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <HealthSidebar category={"Yoga"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <PopularNews />
            <Latestbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
