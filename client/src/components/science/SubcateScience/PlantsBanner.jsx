import React from "react";
import "../../subcategory/subcategy.css";

export default function PlantsBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/science/plants1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">Plants</button>
          <h4>Frangipani or Plumeria</h4>
          <p className="leftparaText">
            Frangipani is a genus of flowering plants in the dogbane family. It
            contains primarily deciduous shrubs and small trees. They are native
            to Central America, Mexico, the Caribbean, Brazil and South America,
            and grown right here in Myanmar!
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/science/plants2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateScience">Plants</button>
          <h4> Aeschynanthus</h4>
          <p className="rightparaText">
            Aeschynanthus is a genus of about 150 species of evergreen
            subtropical plants in the family Gesneriaceae. They are usually
            trailing epiphytes with brightly coloured flowers that are
            pollinated by sunbirds. The genus name comes from a contraction of
            aischuno (to be ashamed) and anthos (flower).
          </p>
        </article>
      </div>
    </section>
  );
}
