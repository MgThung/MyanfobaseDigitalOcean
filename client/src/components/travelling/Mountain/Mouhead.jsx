import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../technology/technology.css";
import "../theader.css";
const Mouhead = () => {
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
            <Typography>Travel</Typography>
          </Link>
          <Typography>Mountain</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Mountain
      </Typography>
      <div className="Catabutton">
        <Link to="/pagoda">
          <button className="tec">Pagoda</button>
        </Link>
        <Link to="/beach">
          <button className="tec">Beach</button>
        </Link>
        <Link to="/waterfall">
          <button className="tec">Waterfall</button>
        </Link>
        <Link to="/mountains">
          <button className="tec">Mountains</button>
        </Link>
        <Link to="/Advanture_trip">
          <button className="tec">Advanture trip</button>
        </Link>
      </div>
      <Typography
        variant="body1"
        fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
        fontStyle={"italic"}
        align={"justify"}
        sx={{ marginTop: "18px", color: "#777" }}
      >
        Modern technology has become a total phenomenon for civilization, the
        defining force of a new social order in which efficiency is no longer an
        option but a necessity imposed on all human activity. tttttttttttttt
        ttttttttttttttttttttttt ttttttttttttttttttttttttttttttttttttt
        tttttttttttttttttttttttttttttttttttttttttttttttttttttt
      </Typography>
    </section>
  );
};

export default Mouhead;
