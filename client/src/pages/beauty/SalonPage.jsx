import BeautyRighrbar from "../../components/beauty/Bearightbar";
import BeautySidebar from "../../components/beauty/Beautysidebar";
import Salon from "../../components/beauty/setcat/salon";
import Salonbanner from "../../components/beauty/setcat/Salonbanner";
import { Grid } from "@mui/material";


export default function SalonPage() {
  return (
    <>
      <Salon />
      <Salonbanner />
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
