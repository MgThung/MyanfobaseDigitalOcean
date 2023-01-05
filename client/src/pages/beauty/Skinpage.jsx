import BeautyRighrbar from "../../components/beauty/Bearightbar";
import BeautySidebar from "../../components/beauty/Beautysidebar";
import Skinbanner from "../../components/beauty/setcat/Skinbanner";
import Skincare from "../../components/beauty/setcat/skincare";
import { Grid } from "@mui/material";

export default function Skinpage() {
  return (
    <>
      <Skincare />
      <Skinbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BeautySidebar category={"Skincare"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BeautyRighrbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
