import React from "react";
import "../../subcategory/subcategy.css";

export default function RomanceBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/literature/romance1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">romance</button>
          <h4>Amay Hne Kyun Taw (Mother and I)</h4>
          <p className="leftparaText">
            The Myanmar-language book, which has since been made into a
            feature-film titled Htarwara Amay – up for a local Academy award, is
            a collection of autobiographical short-stories exploring the loving
            relationship Dr Khin Maung Win and his six siblings had with their
            mother and contains snapshots of life growing-up in middle-Myanmar
            during the 1950s.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/literature/romance2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">romance</button>
          <h4>ရက်စက်ပါပေ့ကွယ် (ဦးနု)</h4>
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
