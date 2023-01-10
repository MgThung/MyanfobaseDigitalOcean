import React from "react";
import "./sponserContent.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function SponserContent() {
  return (
    <div className="sponsered">
      <h3>Sponsered Content</h3>
      <span className="Lifeline1"></span>

      <div className="sponsered-1">
        <div className="beauty-photo">
          <img src="images/homeimgs/adver2.jpg" alt="" />
        </div>
        <div className="sponserAll">
          <p>Cosmetic Pics That Prove Jennifer is a Timeless Beauty</p>
          <div className="sponserBy">
            <CampaignIcon id="icon3" />{" "}
            <span className="sponserText">Sponsered by</span>
            <span className="sponserBefore">Before</span>
          </div>
        </div>
      </div>

      <div className="sponsered-2">
        <div className="phone-photo">
          <img src="images/homeimgs/ph2.jpg" alt="" />
        </div>
        <div className="sponserAll">
          <p>Cosmetic Pics That Prove Jennifer is a Timeless Beauty</p>
          <div className="sponserBy">
            <CampaignIcon id="icon3" />{" "}
            <span className="sponserText">Sponsered by</span>
            <span className="sponserBefore">Before</span>
          </div>
        </div>
      </div>

      <div className="sponsered-3">
        <div className="foodies-photo">
          <img src="images/homeimgs/bestcoverage.jpg" alt="" />
        </div>
        <div className="sponserAll">
          <p>Cosmetic Pics That Prove Jennifer is a Timeless Beauty</p>
          <div className="sponserBy">
            <CampaignIcon id="icon3" />
            <span className="sponserText">Sponsered by</span>
            <span className="sponserBefore">Before</span>
          </div>
        </div>
      </div>
    </div>
  );
}
