import Latestbar from "../../components/catepagerightbar/Latestbar";
import Medicine from "../../components/health/healthsetcat/Medicine/medicine";
import MedicineBanner from "../../components/health/healthsetcat/Medicine/medicinebanner";
import MedicineSidebar from "../../components/health/healthsetcat/Medicine/medicineSidebar";
import { Grid } from "@mui/material";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import HealthSidebar from "../../components/health/Healthsidebar";




export default function MedicinePage() {
  return (
    <>
        <Medicine />
        <MedicineBanner />
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
