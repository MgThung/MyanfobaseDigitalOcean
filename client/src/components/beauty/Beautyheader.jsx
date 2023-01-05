import React from "react";
import "../technology/technology.css";
import "../travelling/theader.css";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Beautyheader = () => {
  return (
    <>
      <section className="container technology">
        <Box sx={{ marginButtom: "10px" }}>
          <Breadcrumbs
            color={"#747474"}
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography>Home</Typography>
            </Link>
            <Typography>Beauty</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Beauty
        </Typography>

        <div className="Catabutton">
          <Link to="/makeup">
            <button className="tec">Make-up</button>
          </Link>
          <Link to="/Blogger">
            <button className="tec">Beauty Blog</button>
          </Link>
          <Link to="/skincare">
            <button className="tec">Skin care</button>
          </Link>
          <Link to="/beautyclinic">
            <button className="tec">Beauty Clinic</button>
          </Link>
          <Link to="/salon">
            <button className="tec">Beauty Salon</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Beauty isn't just superficial, and is actually a key part of how we
          understand and interact with the world around us. Beauty infuses our
          inner life and helps us form relationships with our environment, from
          food to landscape to art, and even with each other.
        </Typography>
      </section>
    </>
  );
};

export default Beautyheader;
