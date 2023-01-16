import React from "react";
import "../../subcategory/subcategy.css";

export default function Culbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/history/culture/cul1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">history</button>
            <h4> The culture of Myanmar </h4>
            <p className="leftparaText">
              The culture of Myanmar can be both seen– thanks to the plethora of
              beautiful pagodas and stupas, spirits and Buddha images, woven
              designs and clothing, architecture, and gardens– as well as felt
              through every interaction with these friendly, kind, and dignified
              people.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/history/culture/cul2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">History</button>
            <h4>Homeland of the long neck tribe</h4>
            <p className="rightparaText">
              Long neck women are very famous all over the world for wearing
              many brass coils around their necks. But not many people know that
              Myanmar is homeland of this tribe.Long neck people are known as
              Kayan, one of a number of sub-groups of Myanmar’s Red Karen people
              (Karenni).
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
