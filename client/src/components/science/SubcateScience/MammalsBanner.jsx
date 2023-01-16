import React from "react";
import "../../subcategory/subcategy.css";

export default function MammalsBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/science/mammals1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">mammals</button>
          <h4>Mammals of Myanmar</h4>
          <p className="leftparaText">
            We found 304 species meeting the request Mammals of Myanmar. Learn
            more about their habitat, lifestyle, diet, mating behavior, and
            more. We found 304 species meeting the request Mammals of Myanmar.
            Learn more about their habitat, lifestyle, diet, mating behavior,
            and more.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/science/mammals2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">Science</button>
          <h4>
            Myanmar’s snowcapped north is a haven for large mammals, new study
            finds
          </h4>
          <p className="rightparaText">
            A camera-trapping study has confirmed that the snowcapped
            Hkakaborazi landscape in northern Myanmar is a crucial haven for
            large mammals. The research team deployed 174 cameras in the forests
            and mountain slopes and interviewed local villagers, detecting 40
            large mammal species overall.
          </p>
        </article>
      </div>
    </section>
  );
}
