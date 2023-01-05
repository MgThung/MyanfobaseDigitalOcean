import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Luxury from "../../components/lifestyle/lifestyleSetmenu/luxury/luxury";
import LuxuryBanner from "../../components/lifestyle/lifestyleSetmenu/luxury/luxuryBanner";
import Lifestylesidebar from "../../components/lifestyle/Lifestylesidebar";
import { Grid } from "@mui/material";

export default function LuxuryPage() {
  return (
    <>
      <Luxury />
      <LuxuryBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Lifestylesidebar category={"Luxury"} />
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
