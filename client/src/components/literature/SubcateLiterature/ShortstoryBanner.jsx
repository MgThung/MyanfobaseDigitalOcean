import React from "react";
import "../../subcategory/subcategy.css";

export default function ShortstoryBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/literature/short1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">Short-Story</button>
          <h4>Sadaik Short Reviews: Burmese Family</h4>
          <p className="leftparaText">
            Mi Mi Khaing’s memoir still stands as a classic of Burmese
            non-fiction, though it’s been 70 years since its initial
            publication. A multi-generational memoir, it follows the life of the
            author’s elite non-typical family …
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/literature/shortstory/shortstorybanner1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">literature</button>
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
