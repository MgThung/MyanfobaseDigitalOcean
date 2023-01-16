import React from "react";
import "../../subcategory/subcategy.css";

const Dressbanner = () => {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/history/dress/dress.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">history</button>
            <h4>Traditional Dress of Myanmar </h4>
            <p className="leftparaText">
              The traditional dress of Burmese people is said to be date back to
              the 1750s where it was first designed with stunning jewelry by
              those who held positions of power. worn in the Konbaung court.
              Women wore floral head ornaments, uniquely decorated blouses, felt
              footwear, and a htamein, which you can see many women wearing
              today.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/history/dress/dress2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">History</button>
            <h4>The Famous designer in Myanmar (Min Thet San)</h4>
            <p className="rightparaText">
              You can contact me anytime, No: 256 ,12 Road , 3 Quarter , On
              Waizayander Main Road , South Okalar<br></br>Designer -Minn Thet
              Saen Planning-Aye Thar (Signature) Jewellery- Great Diamond (Gems
              & Jewellery) Photo -Lijohn Make Up -Jessica Han Hair-May Lin
              Floral & Decor- Signature wedding planning Stylish - J Fish
              ပိုးထည် -သိန်းညို ပိုးထည်
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Dressbanner;
