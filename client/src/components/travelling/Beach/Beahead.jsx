import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../technology/technology.css";
import "../theader.css";
const Beahead = () => {
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
          <Typography>Beach</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Beach
      </Typography>
      <div className="Catabutton">
        <Link to="/pagoda">
          <button className="tec">Pagoda</button>
        </Link>
        <Link to="/beach">
          <button className="tec btnactive">Beach</button>
        </Link>
        <Link to="/waterfall">
          <button className="tec">Waterfall</button>
        </Link>
        <Link to="/mountains">
          <button className="tec">Mountains</button>
        </Link>
       
      </div>
   
    </section>
  );
};

export default Beahead;
