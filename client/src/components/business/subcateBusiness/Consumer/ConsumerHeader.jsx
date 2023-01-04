import React from "react";
import { Link } from "react-router-dom";
import "../../../travelling/theader.css"
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function ConsumerHeader() {
  return (
    <>
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
            <Link to="/business" className="link1" fontSize="25px">
              <Typography>Business</Typography>
            </Link>
            <Typography>Consumer Service</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Consumer Service
        </Typography>
        <div className="button">
          <Link to="/oil">
            <button className="tec">Oil & Gas</button>
          </Link>
          <Link to="/consumer">
            <button className="tec btnactive">Consumer Services</button>
          </Link>
          <Link to="/tranding">
            <button className="tec">Tranding Goods</button>
          </Link>
          <Link to="/industrial">
            <button className="tec">Industrial</button>
          </Link>
          <Link to="/gems">
            <button className="tec">Gems & Jewelry</button>
          </Link>
        </div>
      </section>
    </>
  );
}
