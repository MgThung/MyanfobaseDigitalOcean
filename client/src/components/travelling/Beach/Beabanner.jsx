import React from "react";
import "../../subcategory/subcategy.css";


const Beabanner = () => {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/travel/beach/beach1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Travel</button>
            <h4>Chaung Thar Beach</h4>
            <p className="leftparaText">
              Chaungtha (Burmese: ချောင်းသာ) is a town and beach resort located
              in Ayeyarwady Region, Myanmar. Chaungtha Beach, as it is more
              commonly known, is about 5 hours' drive away from Yangon, and is a
              popular resort with Yangonites from October to April.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/travel/beach/beach2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Myeik island</button>
            <h4>How to Mark yourself 'Safe' on Socials Media</h4>
            <p className="rightparaText">
              Myeik (also known as Mergui Archipelago) is a group of islands
              located in the Southern region of Myanmar on the Andaman Sea.It
              comprises more than 800 pristine islands. These untouched islands
              are renowned for their pristine white-sand beaches and diverse
              marine life.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Beabanner;
