import React from "react";
import { Link } from "react-router-dom";
import "../../../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Doodleheader() {
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
          <Link to="/arts" className="link1" fontSize="25px">
            <Typography>Arts</Typography>
          </Link>
          <Typography>doodle art</Typography>
        </Breadcrumbs>
      </Box>

      <div className="sectop">
        <h1>Doodle art</h1>
      </div>
      <div className="Catabutton">
        <Link to="/anime">
          <button className="tec">anime art</button>
        </Link>
        <Link to="/sketches">
          <button className="tec">sketches art</button>
        </Link>
        <Link to="/doodle">
          <button className="tec btnactive">doodle art</button>
        </Link>
        <Link to="/painting">
          <button className="tec">painting</button>
        </Link>
      </div>
    </section>
  );
}
