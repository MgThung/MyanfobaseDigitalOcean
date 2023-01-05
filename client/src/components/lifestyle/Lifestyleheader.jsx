import React from "react";
import "../technology/technology.css";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Lifestyleheader = () => {
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
            <Typography>Lifestyle</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Lifestyle
        </Typography>
        <div className="Catabutton">
          <Link to="/exercise">
            <button className="tec">Exercise</button>
          </Link>
          <Link to="/healthylife">
            <button className="tec">Healthy Life</button>
          </Link>
          <Link to="/Luxury">
            <button className="tec">Luxury</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          A healthy lifestyle is important for everyone. When we look after our
          physical health, we feel better too – fitter, more relaxed and better
          able to cope with things. This is especially important when you have a
          mental illness.
        </Typography>
      </section>
    </>
  );
};

export default Lifestyleheader;
