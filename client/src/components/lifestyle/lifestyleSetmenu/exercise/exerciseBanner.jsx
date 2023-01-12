import React from "react";
import "../../../subcategory/subcategy.css";

export default function ExerciseBanner() {
  return (
    <section className="catebannerImg container">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="../images/lifestyle/exercise1.jpg" alt="" />
        </div>
        <article className="bannerPara">
          <button className="cateLifestyles">exercise</button>
          <h4>
            Chinlon – Myanmar Traditional Sport: A Combination Of Sports And
            Dance
          </h4>
          <p className="leftparaText">
            Chinlon, or cane ball, is a traditional sport of beautiful Myanmar
            that has been co-existed with the locals since the time immemorial.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="../images/lifestyle/exercise2.jpg" alt="" />
        </div>
        <article className="bannerPara">
          <button className="cateLifestyles">exercise</button>
          <h4>Playing Gym</h4>
          <p className="rightparaText">
            Growing interest in health and fitness, especially among the young,
            is supporting a rise in venues for playing futsal and pumping iron,
            but entrepreneurs say profits are slim.
          </p>
        </article>
      </div>
    </section>
  );
}
