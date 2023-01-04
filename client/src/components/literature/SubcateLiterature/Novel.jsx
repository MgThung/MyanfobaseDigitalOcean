import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Breadcrumbs, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../technology/technology.css"
import "../../travelling/theader.css"

export default function Novel() {
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
          <Link to="/literature" className="link1" fontSize="25px">
            <Typography>Literature</Typography>
          </Link>

          <Typography>Novel</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Novel
      </Typography>

      <div className="button">
        <Link to="/novel">
          <button className="tec">Novel</button>
        </Link>
        <Link to="/shortstory">
          <button className="tec">Short-Story</button>
        </Link>
        <Link to="/romance">
          <button className="tec">Romance</button>
        </Link>
        <Link to="/fiction">
          <button className="tec">Fiction</button>
        </Link>
        <Link to="/poetry">
          <button className="tec">Poetry</button>
        </Link>
      </div>
    </section>
  );
}
