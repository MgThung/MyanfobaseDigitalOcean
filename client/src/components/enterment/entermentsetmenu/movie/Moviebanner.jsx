import React from "react";
import "../../entermentbanner.css";
import { Grid } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Moviebanner() {
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
              <img src="./images/entertainment/jurassic.jpg" alt="" />
            </div>

            <div className="hansoetn_P">
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
        <Grid item xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img src="./images/entertainment/movie/endgame.jpg" alt="" />
            </div>
            <div className="moneyheist_P">
              <span className="movieName">End Game(2019)</span>
              <br></br>
              <p className="paragraph">
                After Thanos, an intergalactic warlord, disintegrates half of
                the universe, the Avengers must reunite and assemble again to
                reinvigorate their trounced allies and restore balance.
              </p>
              <br></br>
              <span className="castName">
                Cast by Robert Downey, Chris Evans,Scarlett,Chris, Mark Ruffalo,
                Jeremy Renner
              </span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 8.4
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img src="./images/entertainment/movie/movie22.jpg" alt="" />
            </div>
            <div className="jurassic_P">
              <span className="movieName">Ouija</span>
              <br></br>
              <p className="paragraph">
                When Debbie is found dead after playing with an Ouija board, her
                best friend, Laine, decides to communicate with her using the
                board. Things go awry when she contacts an evil spirit instead.
              </p>
              <br></br>
              <span className="castName">
                Cast by Daren Kagasoff, Olivia Cooke
              </span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 6
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}



