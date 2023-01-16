import React from "react";
import "../../subcategory/subcategy.css"

export default function Relibanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/history/religious/relig2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">Religion</button>
            <h4>Religion in Myanmar</h4>
            <p className="leftparaText">
              Religion in Myanmar · Buddhism (90.1%) · Christianity (6.2%) ·
              Islam (2.4%) · Hinduism (0.5%) · Tribal religions (0.2%) · Other
              (0.3%) · No religion (0.1%).Myanmar (Burma) is a Buddhist majority
              country with a significant minority population residing in the
              country.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/history/religious/relig1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">Religion</button>
            <h4>How many monks are in Myanmar?</h4>
            <p className="rightparaText">
              Image result for burma buddhist monks There are about half a
              million monks and 75,000 nuns in Myanmar (or Burma, as some still
              call it), so as you travel around you are guaranteed to see
              Buddhist monks and nuns going about their day.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
