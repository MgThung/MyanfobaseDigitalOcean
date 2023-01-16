import React from "react";
import "../../subcategory/subcategy.css";

export default function Regionbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/history/region/region1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">Region</button>
            <h4>Region and state in Myanmar</h4>
            <p className="leftparaText">
              ကရင်ပြည်နယ်|မကွေးတိုင်းဒေသကြီ:|ဧရာဝတီတိုင်းဒေသကြီး|ပဲခူးတိုင်းဒေသကြီး|ချင်းပြည်နယ်|ကချင်ပြည်နယ်|ကယားပြည်နယ်|မန္တလေးတိုင်းဒေသကြီး|မွန်ပြည်နယ်|နေပြည်တော်
              ပြည်ထောင်စုနယ်မြေ|ရခိုင်ပြည်နယ်|စစ်ကိုင်းတိုင်းဒေသကြီး|ရှမ်းပြည်နယ်|တနင်္သာရီတိုင်းဒေသကြီး|ရန်ကုန်တိုင်းဒေသကြီး
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/history/region/region2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">Region</button>
            <h4>The capital city of Myanmar</h4>
            <p className="rightparaText">
              Nay Pyi Taw, (Burmese: “Abode of Kings”) also spelled Nay Pyi Daw
              or Naypyidaw, city, capital of Myanmar (Burma). Nay Pyi Taw was
              built in the central basin of Myanmar in the early 21st century to
              serve as the country's new administrative centre.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
