import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Exercise from "../../components/lifestyle/lifestyleSetmenu/exercise/exercise";
import ExerciseBanner from "../../components/lifestyle/lifestyleSetmenu/exercise/exerciseBanner";
import Lifestylesidebar from "../../components/lifestyle/Lifestylesidebar";
import { Grid } from "@mui/material";

export default function ExercisePage() {
  return (
    <>
        <Exercise />
        <ExerciseBanner />
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
