import React, { Suspense } from "react";
import HomeHeader from "../../components/homeheadercompo/Homeheader";
import FadeLoader from "react-spinners/FadeLoader";

import "./home.css";
const LastNews = React.lazy(() =>
  import("../../components/lastviedo/LastNews")
);
const Homelifestyle = React.lazy(() =>
  import("../../components/homelifestyle/Homelifestyle")
);
const HomeEducation = React.lazy(() =>
  import("../../components/homeeducation/homeEducation")
);
// const Viedo = React.lazy(() => import("../../components/Vedio/Viedo"));

// const Categorieslider = React.lazy(() =>
//   import("../../components/categories/Categorieslider")
// );
const SpinnerFade = () => {
  return (
    <div>
      <FadeLoader
        color="#345fbf"
        // loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

const CategoryCount = React.lazy(() =>
  import("../../components/categories/CategoryCount")
);
const Home = () => {
  return (
    <div className="HomePageDiv">
      <HomeHeader />
      <Suspense fallback={<SpinnerFade />}>
        <LastNews />
      </Suspense>
      <Suspense fallback={<SpinnerFade />}>
        <Homelifestyle />
      </Suspense>
      <Suspense fallback={<SpinnerFade />}>
        <HomeEducation />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Viedo />
      </Suspense> */}
      <Suspense fallback={<SpinnerFade />}>
        {/* <Categorieslider /> */}
        <CategoryCount />
      </Suspense>
    </div>
  );
};

export default Home;
