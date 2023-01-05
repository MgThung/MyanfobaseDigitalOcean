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
              className="headertypo"
              variant="h1"
            
              fontFamily="Heebo"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "50px",
                  md: "60px",
                  lg: "90px",
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
                Have a great day and be healthy. We wish you to get a lot of
                knowledge, pleasure and latest information by visiting our
                Website.
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
