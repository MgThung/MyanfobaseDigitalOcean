import React from "react";
import "./about.css";
import { Grid, Box } from "@mui/material";
import Facebookicon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Aboutbody() {
  return (
    <div className="mainabout_body">
      <h3 className="about_heading">We're more than a digital angency.</h3>
      <div className="about_body">
        <div>
          <img
            className="about_body_firstphoto"
            src="./images/aboutus/grouppc.avif"
            alt=""
          />
        </div>
        <div className="about_body_secpartphoto">
          <img
            className="secpart_Fphoto"
            src="./images/aboutus/pc4.avif"
            alt=""
          />
          <img
            className="secpart_Sphoto"
            src="./images/aboutus/Ai.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="about_body_para">
        <div className="about_body_firstpara">
          <h3>Who we are</h3>
          <p>
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward will have multiple
            touchpoints for offshoring.
          </p>
        </div>
        <div className="about_body_secpara">
          <h3>Our philosophy</h3>
          <p>
            A new normal that has evolved from generation X is on the runway
            heading towards a streamlined cloud solution. User generated content
            in real-time.
          </p>
        </div>
        <div className="about_body_thirdpara">
          <h3>Our philosophy</h3>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps.
          </p>
        </div>
      </div>

      <div className="team_member">
        <p className="developer">Expart Developer</p>
        <div className="header_leader">
          <h3 className="first_letter">Our</h3>
          <h3 className="sec_letter">team member</h3>
        </div>
        {/* <div className="ourmember"> */}
        <Grid className="ourmember" container my={8}>
          {/* <div className="kzh"> */}
          <Grid className="kzh" item md>
            <div>
              <img
                className="secpart_Firphoto"
                src="./images/aboutus/kyaw.jpg"
                alt=""
              />
            </div>
            <div className="ourmember_overlay">
              <div className="ourmember_text">
                <h3>Kyaw Swar htet</h3>
                <a className="fbicon">
                  <Facebookicon
                    // sx={{
                    //   paddingTop: "13",
                    //   marginLeft: "70",
                    //   fontSize: "20",
                    //   color: "white",
                    //   marginTop: "20",
                    // }}
                  />
                </a>
                <a className="googleicon">
                  <GoogleIcon />
                </a>
                <a className="instaicon">
                  <InstagramIcon />
                </a>
                <a className="githiub">
                  <GitHubIcon />
                </a>

                <div className="fullstack">full-stuck developer</div>
              </div>
            </div>
          </Grid>
          {/* </div> */}
          {/* <div className="cwtk"> */}
          <Grid className="cwtk" item md>
            <div>
              <img
                className="secpart_Secphoto"
                src="./images/aboutus/chue.jpg"
                alt=""
              />
            </div>
            <div className="ourmember_overlay1">
              <div className="ourmember_text1">
                <h3>Chue Wathan Kyaw</h3>
                <a className="fbicon">
                  <Facebookicon />
                </a>
                <a className="googleicon">
                  <GoogleIcon />
                </a>
                <a className="instaicon">
                  <InstagramIcon />
                </a>
                <a className="githiub">
                  <GitHubIcon />
                </a>

                <div className="fullstack">full-stuck developer</div>
              </div>
            </div>
          </Grid>
          {/* </div> */}
          {/* <div className="thh"> */}
          <Grid className="thh" item>
            <img
              className="secpart_Tphoto"
              src="./images/aboutus/code.jpg"
              alt=""
            />
            <div className="ourmember_overlay2">
              <div className="ourmember_text2">
                <h3>Thaung Thike Htoo</h3>
                <a className="fbicon">
                  <Facebookicon />
                </a>
                <a className="googleicon">
                  <GoogleIcon />
                </a>
                <a className="instaicon">
                  <InstagramIcon />
                </a>
                <a className="githiub">
                  <GitHubIcon />
                </a>

                <div className="fullstack">full-stuck developer</div>
              </div>
            </div>
          </Grid>
          {/* </div> */}
          {/* <div className="thawthaw"> */}
          <Grid className="thawthaw" item>
            <img
              className="secpart_Fouthphoto"
              src="./images/aboutus/thaw.jpg"
              alt=""
            />
            <div className="ourmember_overlay3">
              <div className="ourmember_text3">
                <h3>Thaw Zin Hlaine</h3>
                <a className="fbicon">
                  <Facebookicon />
                </a>
                <a className="googleicon">
                  <GoogleIcon />
                </a>
                <a className="instaicon">
                  <InstagramIcon />
                </a>
                <a className="githiub">
                  <GitHubIcon />
                </a>

                <div className="fullstack">full-stuck developer</div>
              </div>
            </div>
            {/* </div> */}
          </Grid>
        </Grid>
        {/* </div> */}
      </div>
    </div>
  );
}
