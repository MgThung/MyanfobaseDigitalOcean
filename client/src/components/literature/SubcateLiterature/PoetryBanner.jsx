import React from "react";
import "../../subcategory/subcategy.css";

export default function PoetryBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/literature/poetry1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">poetry</button>
          <h4>
            sadaik long review:12
            <br /> Poems by Aung Cheimt
          </h4>
          <p className="leftparaText"></p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/literature/poetry2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">poetry</button>
          <h4>
            ကြာဆစ်ကြိုး <br />
            မင်းသု၀ဏ်
          </h4>
          <p className="rightparaText"></p>
        </article>
      </div>
    </section>
  );
}
