// import React from "react";

// // import CSSRulePlugin from "gsap/CSSRulePlugin";
// // import { TimelineLite, Power2 } from "gsap";

// export default function Koreanbanner () {
 
//   return (
//     <section>
//       <div className="mainetn">
//         <div className="firstetn">
//           <div className="hansoetn">
//             <img src="./images/entertainment/korera/business.jpg" alt="" />
//           </div>

//           <div className="hansoetn_P">
//             <p className="paragraph">
//               Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
//               poster for ‘Why Her’ The SBS drama is set to premiere soon!
//             </p>
//           </div>
//         </div>

//         <div className="secetn">
//           <div className="moneyheist">
//             <img src="./images/entertainment/korera/start-up.jpg" alt="" />
//           </div>
//           <div className="moneyheist_P">
//             <p>
//               Seo Hyun Jin, Hwang In Yeop & more star in an intriguing <br />{" "}
//               group poster for ‘Why Her’ The SBS drama is set
//               <br /> to premiere soon!
//             </p>
//           </div>
//         </div>

//         <div className="thirdetn">
//           <div className="jurassic">
//             <img src="./images/entertainment/korera/hotel_del_luna.jpg" alt="" />
//           </div>
//           <div className="jurassic_P">
//             <p>
//               Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
//               poster for ‘Why Her’ The SBS drama is set to premiere soon!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import "../../entermentbanner.css";
import { Grid } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Koreanbanner() {
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
              <img src="./images/entertainment/korera/business.jpg" alt="" />
            </div>

            <div className="hansoetn_P">
              <span className="movieName">Shooting Star</span>
              <br></br>
              <p className="paragraph">
                In disguise as her friend, Ha-ri shows up on a blind date to
                scare away her friend's prospective suitor. However, plans go
                awry when he turns out to be Ha-ri's CEO and he makes a
                proposal.
              </p>
              <br></br>
              <span className="castName">
                Cast by Choi Byung-Chan, Kim Se-jeong
              </span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 8.7
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img src="./images/entertainment/korera/start-up.jpg" alt="" />
            </div>
            <div className="moneyheist_P">
              <span className="movieName">Start-Up</span>
              <br></br>
              <p className="paragraph">
                Seo Dal Mi has dreams of becoming Korea's own Steve Jobs, and
                with her genius first love, an investor, and a business insider
                by her side, her dream may be closer than she thinks.
              </p>
              <br></br>
              <span className="castName">Cast by Kim Seon-ho, Bae Suzy</span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 8.1
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img
                src="./images/entertainment/korera/hotel_del_luna.jpg"
                alt=""
              />
            </div>
            <div className="jurassic_P">
              <span className="movieName">Hotel Del Luna</span>
              <br></br>
              <p className="paragraph">
                Hotel del Luna is a 2019 South Korean television series,
                starring Lee Ji-eun and Yeo Jin-goo as the owner and manager,
                respectively, of the eponymous hotel that caters only to ghosts.
              </p>
              <br></br>
              <span className="castName">Cast by Yeo Jin-goo, IU</span>
              <br></br>
              <span className="ratingenterBanner">
                <GradeIcon className="iconstar" />
                Rating 8.7
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
