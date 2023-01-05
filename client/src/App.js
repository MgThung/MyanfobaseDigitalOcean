import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React from "react";
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
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Profile />
            </React.Suspense>
          }
        />

        <Route
          path="/travel"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Travel />
            </React.Suspense>
          }
        />
        <Route
          path="/beauty"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Beauty />
            </React.Suspense>
          }
        />
        <Route
          path="/entertainment"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Entertainment />
            </React.Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <TecnologyPages />
            </React.Suspense>
          }
        />

        <Route
          path="/sports"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Sport />
            </React.Suspense>
          }
        />
        <Route
          path="/football"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Footballpage />
            </React.Suspense>
          }
        />
        <Route
          path="/boxing"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Boxingpage />
            </React.Suspense>
          }
        />
        <Route
          path="/chess"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Chesspage />
            </React.Suspense>
          }
        />
        <Route
          path="/cane"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Caneballpage />
            </React.Suspense>
          }
        />
        <Route
          path="/gamming"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Gammingpage />
            </React.Suspense>
          }
        />

        <Route
          path="/arts"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Art />
            </React.Suspense>
          }
        />
        <Route
          path="/anime"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Animepage />
            </React.Suspense>
          }
        />
        <Route
          path="/sketches"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Sketchespage />
            </React.Suspense>
          }
        />
        <Route
          path="/doodle"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Doodlepage />
            </React.Suspense>
          }
        />

        <Route
          path="/painting"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Painting />
            </React.Suspense>
          }
        />

        <Route
          path="/travel"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Travel />
            </React.Suspense>
          }
        />
        <Route
          path="/pagoda"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Pagoda />
            </React.Suspense>
          }
        />
        <Route
          path="/beach"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Beach />
            </React.Suspense>
          }
        />
        <Route
          path="/waterfall"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Waterfall />
            </React.Suspense>
          }
        />
        <Route
          path="/mountains"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Mountain />
            </React.Suspense>
          }
        />

        <Route
          path="/computer"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <ComputerPage />
            </React.Suspense>
          }
        />
        <Route
          path="/electronic"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <ElectronicPage />
            </React.Suspense>
          }
        />

        <Route
          path="/smartphone"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <SmartphonePage />
            </React.Suspense>
          }
        />
        <Route
          path="/software"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <SoftwarePage />
            </React.Suspense>
          }
        />

        <Route
          path="/korean"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Koreanpage />
            </React.Suspense>
          }
        />
        <Route
          path="/movie"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Moviepage />
            </React.Suspense>
          }
        />
        <Route
          path="/cartoon"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Cartoonpage />
            </React.Suspense>
          }
        />

        <Route
          path="/music"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Music />
            </React.Suspense>
          }
        />

        <Route
          path="/healthylife"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <HealthyLifePage />
            </React.Suspense>
          }
        />
        <Route
          path="/science"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <SciencePage />
            </React.Suspense>
          }
        />
        <Route
          path="/lifestyles"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Lifestyle />
            </React.Suspense>
          }
        />
        <Route
          path="/Blogger"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Beautyblogger />
            </React.Suspense>
          }
        />
        <Route
          path="/makeup"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Makeuppage />
            </React.Suspense>
          }
        />
        <Route
          path="/salon"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <SalonPage />
            </React.Suspense>
          }
        />
        <Route
          path="/skincare"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Skinpage />
            </React.Suspense>
          }
        />
        <Route
          path="/exercise"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <ExercisePage />
            </React.Suspense>
          }
        />
        <Route
          path="/beautyclinic"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <BeautyClinicpage />
            </React.Suspense>
          }
        />

        <Route
          path="/government"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Government />
            </React.Suspense>
          }
        />
        <Route
          path="/ministry"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Ministry />
            </React.Suspense>
          }
        />
        <Route
          path="/police_station"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Police />
            </React.Suspense>
          }
        />

        <Route
          path="/passport"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Passport />
            </React.Suspense>
          }
        />
        <Route
          path="/law"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Law />
            </React.Suspense>
          }
        />

        <Route
          path="/history"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <History />
            </React.Suspense>
          }
        />
        <Route
          path="/culture"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Culture />
            </React.Suspense>
          }
        />

        <Route
          path="/religion"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Religous />
            </React.Suspense>
          }
        />
        <Route
          path="/dress"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Dress />
            </React.Suspense>
          }
        />
        <Route
          path="/region"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Region />
            </React.Suspense>
          }
        />

        <Route
          path="/business"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Business />
            </React.Suspense>
          }
        />

        <Route
          path="/education"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Education />
            </React.Suspense>
          }
        />
        <Route
          path="/university"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <University />
            </React.Suspense>
          }
        />

        <Route
          path="/science"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <SciencePage />
            </React.Suspense>
          }
        />
        <Route
          path="/astronomy"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <AstronomyPage />
            </React.Suspense>
          }
        />
        <Route
          path="/biology"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <BilologyPage />
            </React.Suspense>
          }
        />

        <Route
          path="/earthscience"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <EarthSciencePage />
            </React.Suspense>
          }
        />
        <Route
          path="/plants"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <PlantsPage />
            </React.Suspense>
          }
        />

        <Route
          path="/mammals"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <MammalsPage />
            </React.Suspense>
          }
        />

        <Route
          path="/literature"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <LiteraturePage />
            </React.Suspense>
          }
        />

        <Route
          path="/luxury"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <LuxuryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/poetry"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <PoetryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/fiction"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <FictionPage />
            </React.Suspense>
          }
        />

        <Route
          path="/novel"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <NovelPage />
            </React.Suspense>
          }
        />
        <Route
          path="/shortstory"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <ShortstoryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/romance"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <RomancePage />
            </React.Suspense>
          }
        />

        <Route
          path="/health"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Healthpage />
            </React.Suspense>
          }
        />
        <Route
          path="/healthclinic"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <HealthClinicPage />
            </React.Suspense>
          }
        />
        <Route
          path="/hfoods"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Hfoodspage />
            </React.Suspense>
          }
        />
        <Route
          path="/infodoctor"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <InfodoctorPage />
            </React.Suspense>
          }
        />
        <Route
          path="/medicine"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <MedicinePage />
            </React.Suspense>
          }
        />
        <Route
          path="/university"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <UniversityPage />
            </React.Suspense>
          }
        />
        <Route
          path="/private"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <PrivateSchoolPage />
            </React.Suspense>
          }
        />
        <Route
          path="/online"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <OnlineClassPage />
            </React.Suspense>
          }
        />

        <Route
          path="/yoga"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Yogapage />
            </React.Suspense>
          }
        />
        <Route
          path="/consumer"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <ConsumerPage />
            </React.Suspense>
          }
        />
        <Route
          path="/industrial"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <IndustrialPage />
            </React.Suspense>
          }
        />
        <Route
          path="/gems"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <JewelryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/tranding"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <TradingPage />
            </React.Suspense>
          }
        />

        <Route
          path="/post"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <PostformPage />
            </React.Suspense>
          }
        />
        <Route
          path="/update/:id"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <UpdateformPage />
            </React.Suspense>
          }
        />

        {/* <Route
          path="/detail"
          element={
            <React.Suspense fallback={<SpinnerLoading/>}>
              <DetailPage />
            </React.Suspense>
          }
        /> */}
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <LoginandRegister />
            </React.Suspense>
          }
        />

        <Route
          path="/admin"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <AdminPage />
            </React.Suspense>
          }
        />

        <Route
          path="/requestform"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <RequestFormPage />
            </React.Suspense>
          }
        />
        <Route
          path="/admindetail/:id"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <AdmindetailPage />
            </React.Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <LazySearch />
            </React.Suspense>
          }
        />

        <Route
          path="/aboutus"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <Aboutpage />
            </React.Suspense>
          }
        />
        <Route
          path="/editprofile"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <UsereditForm />
            </React.Suspense>
          }
        />
        {/* <Route
          path="/:cate/:id"
          element={
            <React.Suspense fallback={<SpinnerLoading/>}>
              {/* <UserDetailPage /> */}
        {/* <DetailPage />
            </React.Suspense> */}

        {/* /> */}
        <Route
          path="/:cate/:id"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <DetailPage />
            </React.Suspense>
          }
        />
        {/* <Route
          path="/detail/:cate/:id"
          element={
            <React.Suspense fallback={<SpinnerLoading/>}>
              <DetailWithCount />
            </React.Suspense>
          }
        /> */}
        <Route
          path="/addcate"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <AddCategoriesPage />
            </React.Suspense>
          }
        />

        <Route
          path="/forgetpassword"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <ForgetPasswordPage />
            </React.Suspense>
          }
        />
        <Route
          path="/passwordreset/:userId/:resetString"
          element={
            <React.Suspense fallback={<SpinnerLoading />}>
              <PasswordResetPage />
            </React.Suspense>
          }
        />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
