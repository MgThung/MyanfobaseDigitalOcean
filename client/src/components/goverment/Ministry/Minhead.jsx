import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../technology/technology.css";
import "../../travelling/theader.css";
export default function Minhead() {
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
          <Link to="/government" className="link1" fontSize="25px">
            <Typography>Government</Typography>
          </Link>
          <Typography>Ministry</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Ministry
      </Typography>
      <div className="Catabutton">
        <Link to="/ministry">
          <button className="tec">Ministry</button>
        </Link>
        <Link to="/police_station">
          <button className="tec">Police Station</button>
        </Link>
        <Link to="/leader">
          <button className="tec">Leader</button>
        </Link>

        <Link to="/passport">
          <button className="tec">Passport</button>
        </Link>
        <Link to="/law">
          <button className="tec">Law</button>
        </Link>
      </div>
   
    </section>
  );
}
