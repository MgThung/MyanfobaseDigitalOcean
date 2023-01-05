import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../technology/technology.css";

export default function Plants() {
  return (
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
          <Link to="/science" className="link1" fontSize="25px">
            <Typography>Science</Typography>
          </Link>
          <Typography>Plants</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Plants
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
        {/* <Link to="/mathematics">
            <button className="tec">Mathematics</button>
          </Link> */}
        <Link to="/plants">
          <button className="tec btnactive">Plants</button>
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
        Modern technology has become a total phenomenon for civilization, the
        defining force of a new social order in which efficiency is no longer an
        option but a necessity imposed on all human activity.
      </Typography>
    </section>
  );
}
