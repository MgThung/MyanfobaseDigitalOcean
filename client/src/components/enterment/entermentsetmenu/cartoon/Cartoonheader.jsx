import React from "react";
import { Link } from "react-router-dom";
// import "../../../technology/technology.css";
import "../../entermentbanner.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Cartoonheader() {
  return (
    <section className="container enter">
      <Box sx={{ marginButtom: "10px" }}>
        <Breadcrumbs
          color={"#747474"}
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link to="/" className="link1" fontSize="25px">
            <Typography>Home</Typography>
          </Link>
          <Link to="/entertainment" className="link1" fontSize="25px">
            <Typography color={"#747474"}>Entertainment</Typography>
          </Link>
          <Typography>Cartoon</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Cartoon
      </Typography>
      <div className="Catabutton">
        <Link to="/korean">
          <button className="tec">korean</button>
        </Link>
        <Link to="/movie">
          <button className="tec">movie</button>
        </Link>
        <Link to="/cartoon">
          <button className="tec btnactive">cartoon</button>
        </Link>
        <Link to="/music">
          <button className="tec">music</button>
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
