import React from "react";
import "../../../enterment/entermentbanner.css"
import Footer from "../../../footer/Footer";

// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Boxingbanner() {
 
  return (
    <section>
      <div className="mainetn">
        <div className="firstetn">
          <div className="hansoetn">
            <img src="./images/sport/boxing/boxing2.jpg" alt="" />
          </div>

          <div className="hansoetn_P">
            <p className="paragraph">
              Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
              poster for ‘Why Her’ The SBS drama is set to premiere soon!
            </p>
          </div>
        </div>

        <div className="secetn">
          <div className="moneyheist">
            <img src="./images/sport/boxing/boxing3.jpg" alt="" />
          </div>
          <div className="moneyheist_P">
            <p>
              Seo Hyun Jin, Hwang In Yeop & more star in an intriguing <br />{" "}
              group poster for ‘Why Her’ The SBS drama is set
              <br /> to premiere soon!
            </p>
          </div>
        </div>

        <div className="thirdetn">
          <div className="jurassic">
            <img src="./images/sport/boxing/boxing4.jpg" alt="" />
          </div>
          <div className="jurassic_P">
            <p>
              Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
              poster for ‘Why Her’ The SBS drama is set to premiere soon!
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
}

