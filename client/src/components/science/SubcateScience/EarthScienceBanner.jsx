import React from "react";
import "../../subcategory/subcategy.css";

export default function EarthScienceBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/science/earthscience1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">earth-science</button>
          <h4>What is Earth Science</h4>
          <p className="leftparaText">
            Earth science or geoscience includes all fields of natural science
            related to the planet Earth. This is a branch of science dealing
            with the physical, chemical, and biological complex constitutions
            and synergistic linkages of Earth's four spheres, namely biosphere,
            hydrosphere, atmosphere, and geosphere.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/science/earthscience2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">earth-science</button>
          <h4>New Report Analyzes Myanmar Geology</h4>
          <p className="rightparaText">
            Getech recently released an in-depth report aimed at providing
            insight into the geology of Myanmar and the surrounding regions.
            Exploration teams who have access to this report are expected to
            benefit from understanding the tectonic and geological evolution of
            Myanmar and the constraints ...
          </p>
        </article>
      </div>
    </section>
  );
}
