import React from "react";

export default function SmartphoneBanner() {
  return (
    <>
      <section className="container catebannerImg">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/technology/smartphone/smartphone1.jpeg" />
          </div>
          <article className="bannerPara">
            <button className="cateTechnology">Smart-Phone</button>
            <h4>How to Mark yourself 'Safe' on Socials Media</h4>
            <p className="leftparaText">
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/technology/smartphone/smartphone3.jpg" />
          </div>
          <article className="bannerPara">
            <button className="cateTechnology">Smart-Phone</button>
            <h4> The iPhone 15 models will release in September 2023.</h4>
            <p className="rightparaText">
              The iPhone 15 will see the price, LeaksApplePro says an increase of
              $100 to $200 could happen for the iPhone 15 Ultra, which could
              place that model's range between $1,199 and $1,299.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
