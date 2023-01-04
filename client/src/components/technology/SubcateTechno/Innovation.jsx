import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../technology.css"

export default function Innovation() {
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
          <Link to="/technology" className="link1" fontSize="25px">
            <Typography>Technology</Typography>
          </Link>
          <Typography>Innovation</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Technology
      </Typography>
      <div className="Catabutton">
        <Link to="/computer">
          <button className="tec">Computer</button>
        </Link>
        <Link to="/electronic">
          <button className="tec">Electronics</button>
        </Link>
        <Link to="/innovation">
          <button className="tec">Innovation</button>
        </Link>
        <Link to="/smartphone">
          <button className="tec">Smartphone</button>
        </Link>
        <Link to="/software">
          <button className="tec">Software</button>
        </Link>
      </div>
    </section>
  );
}
