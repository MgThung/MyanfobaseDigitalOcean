import React from "react";
import "../../entermentbanner.css";
// import "./entermentbanner.css";
import { Grid } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";


// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Musicbanner() {
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
    // <section>
    //   <div className="mainetn">
    //     <div className="firstetn">
    //       <div className="hansoetn">
    //         <img src="./images/entertainment/music/music1.jpg" alt="" />
    //       </div>

    //       <div className="hansoetn_P">
    //         <p className="paragraph">
    //           Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
    //           poster for ‘Why Her’ The SBS drama is set to premiere soon!
    //         </p>
    //       </div>
    //     </div>

    //     <div className="secetn">
    //       <div className="moneyheist">
    //         <img src="./images/entertainment/music/music2.avif" alt="" />
    //       </div>
    //       <div className="moneyheist_P">
    //         <p>
    //           Seo Hyun Jin, Hwang In Yeop & more star in an intriguing <br />{" "}
    //           group poster for ‘Why Her’ The SBS drama is set
    //           <br /> to premiere soon!
    //         </p>
    //       </div>
    //     </div>

    //     <div className="thirdetn">
    //       <div className="jurassic">
    //         <img
    //           src="./images/entertainment/music/music4.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div className="jurassic_P">
    //         <p>
    //           Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
    //           poster for ‘Why Her’ The SBS drama is set to premiere soon!
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
              <img src="./images/entertainment/music/music1.jpg" alt="" />
            </div>

            <div className="hansoetn_P">
              <span className="movieName">It's time to go</span>
              <br></br>

              <span className="castName">Artist: Taylor Swift</span>
              <br></br>
              <span className="ratingenterBanner">Album: evermore</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img src="./images/entertainment/music/music34.jpg" alt="" />
            </div>
            <div className="moneyheist_P">
              <span className="movieName">Dreamers</span>
              <br></br>

              <span className="castName">Artist: Jung Kook</span>
              <br></br>
              <span className="ratingenterBanner">
                Album: FIFA World Cup Qatar 2022 Official Soundtrack
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img src="./images/entertainment/music/music45.png" alt="" />
            </div>
            <div className="jurassic_P">
              <span className="movieName">Shut Down</span>
              <br></br>

              <span className="castName">Artist:Black PInk</span>
              <br></br>
              <span className="ratingenterBanner">
                Album: Born Pink
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}



