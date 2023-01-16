import React from "react";
import "../../subcategory/subcategy.css";

export default function NovelBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/literature/novel1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">Novel</button>
          <h4>The best books on Burma: start your reading here</h4>
          <p className="leftparaText">
            Our literary tour of Burma takes in British colonialism, political
            imprisonment and the struggle for independence
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/literature/novel2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">Novel</button>
          <h4>Book Review: Orwell in Burma</h4>
          <p className="rightparaText">
            With the world seemingly headed towards an Orwellian Big Brother
            type era with all the new technology that can be used to spy on
            people , and news stories often alluding to 1984, the last author I
            thought I would be reading this year was George Orwell.
          </p>
        </article>
      </div>
    </section>
  );
}
