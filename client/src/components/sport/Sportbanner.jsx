import React from "react";
import "./sportbanner.css";
import "../enterment/entermentbanner.css";
import { Grid } from "@mui/material";
// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Sportbanner() {
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
    <>
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
                <img src="./images/sport/sport5.avif" alt="" />
              </div>

              <div className="hansoetn_P">
                <p className="paragraph">How to get more kick power!</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={5.5} sm={3.7}>
            <div className="secetn">
              <div className="moneyheist">
                <img src="./images/sport/sport6.avif" alt="" />
              </div>
              <div className="moneyheist_P">
                <p>The ways how to play football better!</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={3.7}>
            <div className="thirdetn">
              <div className="jurassic">
                <img src="./images/sport/sport1.jpg" alt="" />
              </div>
              <div className="jurassic_P">
                <p>Let's protect ourself</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
