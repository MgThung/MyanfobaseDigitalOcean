import React from "react";
import "../../subcategory/subcategy.css"

export default function ElectronicBanner() {
  return (
    <>
      <section className="container catebannerImg">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/technology/electronic/1mobiles.jpg" />
          </div>
          <article className="bannerPara">
            <button className="cateTechnology">Electronic</button>
            <h4>
              In 2022, (96.1%) consumers own a mobile phone.
            </h4>
            <p className="leftparaText">
              Of the different types of mobile phones, smartphones are the most
              popular. They’re owned by 95.8% of global consumers. In
              comparison, just 7.7% of consumers own feature phones.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/technology/electronic/laptops.jpg" />
          </div>
          <article className="bannerPara">
            <button className="cateTechnology">Electronic</button>
            <h4>The second useful electronic device is Laptop!</h4>
            <p className="rightparaText">
              Next on the list of the most popular electronics worldwide are
              laptops and desktop computers. Together, they’re owned by 59% of
              global consumers.In other words, many more consumers own
              smartphones than laptops or desktops.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
