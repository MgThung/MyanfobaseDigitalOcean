import Latestbar from "../../components/catepagerightbar/Latestbar";
import HealthClinic from "../../components/health/healthsetcat/clinic/healthClinic";
import HealthClinicbanner from "../../components/health/healthsetcat/clinic/healthClinicBanner";
import HealthSidebar from "../../components/health/Healthsidebar";
import { Grid } from "@mui/material";
import PopularNews from "../../components/catepagerightbar/PopularNews";


export default function HealthClinicPage() {
  return (
    <>
      <HealthClinic />
      <HealthClinicbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <HealthSidebar />
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
