import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../travelling/theader.css";
import "../../technology/technology.css";
export default function Dresshead() {
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
          <Link to="/" className="link1" fontSize="25px">
            <Typography>History</Typography>
          </Link>
          <Typography>Dress</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Dress
      </Typography>

      <div className="button">
        <Link to="/culture">
          <button className="tec">Culture</button>
        </Link>
       
        <Link to="/religion">
          <button className="tec">Religion</button>
        </Link>
        <Link to="/dress">
          <button className="tec btnactive">Dress Code</button>
        </Link>
        <Link to="/region">
          <button className="tec">Region & State</button>
        </Link>
      </div>
    </section>
  );
}
