import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Infodoctor from "../../components/health/healthsetcat/infoDoctor/infodoctor";
import InfodoctorBanner from "../../components/health/healthsetcat/infoDoctor/infodoctorbanner";
import { Grid } from "@mui/material";
import HealthSidebar from "../../components/health/Healthsidebar";

export default function InfodoctorPage() {
  return (
    <>
      <Infodoctor />
      <InfodoctorBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <HealthSidebar category={"Info-Doctor"} />
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
