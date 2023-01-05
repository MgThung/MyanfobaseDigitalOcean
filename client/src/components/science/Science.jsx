import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "./science.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Science() {
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
            <Typography>Science</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Science
        </Typography>
        <div className="Catabutton">
          <Link to="/astronomy">
            <button className="tec">Astronomy</button>
          </Link>
          <Link to="/biology">
            <button className="tec">Biology</button>
          </Link>
         
          <Link to="/earthscience">
            <button className="tec">Earth science</button>
          </Link>
        
          <Link to="/plants">
            <button className="tec">Plants</button>
          </Link>
        
          <Link to="/mammals">
            <button className="tec">Mammals</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Scientific knowledge allows us to develop new technologies, solve practical problems, and make informed decisions — both individually and collectively. Because its products are so useful, the process of science is intertwined with those applications: New scientific knowledge may lead to new applications.
        </Typography>
      </section>
    </>
  );
}
