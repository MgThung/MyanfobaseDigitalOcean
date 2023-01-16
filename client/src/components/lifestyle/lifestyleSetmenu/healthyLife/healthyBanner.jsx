import React from "react";
import "../../../subcategory/subcategy.css";

export default function HealthyLifeBanner() {
  return (
    <section className="catebannerImg container">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="../images/lifestyle/healthylife1.jpg" alt="" />
        </div>
        <article className="bannerPara">
          <button className="cateLifestyles">healthy-life</button>
          <h4>What is a “healthy lifestyle”?</h4>
          <p className="leftparaText">
            Ask 50 people to define what a “healthy lifestyle” is, and you’ll
            likely get 50 different answers. That’s because there’s no one way
            to be healthy. A healthy lifestyle simply means doing things that
            make you happy and feel good.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="../images/lifestyle/healthylife2.jpg" alt="" />
        </div>
        <article className="bannerPara">
          <button className="cateLifestyles">healthy-life</button>
          <h4>How is healthlifestyle beneficial?</h4>
          <p className="rightparaText">
            Making changes to improve your health can lead to benefits for your
            body, your mind, your wallet, and even the environment.Healthy
            habits can reduce the risk of various diseases, including those that
            may run in your family.
          </p>
        </article>
      </div>
    </section>
  );
}
