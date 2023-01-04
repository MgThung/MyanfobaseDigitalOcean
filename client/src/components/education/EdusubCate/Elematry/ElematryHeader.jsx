import React from "react";
import { Link } from "react-router-dom";
import "../../../travelling/theader.css"
import "../../../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function ElematryHeader() {
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
            <Link to="/education" className="link1" fontSize="25px">
              <Typography>Education</Typography>
            </Link>
            <Typography>Elematry School</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Elematry School
        </Typography>

        <div className="catebutton">
          <Link to="/university">
            <button className="tec">University & Collage</button>
          </Link>
          <Link to="/elementary">
            <button className="tec btnactive">Elementary School</button>
          </Link>
          <Link to="/private">
            <button className="tec">Private School</button>
          </Link>
          <Link to="/online">
            <button className="tec">Online Class</button>
          </Link>
          <Link to="/equality">
            <button className="tec">Equality-Education </button>
          </Link>
        </div>
      </section>
    </>
  );
}
