import React from "react";
import { Link } from "react-router-dom";
import "../../../travelling/theader.css";
import "../../../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function UniversityHeader() {
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
          <Link to="/education" className="link1" fontSize="25px">
            <Typography>Education</Typography>
          </Link>
          <Typography>University & Collage</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        University & Collage{" "}
      </Typography>

      <div className="catebutton">
        <Link to="/university">
          <button className="tec btnactive">University & Collage</button>
        </Link>

        <Link to="/private">
          <button className="tec ">Schools</button>
        </Link>
        <Link to="/online">
          <button className="tec ">Online Class</button>
        </Link>
      </div>
    </section>
  );
}
