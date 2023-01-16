import React from "react";
import "../../../enterment/entermentbanner.css";
import "../../sportbanner.css";
import { Grid } from "@mui/material";
// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Gammingbanner() {
  // let container = useRef(null);
  // let image = useRef(null);
  // let imageReveal = CSSRulePlugin.getRule(".hansoetn:after");

  // const tl = new TimelineLite();

  // useEffect(() => {
  //   tl.to(container, 1, { css: { visibility: "visible" } }).to(
  //     imageReveal,
  //     1.4,
  //     { width: "0%", ease: Power2.easeInOut }
  //   );
  // });

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
              <img src="./images/sport/gamming1.jpg" alt="" />
            </div>

            <div className="hansoetn_P">
              <p className="paragraph">
                Falcon <br />
                Myanmar Mobile Legends Team!
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img src="./images/sport/gamming3.jpg" alt="" />
            </div>
            <div className="moneyheist_P">
              <p>Playing E-Sport</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img src="./images/sport/gamming2.jpg" alt="" />
            </div>
            <div className="jurassic_P">
              <p>Myanmar PUBG Team</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
