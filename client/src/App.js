import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { Suspense } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPosts } from "./features/posts/postSlice";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import UniversityPage from "./pages/education/University";
import PrivateSchoolPage from "./pages/education/Private";
import OnlineClassPage from "./pages/education/Online";

import ConsumerPage from "./pages/business/Consumer";
import IndustrialPage from "./pages/business/industrial";
import JewelryPage from "./pages/business/Jewelery";

import TradingPage from "./pages/business/Trading";
import SpinnerLoading from "./components/login/SpinnerLoading";

const AddCategoriesPage = React.lazy(() =>
  import("./pages/categories/AddCategoriesPage")
);
const Animepage = React.lazy(() => import("./pages/art/Animepage"));
const Art = React.lazy(() => import("./pages/art/Art"));
const Doodlepage = React.lazy(() => import("./pages/art/Doodlepage"));
const Painting = React.lazy(() => import("./pages/art/Painting"));
const Sketchespage = React.lazy(() => import("./pages/art/Sketchespage"));

const Beauty = React.lazy(() => import("./pages/beauty/Beauty"));
const Beautyblogger = React.lazy(() => import("./pages/beauty/Beautyblogger"));
const Makeuppage = React.lazy(() => import("./pages/beauty/makeupPage"));
const SalonPage = React.lazy(() => import("./pages/beauty/SalonPage"));
const Skinpage = React.lazy(() => import("./pages/beauty/Skinpage"));
const ExercisePage = React.lazy(() =>
  import("./pages/lifestylepage/exercisePage")
);
const Lifestyle = React.lazy(() => import("./pages/lifestylepage/Lifestyle"));

const Cartoonpage = React.lazy(() =>
  import("./pages/entertainment/Cartoonpage")
);

const Entertainment = React.lazy(() =>
  import("./pages/entertainment/Entertainment")
);
const Koreanpage = React.lazy(() => import("./pages/entertainment/Koreanpage"));
const Moviepage = React.lazy(() => import("./pages/entertainment/Moviepage"));
const Music = React.lazy(() => import("./pages/entertainment/Music"));

const DetailPage = React.lazy(() => import("./pages/detailpage/DetailPage"));
const Business = React.lazy(() => import("./pages/business/Business"));
const Education = React.lazy(() => import("./pages/education/Education"));
const University = React.lazy(() => import("./pages/education/University"));
const Government = React.lazy(() => import("./pages/government/Govenment"));
const Law = React.lazy(() => import("./pages/government/Law"));

const Ministry = React.lazy(() => import("./pages/government/Ministry"));
const Passport = React.lazy(() => import("./pages/government/Passport"));
const Police = React.lazy(() => import("./pages/government/Police"));
const Culture = React.lazy(() => import("./pages/history/Culture"));
const Dress = React.lazy(() => import("./pages/history/Dress"));

const History = React.lazy(() => import("./pages/history/History"));
const Region = React.lazy(() => import("./pages/history/Region"));
const Religous = React.lazy(() => import("./pages/history/Religous"));
// import Home from "./pages/home/Home";

const FictionPage = React.lazy(() => import("./pages/literature/FictionPage"));
const LiteraturePage = React.lazy(() =>
  import("./pages/literature/LiteraturePage")
);
const NovelPage = React.lazy(() => import("./pages/literature/NovelPage"));
const PoetryPage = React.lazy(() => import("./pages/literature/PoetryPage"));
const RomancePage = React.lazy(() => import("./pages/literature/RomancePage"));
const ShortstoryPage = React.lazy(() =>
  import("./pages/literature/ShortstoryPage")
);
const PostformPage = React.lazy(() => import("./pages/post/PostformPage"));
const AstronomyPage = React.lazy(() => import("./pages/science/AstronomyPage"));
const BilologyPage = React.lazy(() => import("./pages/science/BilologyPage"));
const EarthSciencePage = React.lazy(() =>
  import("./pages/science/EarthSciencePage")
);
const MammalsPage = React.lazy(() => import("./pages/science/MammalsPage"));
const PlantsPage = React.lazy(() => import("./pages/science/PlantsPage"));
const SciencePage = React.lazy(() => import("./pages/science/SciencePage"));
const Boxingpage = React.lazy(() => import("./pages/sport/Boxingpage"));
const Caneballpage = React.lazy(() => import("./pages/sport/Caneballpage"));
const Chesspage = React.lazy(() => import("./pages/sport/Chesspage"));
const Footballpage = React.lazy(() => import("./pages/sport/Footballpage"));
const Gammingpage = React.lazy(() => import("./pages/sport/Gammingpage"));
const Sport = React.lazy(() => import("./pages/sport/Sport"));
const ComputerPage = React.lazy(() => import("./pages/tecnology/ComputerPage"));
const ElectronicPage = React.lazy(() =>
  import("./pages/tecnology/ElectronicPage")
);

