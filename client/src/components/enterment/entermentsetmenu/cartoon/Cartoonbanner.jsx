import React from "react";
import "../../entermentbanner.css";
// import "./entermentbanner.css";
import { Grid } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Cartoonbanner() {
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
              <img
                src="./images/entertainment/cartoon/activitysheets.jpg"
                alt=""
              />
            </div>

            <div className="hansoetn_P">
              <span className="movieName">LUCA</span>
              <br></br>
              <p className="paragraph">
                Luca, a sea monster, befriends Alberto, another one of his kind
                who takes him on a land adventure. He experiences an exciting
                summer while keeping his parents in the dark.
              </p>
              <br></br>
              <span className="castName">Director by Enrico Casarosa</span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 7.4
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img
                src="./images/entertainment/cartoon/rise_of_guardians.jpg"
                alt=""
              />
            </div>
            <div className="moneyheist_P">
              <span className="movieName">Ferdinand</span>
              <br></br>
              <p className="paragraph">
                A soft-hearted bull, Ferdinand, escapes from Casa del Toro after
                his father does not return from the bullfight. However, due to a
                turn of events, he is taken back to the place he escaped from.
              </p>
              <br></br>
              <span className="castName">Director by Carlos Saldanha</span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 7.1
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img src="./images/entertainment/cartoon/barbie.jpg" alt="" />
            </div>
            <div className="jurassic_P">
              <span className="movieName">The Priness and the frog</span>
              <br></br>
              <p className="paragraph">
                A young waitress, Tiana, embarks on a hilarious adventure after
                her fateful kiss with a frog prince who cannot wait to be human
                again.
              </p>
              <br></br>
              <span className="castName">
                Director by John Musker, Ron Clements
              </span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 8.5
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
