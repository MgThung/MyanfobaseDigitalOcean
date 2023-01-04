import BeautyClinic from "../../components/beauty/setcat/clinic";
import BeautyClinicBanner from "../../components/beauty/setcat/Clinicbanner";
import BeautyClinicRightbar from "../../components/beauty/setcat/Clinicrightbar";
import BeautyClinicsidebar from "../../components/beauty/setcat/Clinicsidebar";

export default function BeautyClinicpage() {
  return (
    <>
      <section className="container">
        <BeautyClinic />
        <BeautyClinicBanner />
        <section className="tecbody">
          <BeautyClinicsidebar category={"Beauty-Clinic"} />
          <BeautyClinicRightbar />
        </section>
      </section>
    </>
  );
}
