import React from 'react'
import { Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export default function Abouthead() {
  return (
    <>
      <section className="container travel">
        <Box className="top" sx={{ marginButtom: "60px" }}>
          <Breadcrumbs
            color={"#747474"}
            aria-aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" className="link1" fontSize="25px">
              <Typography color={"#747474"}>Home</Typography>
            </Link>
            <Typography color={"#747474"}>About us</Typography>
          </Breadcrumbs>
        </Box>
        {/* <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="link1">
                  <h4>Home</h4>
                </Link>
              </li>
            </ul>
          </div>

          <div className="icon">
            <i className="uil uil-angle-right-b"></i>
          </div>

          <h4>About us</h4>
        </div> */}
      </section>
    </>
  );
}
