import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../../technology/technology.css";

export default function Infodoctor() {
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
          <Link to="/health" className="link1" fontSize="25px">
            <Typography>Health</Typography>
          </Link>
          <Typography>InfoDoctor</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        InfoDoctor
      </Typography>
      <div className="Catabutton">
        <Link to="/infodoctor">
          <button className="tec btnactive">Info Doctor</button>
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
    </section>
  );
}
