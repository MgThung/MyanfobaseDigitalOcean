import React from "react";
import "../../subcategory/subcategy.css";

export default function FictionBanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/literature/fiction1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">fitction</button>
          <h4>The River of Lost Footsteps:A Personal History of Burma</h4>
          <p className="leftparaText">
            Thant Myint-U is a name that does not need much introduction. The
            grandson of the former UN secretary general U Thant has authored
            five books and The River of Lost Footsteps is arguably the most
            famous.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/literature/fiction2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">fitction</button>
          <h4>From the Land of Green Ghosts: A Burmese Odyssey </h4>
          <p className="rightparaText">
            The author Pascal Khoo Thwe is a member of the Padaung tribe, a
            small ethnic group famous for neck rings. The book is about his
            journey from a native of a remote village in Shan State to a
            Cambridge alumnus.
          </p>
        </article>
      </div>
    </section>
  );
}
