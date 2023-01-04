import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../../technology/technology.css"
export default function Modern() {
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
          <Link to="/lifestyle" className="link1" fontSize="25px">
            <Typography>Lifestyle</Typography>
          </Link>
          <Typography>Modern</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Modern
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
        <Link to="/Family">
          <button className="tec">Family</button>
        </Link>
        <Link to="/Modern">
          <button className="tec">Modern</button>
        </Link>
      </div>
    
    </section>
  );
}
