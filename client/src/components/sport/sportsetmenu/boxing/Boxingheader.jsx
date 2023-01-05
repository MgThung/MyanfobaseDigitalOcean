import React from "react";
import { Link } from "react-router-dom";
import "../../../travelling/theader.css"
// import "../../../technology/technology.css";
import "../../sportbanner.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Boxingheader() {
  return (
    <section className="container travel">
      <Box sx={{ marginButtom: "10px" }}>
        <Breadcrumbs
          color={"#747474"}
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link to="/" className="link1" fontSize="25px">
            <Typography>Home</Typography>
          </Link>
          <Link to="/sports" className="link1" fontSize="25px">
            <Typography>Sport</Typography>
          </Link>
          <Typography>Boxing</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Boxing
      </Typography>
      <div className="Catabutton">
        <Link to="/football">
          <button className="tec">football</button>
        </Link>
        <Link to="/boxing">
          <button className="tec btnactive">boxing</button>
        </Link>
        <Link to="/chess">
          <button className="tec">chess</button>
        </Link>
        <Link to="/cane">
          <button className="tec">cane ball</button>
        </Link>
        <Link to="/gamming">
          <button className="tec">gamming</button>
        </Link>
      </div>
    </section>
  );
}

