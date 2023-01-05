import React from "react";
import { Link } from "react-router-dom";
import "../travelling/theader.css";
import "../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Sportheader() {
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
            <Typography>Sport</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Sport
        </Typography>
        <div className="Catabutton">
          <Link to="/football">
            <button className="tec">football</button>
          </Link>
          <Link to="/boxing">
            <button className="tec">boxing</button>
          </Link>
          <Link to="/chess">
            <button className="tec">chess</button>
          </Link>
          <Link to="/cane">
            <button className="tec">cane ball</button>
          </Link>
          <Link to="/gamming">
            <button className="tec">gamming</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          Sport is good for your physical and mental health. They also help
         
         
         
         
          develop leadership skills and equip them with the ability to set goals
          and build character. Participating in sports can lead to higher
          self-esteem and better social interaction. It also helps students have
          a positive outlook on life.
        </Typography>
      </section>
    </>
  );
}
