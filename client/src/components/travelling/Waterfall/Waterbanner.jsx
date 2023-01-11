import React from "react";
import "../../subcategory/subcategy.css";


export default function Waterbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/travel/waterfall/anisakan.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Travel</button>
            <h4>Dee Dote Falls</h4>
            <p className="leftparaText">
              Famed for having mineral-rich, bright blue waters, Dee Dote (Dee
              Doke) Falls are a relatively new spot to waterfall hop. Situated
              about an hour’s drive from Mandalay and a two-hour motorbike ride
              from Pyin Oo Lwin in the Shan Highlands,
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/travel/waterfall/dattawgyaint.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Travel</button>
            <h4>Kyaiktiyo Falls</h4>
            <p className="rightparaText">
              There’s more to Kyaiktiyo than a golden rock. Step away from the
              mountaintop bustle and head down to Kyaiktiyo (Kyaik Htee Yoe)
              Falls. It’s a good three to four-hour hike there and back. Expect
              to pass by many stands selling anything from drinks to orchids
              while trekking.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
