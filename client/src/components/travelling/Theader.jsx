import React from "react";
import "./theader.css";
import "../technology/technology.css";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Theader = () => {
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
            <Typography>Travel</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Tralvel
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
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Traveling is important in life because it will open you up to a new
          way of living and being. You will experience new connections with
          people and places and immerse in different cultures, which can help
          widen your perspective. So much learning and personal growth can come
          from traveling
        </Typography>
      </section>
    </>
  );
};

export default Theader;
