import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "../travelling/theader.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Artssheader() {
  return (
    <>
      <section className="container technology">
        <Box sx={{ marginButtom: "10px" }}>
          <Breadcrumbs
            color={"#747474"}
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography>Home</Typography>
            </Link>
            <Typography>Arts</Typography>
          </Breadcrumbs>
        </Box>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          textTransform="uppercase"
          sx={{ marginTop: "10px" }}
        >
          Arts
        </Typography>

        <div className="Catabutton">
          <Link to="/anime">
            <button className="tec">anime art</button>
          </Link>
          <Link to="/sketches">
            <button className="tec">sketches art</button>
          </Link>
          <Link to="/doodle">
            <button className="tec">doodle art</button>
          </Link>
          <Link to="/painting">
            <button className="tec">painting</button>
          </Link>
        </div>
        <Typography
          variant="body1"
          fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
          fontStyle={"italic"}
          align={"justify"}
          sx={{ marginTop: "18px", color: "#777" }}
        >
          The purpose of art is to produce thinking. The secret is not the
          mechanics or technical skill that create art – but the process of
          introspection and different levels of contemplation that generate it.
          Once you learn to embrace this process, your creative potential is
          limitless.
        </Typography>
      </section>
    </>
  );
}
