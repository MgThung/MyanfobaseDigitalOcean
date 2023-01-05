import React from "react";
import "./footer.css";
import { Grid, Box, Container, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="footerdiv">
      
        <footer className="FooterColor">
          {/* <div className="FooterDiv"> */}
          <Box>
            <Container maxWidth="xl">
              <Grid container spacing={5} paddingLeft={8}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box>
                    <div className="footertitle">
                      <div className="spiderImg">
                        <img src="./images/homeimgs/logo2.png" alt="" />
                      </div>
                    </div>
                  </Box>
                  <Box p={1}>
                    <h4>Address and Contact</h4>
                  </Box>
                  <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <HomeIcon />
                      </Grid>
                      <Grid item>No(10). Maharbowga street Yangon</Grid>
                    </Grid>
                  </Box>
                  <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <ForwardToInboxIcon />
                      </Grid>
                      <Grid item>
                        <a
                          className="footercolor"
                          href="mailto:myanfobase@gmail.com"
                        >
                          myanfobase@gmail.com
                        </a>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <PhoneForwardedIcon />
                      </Grid>
                      <Grid item>
                        <a className="footercolor" href="tele:0925252525">
                          0933434334
                        </a>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <MailIcon />
                      </Grid>
                      <Grid item>
                        <input
                          className="inputfooter"
                          type="text"
                          placeholder="Enter your email"
                        />
                      </Grid>
                    </Grid>
                  </Box> */}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box p={0.5}>
                    <h4>Category</h4>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      color="white"
                      href="/entertainment"
                      underline="none"
                    >
                      entertainment
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/business"
                      color="white"
                      underline="none"
                    >
                      business
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/government"
                      color="white"
                      underline="none"
                    >
                      government
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/sports"
                      color="white"
                      underline="none"
                    >
                      sport
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/health"
                      color="white"
                      underline="none"
                    >
                      health
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/lifestyle"
                      color="white"
                      underline="none"
                    >
                      lifestyle
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box p={0.5}>
                    <h4>About</h4>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/aboutus"
                      color="white"
                      underline="none"
                    >
                      About Us
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/Science"
                      color="white"
                      underline="none"
                    >
                      Science
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/Software"
                      color="white"
                      underline="none"
                    >
                      Software
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/Computer"
                      color="white"
                      underline="none"
                    >
                      Computer
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link
                      className="footerhover"
                      href="/Gamming"
                      color="white"
                      underline="none"
                    >
                      Gamming
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box p={0.5}>
                    <h4>Social & Payment</h4>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item className="fbfooterhv">
                        <FacebookIcon />
                      </Grid>
                      <Grid item>
                        <span className="footerhover">Facebook</span>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item className="instafooterhv">
                        <InstagramIcon />
                      </Grid>
                      <Grid item>
                        <span className="footerhover">Instagram</span>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item className="twitterfooterhv">
                        <TwitterIcon />
                      </Grid>
                      <Grid item>
                        <span className="footerhover">Twitter</span>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item className="youtubefooterhv">
                        <YouTubeIcon />
                      </Grid>
                      <Grid item>
                        <span className="footerhover">Youtube</span>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* <Box p={0.5}>Student Discount</Box> */}
                  <div>
                    <ul className="fotpayment">
                      <li>
                        <img src="./images/homeimgs/kpay.png" alt="" />
                      </li>
                      <li>
                        <img src="./images/homeimgs/wavemoney.jpg" alt="" />
                      </li>
                      <li>
                        <img src="./images/homeimgs/CBPay.png" alt="" />
                      </li>
                      <li>
                        <img src="./images/homeimgs/ayapay.jpg" alt="" />
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <span className="footerunderline"></span>
          <p className="copyright">
            &copy; Copyright 2022. <span> Webdevelopment Team</span>
          </p>
          {/* </div> */}
        </footer>
      
    </div>
  );
}
