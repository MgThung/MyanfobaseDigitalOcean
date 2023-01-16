import React from "react";
import "../../subcategory/subcategy.css";

export default function BiologyBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/science/biology1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">biology</button>
          <h4>What is Biology</h4>
          <p className="leftparaText">
            Biology is the scientific study of life. It is a natural science
            with a broad scope but has several unifying themes that tie it
            together as a single, coherent field. For instance, all organisms
            are made up of cells that process hereditary information encoded in
            genes, which can be transmitted to future generations.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/science/biology2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">biology</button>
          <h4>Introduction to Biology</h4>
          <p className="rightparaText">
            Biology is the study of living organisms, including their chemical
            processes, physical structure, molecular interactions, physiological
            mechanisms, development, and evolution. It incorporates everything
            from studying the entire planet, or studying the microscopic
            structures such as bacteria.
          </p>
        </article>
      </div>
    </section>
  );
}
