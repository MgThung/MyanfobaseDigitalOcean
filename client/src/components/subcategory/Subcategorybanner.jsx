import React from "react";
import "./subcategy.css";

export default function Subcategorybanner() {
  return (
    <section className="container catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/technology/computerpage/hp360.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateTechnology">Computer</button>
          <h4>HP latest Modern </h4>
          <p className="leftparaText">
            HP Spectre x360 laptops are HP Presence qualified with a 5MP camera,
            Auto Frame, Backlight Adjustment, AI Noise Reduction and Dynamic
            voice levelling to make you look and sound your best.{" "}
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/technology/computerpage/macbook.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateTechnology">Computer</button>
          <h4>MacBook Pro 13-inch - Apple</h4>
          <p className="rightparaText">
            The 13-inch MacBook Pro is supercharged by M2. It's our most
            portable pro laptop with all-day battery life and a gorgeous Retina
            display.13-inch MacBook Pro laptop supercharged by M2 chip. 
          </p>
        </article>
      </div>
    </section>
  );
}
