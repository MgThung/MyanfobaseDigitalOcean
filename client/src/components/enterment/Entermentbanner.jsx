import React from "react";
import "./entermentbanner.css";
import { Grid } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Entermentbanner() {
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
              <img src="./images/homeimgs/kdrama1.jpeg" alt="" />
            </div>

            <div className="hansoetn_P">
              <span className="movieName">Shooting Star</span>
              <br></br>
              <p className="paragraph">
                The romantic love story of top star Gong Tae-sung sharing a
                love-hate relationship with Oh Han-byul, the PR team leader of
                his management agency `Starforce Entertainment'.
              </p>
              <br></br>
              <span className="castName">
                Cast by Kim Young-dae, Lee Sung-kyung
              </span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 8.4
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img src="./images/entertainment/moneyheist.jpg" alt="" />
            </div>
            <div className="moneyheist_P">
              <span className="movieName">Money Heist</span>
              <br></br>
              <p className="paragraph">
                Thieves overtake the mint of a unified Korea, trapping hostages
                inside; the police must stop the thieves as well as the shadowy
                mastermind behind the heist.
              </p>
              <br></br>
              <span className="castName">
                Cast by Jeon Jong-seo, Ji hoon Kim
              </span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 5.5
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img src="./images/entertainment/jurassic.jpg" alt="" />
            </div>
            <div className="jurassic_P">
              <span className="movieName">Jurassic World</span>
              <br></br>
              <p className="paragraph">
                A theme park showcasing genetically-engineered dinosaurs turns
                into a nightmare for its tourists when one of the dinosaurs
                escapes its enclosure. An ex-military animal expert steps up to
                save the day.
              </p>
              <br></br>
              <span className="castName">
                Cast by Chris Pratt, Bryce Dallas Howard
              </span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 8.4
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
