import React from "react";
import "../../../subcategory/subcategy.css";

export default function LuxuryBanner() {
  return (
    <section className="catebannerImg container">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="../images/lifestyle/luxry1.jpg" alt="" />
        </div>
        <article className="bannerPara">
          <button className="cateLifestyles">luxury</button>
          <h4>BAGAN LODGE</h4>
          <p className="leftparaText">
          Bagan Lodge feels like a home away from home in a mysterious land, a relaxing stop-off point on the discovery of a lifetime. Bagan is to Myanmar what Angkor is to Cambodia, an ancient city that will transport you back in time and wow you with its history.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="../images/lifestyle/luxry2.jpg" alt="" />
        </div>
        <article className="bannerPara">
          <button className="cateLifestyles">Lifestyle</button>
          <h4>Myanmar River Cruises</h4>
          <p className="rightparaText">
            Myanmar river cruise makes you fall in love with the fascinating landscape of Myanmar (Burma) at first sight! Unlike any place in the world, the laid-back pace of life in forgotten villages is the reason why you should take a voyage to discover it little by little.
          </p>
        </article>
      </div>
    </section>
  );
}
