import Latestbar from "../../components/catepagerightbar/Latestbar";
import Modern from "../../components/lifestyle/lifestyleSetmenu/modern/modern";
import ModernBanner from "../../components/lifestyle/lifestyleSetmenu/modern/modernBanner";
import { Grid } from "@mui/material";
import Lifestylesidebar from "../../components/lifestyle/Lifestylesidebar";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function ModernPage() {
  return (
    <>
      <Modern />
      <ModernBanner />
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
