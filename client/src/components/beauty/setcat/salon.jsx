import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../technology/technology.css";
import "../../travelling/theader.css";

export default function Salon() {
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
          <Link to="/beauty" className="link1" fontSize="25px">
            <Typography>Beauty</Typography>
          </Link>
          <Typography>Salon</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Salon
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
          <button className="tec btnactive">Beauty Salon</button>
        </Link>
      </div>
    </section>
  );
}
