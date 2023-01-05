import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Hfoods from "../../components/health/healthsetcat/healthyFood/Hfood";
import HfoodsBanner from "../../components/health/healthsetcat/healthyFood/Hfoodsbanner";
import HealthSidebar from "../../components/health/Healthsidebar";
import { Grid } from "@mui/material";

export default function Hfoodspage() {
  return (
    <>
      <Hfoods />
      <HfoodsBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <HealthSidebar category={"Healthy-Foods"} />
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
