import React from "react";
import { Link } from "react-router-dom";

import "../travelling/theader.css";
import "../technology/technology.css";
import "./gover.css";

import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Goverhead() {
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
            <Typography>Government</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Government
        </Typography>
        <div className="Catabutton">
          <Link to="/ministry">
            <button className="tec">Ministry</button>
          </Link>
          <Link to="/police_station">
            <button className="tec">Police Station</button>
          </Link>

          <Link to="/passport">
            <button className="tec">Passport</button>
          </Link>
          <Link to="/law">
            <button className="tec">Law</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Governments provide the parameters for everyday behavior for citizens,
          protect them from outside interference, and often provide for their
          well-being and happiness.In the last few centuries, some economists
          and thinkers have advocated government control over some aspects of
          the economy.
        </Typography>
      </section>
    </>
  );
}
