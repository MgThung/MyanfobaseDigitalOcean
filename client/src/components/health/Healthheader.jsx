import React from "react";
import "../technology/technology.css";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const HealthHeader = () => {
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
            <Typography>Health</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Health
        </Typography>
        <div className="Catabutton">
          <Link to="/infodoctor">
            <button className="tec">Info Doctor</button>
          </Link>
          <Link to="/healthclinic">
            <button className="tec">Clinic</button>
          </Link>
          <Link to="/yoga">
            <button className="tec">Yoga</button>
          </Link>
          <Link to="/hfoods">
            <button className="tec">Healthy Foods</button>
          </Link>
          <Link to="/medicine">
            <button className="tec">medicine</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          “Time and health are two precious assets that we don't recognize and
          appreciate until they have been depleted.” Having good health is
          directly related to leading a productive life. The functionality of
          the body is interconnected between various organs. Keeping the organs
          healthy is essential for proper functioning. As health is the state of
          physical, mental and social well-being, having good health is
          important.
        </Typography>
      </section>
    </>
  );
};

export default HealthHeader;
