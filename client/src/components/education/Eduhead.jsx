import React from "react";
import { Link } from "react-router-dom";
import "../travelling/theader.css";
import "../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Eduhead() {
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
            <Typography>Education</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Education
        </Typography>

        <div className="button">
          <Link to="/university">
            <button className="tec">University & Collage</button>
          </Link>

          <Link to="/private">
            <button className="tec">Schools</button>
          </Link>
          <Link to="/online">
            <button className="tec">Online Class</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Education provides stability in life, and it's something that no one can ever take away from you. By being well-educated and holding a college degree, you increase your chances for better career opportunities and open up new doors for yourself.
        </Typography>
      </section>
    </>
  );
}
