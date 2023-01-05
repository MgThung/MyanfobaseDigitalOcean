import { Link } from "react-router-dom";
import Slider from "../slider/Slider.jsx";
import "./homeheader.css";
import "swiper/css/bundle";
import { themeContext } from "../../Context";
import { useContext } from "react";
import PopularHome from "./PopularHome.jsx";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HomeHeader = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <section className="homeheader">
        <div className="home-banner">
          <div className="home-banner-detail">
            <Typography
              variant="h1"
              fontFamily="Heebo"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "50px",
                  md: "60px",
                  lg: "85px",
                },
              }}
            >
              MyanfobasE
            </Typography>
            <h3>MYANMAR INFORMATION BASE</h3>
            <div className="search-banner">
              <Link to="/search">
                <input
                  type="text"
                  placeholder="Search in here...."
                  id="searchinput"
                />
                <SearchIcon className="searchiconbanner" />
              </Link>
            </div>
            <div className="banner-botton">
              <h2>Welcome to Myanmar</h2>
              <p>
                {/* Myanmar is an unexplored natural and cultural wonder that offers
                one of the best authentic experiences for the traveller to Asia.
                From the snow-covered rugged Himalayas in the north to the
                pristine deep blue waters in the south, Myanmar is a land
                blessed and abundant. */}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
             
              </p>
            </div>
          </div>
        </div>
      </section>
      <Slider />

      <section className="popular-header container">
        <div>
          <Typography
            variant="h4"
            fontWeight="bold"
            className={
              (darkMode ? " populartitle-white" : "populartitle-black",
              "popular-title")
            }
          >
            Popular Now
          </Typography>
          <span className="popular-now-line"></span>
        </div>
        {/* <div className="popular-p">
          <Popularslider />
        </div> */}
      </section>
      <PopularHome />
    </>
  );
};
export default HomeHeader;
