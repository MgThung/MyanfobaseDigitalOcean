import React from "react";
import "../../../enterment/entermentbanner.css";
import "../../sportbanner.css";
import { Grid } from "@mui/material";
import Footer from "../../../footer/Footer";

// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Boxingbanner() {
  return (
    <section className="mainetn1">
      <Grid
        my={3}
        container
        sx={{ margin: "auto", width: "100%", gap: "3rem" }}
        rowSpacing={3}
      >
        <Grid item xs={5.5} sm={3.7}>
          <div className="firstetn">
            <div className="hansoetn">
              <img src="./images/sport/boxing1.jpg" alt="" />
            </div>

            <div className="hansoetn_P">
              <p className="paragraph">
                Tun Tun Min <br />
                Tranditional Lethwei Fighter
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img src="./images/sport/boxing2.jpg" alt="" />
            </div>
            <div className="moneyheist_P">
              <p>
                Aung La N Sang <br />
                OneChampionship Fighter
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img src="./images/sport/boxing3.jpg" alt="" />
            </div>
            <div className="jurassic_P">
              <p>Myanmar's Bozhena Antoniyar earns 3rd ONE Championship win</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
