import React from "react";
import "../../subcategory/subcategy.css";

export default function Polbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/government/police/pol1.png" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4> Sanchaung Police Station </h4>
            <p className="leftparaText">
              Police station R43Q+2M7, Myay Nee Kone ward, San Khyaung Tsp
              <br></br> Open 24 hours ·<br></br> +95 1 535 905
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/government/police/pol3.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4>The Head of Section of the Traffic Police</h4>
            <p className="rightparaText">
             Police station
R5F3+5G7, Kabar Aye Pagoda Rd<br></br>
              Open 24 hours <br></br> +95 9 540 9030
              </p>
          </article>
        </div>
      </section>
    </>
  );
}
