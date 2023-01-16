import React from "react";
import "../../subcategory/subcategy.css";

export default function Minbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/government/ministry/nug.png" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4>
              National Unity Government of the Republic of the Union of Myanmar
            </h4>
            <p className="leftparaText">
              The National Unity Government of the Republic of the Union of
              Myanmar is a Myanmar government in exile formed by the Committee
              Representing Pyidaungsu Hluttaw, a group of elected  in the 2021 Myanmar coup
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/government/ministry/ei.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4>
              Ei Thinzar Maung(Diploma of Foreign Language at Mandalay
              University.
              )</h4>
            <p className="rightparaText">
              Ei Thinzar Maung (Burmese: အိသဉ္ဇာမောင်, born 11 September 1994)
              is a Burmese activist and politician. She is the incumbent Deputy
              Minister of Women, Youths and Children Affairs of the National
              Unity Government.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
