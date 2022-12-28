import React from "react";
import "./advtecbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function StaySocial() {
  return (
    <div>
      <div className="Stayconnect-title">
        <h2>Stay Connected</h2>
        <span className="stayunderline"></span>
      </div>

      <div className="connect-socials">
        <div className="first-line-socials">
          <div className="connect-social">
            <FacebookIcon className="connect-logo" />
            <div className="followers">
              <p className="follower">235.9k Followers</p>
              <p>Like</p>
            </div>
          </div>
          <div className="connect-social2">
            <YouTubeIcon className="connect-logo2" />
            <div className="followers">
              <p className="follower">213.7k Followers</p>
              <p>Subscribe</p>
            </div>
          </div>
        </div>
        <div className="sec-line-socials">
          <div className="connect-social3">
            <TwitterIcon className="connect-logo3" />

            <div className="followers">
              <p className="follower">213.6k Followers</p>
              <p>Follow</p>
            </div>
          </div>
          <div className="connect-social4">
            <InstagramIcon className="connect-logo4" />
           
            <div className="followers">
              <p className="follower">214.4k Followers</p>
              <p>Pin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
