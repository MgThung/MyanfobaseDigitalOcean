import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import HealthyLife from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthy";
import HealthyLifeBanner from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthyBanner";
import Lifestylesidebar from "../../components/lifestyle/Lifestylesidebar";
import { Grid } from "@mui/material";

export default function HealthyLifePage() {
  return (
    <>
      <HealthyLife />
      <HealthyLifeBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Lifestylesidebar />
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