const SmartphonePage = React.lazy(() =>
  import("./pages/tecnology/SmartphonePage")
);
const SoftwarePage = React.lazy(() => import("./pages/tecnology/SoftwarePage"));
const TecnologyPages = React.lazy(() =>
  import("./pages/tecnology/TecnologyPage")
);

const Beach = React.lazy(() => import("./pages/travelling/Beach"));
const Mountain = React.lazy(() => import("./pages/travelling/Mountain"));
const Pagoda = React.lazy(() => import("./pages/travelling/Pagoda"));
const Travel = React.lazy(() => import("./pages/travelling/Travel"));
const Waterfall = React.lazy(() => import("./pages/travelling/Waterfall"));

const LuxuryPage = React.lazy(() => import("./pages/lifestylepage/luxuryPage"));

const HealthyLifePage = React.lazy(() =>
  import("./pages/lifestylepage/healthyPage")
);
const BeautyClinicpage = React.lazy(() => import("./pages/beauty/Clinicpage"));
const Healthpage = React.lazy(() => import("./pages/healthpage/HealthPage"));
const HealthClinicPage = React.lazy(() =>
  import("./pages/healthpage/HealthClinicPage")
);
const Hfoodspage = React.lazy(() => import("./pages/healthpage/HfoodsPage"));
const InfodoctorPage = React.lazy(() =>
  import("./pages/healthpage/InfodoctorPage")
);
const MedicinePage = React.lazy(() =>
  import("./pages/healthpage/MedicinePage")
);
const Yogapage = React.lazy(() => import("./pages/healthpage/YogaPage"));
const LoginandRegister = React.lazy(() =>
  import("./pages/loginPage/LoginPage")
);
const UpdateformPage = React.lazy(() => import("./pages/post/UpdateformPage"));
const RequestFormPage = React.lazy(() =>
  import("./pages/adminPage/RequestFormPage")
);
const AdminPage = React.lazy(() => import("./pages/adminPage/AdminPage"));
const AdmindetailPage = React.lazy(() =>
  import("./pages/adminDetail/AdminDetailPage")
);
// import SearchPage from "./pages/searchpage/SearchPage";
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const Aboutpage = React.lazy(() => import("./pages/aboutus/Aboutpage"));
const UsereditForm = React.lazy(() => import("./pages/profile/userEditForm"));

