import React from "react";
import "../../subcategory/subcategy.css";

export default function AstronomyBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/science/astonomy1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">astronomy</button>
          <h4>What is Astronomy</h4>
          <p className="leftparaText">
            Astronomy (from Ancient Greek ἀστρονομία (astronomía) 'science that
            studies the laws of the stars') is a natural science that studies
            celestial objects and phenomena. It uses mathematics, physics, and
            chemistry in order to explain their origin and evolution
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/science/astonomy2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">astronomy</button>
          <h4>How to Mark yourself 'Safe' on Socials Media</h4>
          <p className="rightparaText">
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </article>
      </div>
    </section>
  );
}
