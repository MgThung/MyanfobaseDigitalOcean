import BeautyRighrbar from "../../components/beauty/Bearightbar";
import BeautySidebar from "../../components/beauty/Beautysidebar";
import Makeup from "../../components/beauty/setcat/makeup";
import Makeupbanner from "../../components/beauty/setcat/Makeupbanner";
import { Grid } from "@mui/material";


export default function Makeuppage() {
  return (
    <>
      <Makeup />
      <Makeupbanner />

      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BeautySidebar />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BeautyRighrbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