const LazyHome = React.lazy(() => import("./pages/home/Home"));
const LazySearch = React.lazy(() => import("./pages/searchpage/SearchPage"));
const ForgetPasswordPage = React.lazy(() =>
  import("./pages/loginPage/ForgetpasswordPage")
);
const PasswordResetPage = React.lazy(() =>
  import("./pages/loginPage/PasswordResetPage")
);
const UserDetailPage = React.lazy(() =>
  import("./pages/userdetailPage/UserDetailPage")
);
// const DetailWithCount = React.lazy(() =>
//   import("./pages/userdetailPage/DetailWithCount")
// );

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      id={darkMode ? "blackMode" : "whiteMode"}
      style={{
        background: darkMode ? "#1a1a1a" : "white",
        color: darkMode ? "white" : "#1a1a1a",
      }}
    >
      <Header />
      <Suspense fallback={<SpinnerLoading />}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/technology" element={<TecnologyPages />} />

          <Route path="/sports" element={<Sport />} />
          <Route path="/football" element={<Footballpage />} />
          <Route path="/boxing" element={<Boxingpage />} />
          <Route path="/chess" element={<Chesspage />} />
          <Route path="/cane" element={<Caneballpage />} />
          <Route path="/gamming" element={<Gammingpage />} />

          <Route path="/arts" element={<Art />} />
          <Route path="/anime" element={<Animepage />} />
          <Route path="/sketches" element={<Sketchespage />} />
          <Route path="/doodle" element={<Doodlepage />} />

          <Route path="/painting" element={<Painting />} />

          <Route path="/travel" element={<Travel />} />
          <Route path="/pagoda" element={<Pagoda />} />
          <Route path="/beach" element={<Beach />} />
          <Route path="/waterfall" element={<Waterfall />} />
          <Route path="/mountains" element={<Mountain />} />

          <Route path="/computer" element={<ComputerPage />} />
          <Route path="/electronic" element={<ElectronicPage />} />

          <Route path="/smartphone" element={<SmartphonePage />} />
          <Route path="/software" element={<SoftwarePage />} />

          <Route path="/korean" element={<Koreanpage />} />
          <Route path="/movie" element={<Moviepage />} />
          <Route path="/cartoon" element={<Cartoonpage />} />

          <Route path="/music" element={<Music />} />

          <Route path="/healthylife" element={<HealthyLifePage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/lifestyles" element={<Lifestyle />} />
          <Route path="/Blogger" element={<Beautyblogger />} />
          <Route path="/makeup" element={<Makeuppage />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/skincare" element={<Skinpage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/beautyclinic" element={<BeautyClinicpage />} />

          <Route path="/government" element={<Government />} />
          <Route path="/ministry" element={<Ministry />} />
          <Route path="/police_station" element={<Police />} />

          <Route path="/passport" element={<Passport />} />
          <Route path="/law" element={<Law />} />

          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />

          <Route path="/religion" element={<Religous />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/region" element={<Region />} />

          <Route path="/business" element={<Business />} />

          <Route path="/education" element={<Education />} />
          <Route path="/university" element={<University />} />

          <Route path="/science" element={<SciencePage />} />
          <Route path="/astronomy" element={<AstronomyPage />} />
          <Route path="/biology" element={<BilologyPage />} />

          <Route path="/earthscience" element={<EarthSciencePage />} />
          <Route path="/plants" element={<PlantsPage />} />

          <Route path="/mammals" element={<MammalsPage />} />

          <Route path="/literature" element={<LiteraturePage />} />

          <Route path="/luxury" element={<LuxuryPage />} />
          <Route path="/poetry" element={<PoetryPage />} />
          <Route path="/fiction" element={<FictionPage />} />

          <Route path="/novel" element={<NovelPage />} />
          <Route path="/shortstory" element={<ShortstoryPage />} />
          <Route path="/romance" element={<RomancePage />} />

          <Route path="/health" element={<Healthpage />} />
          <Route path="/healthclinic" element={<HealthClinicPage />} />
          <Route path="/hfoods" element={<Hfoodspage />} />
          <Route path="/infodoctor" element={<InfodoctorPage />} />
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/private" element={<PrivateSchoolPage />} />
          <Route path="/online" element={<OnlineClassPage />} />

          <Route path="/yoga" element={<Yogapage />} />
          <Route path="/consumer" element={<ConsumerPage />} />
          <Route path="/industrial" element={<IndustrialPage />} />
          <Route path="/gems" element={<JewelryPage />} />
          <Route path="/tranding" element={<TradingPage />} />

          <Route path="/post" element={<PostformPage />} />
          <Route path="/update/:id" element={<UpdateformPage />} />

          {/* <Route
          path="/detail"
          element={
            <React.Suspense fallback={<SpinnerLoading/>}>
              <DetailPage />
              
          }
        /> */}
          <Route path="/login" element={<LoginandRegister />} />

          <Route path="/admin" element={<AdminPage />} />

          <Route path="/requestform" element={<RequestFormPage />} />
          <Route path="/admindetail/:id" element={<AdmindetailPage />} />
          <Route path="/search" element={<LazySearch />} />

          <Route path="/aboutus" element={<Aboutpage />} />
          <Route path="/editprofile" element={<UsereditForm />} />
          {/* <Route
          path="/:cate/:id"
          element={
            <React.Suspense fallback={<SpinnerLoading/>}>
              {/* <UserDetailPage /> */}
          {/* <DetailPage />
           */}

          {/* /> */}
          <Route path="/:cate/:id" element={<DetailPage />} />
          {/* <Route
          path="/detail/:cate/:id"
          element={
            <React.Suspense fallback={<SpinnerLoading/>}>
              <DetailWithCount />
              
          }
        /> */}
          <Route path="/addcate" element={<AddCategoriesPage />} />

          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route
            path="/passwordreset/:userId/:resetString"
            element={<PasswordResetPage />}
          />
        </Routes>
      </Suspense>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
