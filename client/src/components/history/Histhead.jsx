import React from "react";
import { Link } from "react-router-dom";
import "../travelling/theader.css";

import "../technology/technology.css";
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
            <Typography>History</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          History
        </Typography>

        <div className="button">
          <Link to="/culture">
            <button className="tec">Culture</button>
          </Link>

          <Link to="/religion">
            <button className="tec">Religion</button>
          </Link>
          <Link to="/dress">
            <button className="tec">Dress Code</button>
          </Link>
          <Link to="/region">
            <button className="tec">Region & State</button>
          </Link>
        </div>

        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Studying history helps us understand how events in the past made
          things the way they are today. With lessons from the past, we not only
          learn about ourselves and how we came to be, but also develop the
          ability to avoid mistakes and create better paths for our societies.
        </Typography>
      </section>
    </>
  );
}
