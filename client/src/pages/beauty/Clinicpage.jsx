import BeautyClinic from "../../components/beauty/setcat/clinic";
import BeautyClinicBanner from "../../components/beauty/setcat/Clinicbanner";
import { Grid } from "@mui/material";
import BeautySidebar from "../../components/beauty/Beautysidebar";
import BeautyRighrbar from "../../components/beauty/Bearightbar";

export default function BeautyClinicpage() {
  return (
    <>
      <BeautyClinic />
      <BeautyClinicBanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BeautySidebar category={"Beauty-Clinic"} />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BeautyRighrbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
