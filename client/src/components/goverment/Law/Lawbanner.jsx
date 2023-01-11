import React from "react";
import "../../subcategory/subcategy.css"

export default function Lawbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/government/law/law1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4>Sorry Our Country(Myanmar) haven't any law yet!!!!</h4>
            <p className="leftparaText">
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/government/law/law2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4>The 48 Laws of Power - National Library Board Singapore</h4>
            <p className="rightparaText">
           The 48 Laws of Power is a
              non-fiction book by American author Robert Greene. The book is a
              New York Times bestseller, selling over 1.2 million copies in the
              United States.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
