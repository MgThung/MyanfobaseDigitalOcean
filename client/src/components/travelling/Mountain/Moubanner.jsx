import React from "react";
import "../../subcategory/subcategy.css";

export default function Moubanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/travel/mountain/popa.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Travel</button>
            <h4>Mount Popa (Volcano Mountain)</h4>
            <p className="leftparaText">
              Mount Popa is a dormant volcano 1518 metres above sea level, and
              located in central Myanmar in the region of Mandalay about 50 km
              southeast of Bagan in the Pegu Range. It can be seen from the
              Ayeyarwady River as far away as 60 km in clear weather.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/travel/mountain/cloudsea.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Travel</button>
            <h4>𝑪𝒍𝒐𝒖𝒅 𝑺𝒆𝒂 - နောင်ချို တိမ်ပင်လယ် ☁️</h4>
            <p className="rightparaText">
              ဆောင်းရာသီမှာပဲ တိမ်တွေတွေ့ရတာမလို့ ၁တစ်ခေါက်လောက်တော့
              ရောက်အောင်သွားသင့်တဲ့ နေရာလေး ရှုခင်းအရမ်းလှပြီး ဓာတ်ပုံထွက်လည်း
              မိုက်မှ မိုက်ပဲဗျာ ဆောင်းရာသီရဲ့ နိုဝင်ဘာ ဒီဇင်ဘာလတွေမှာပဲ
              တိမ်ပင်လယ်ရှိတာမို့ မသွားခင် တိမ်ပင်လယ်ရှိနိုင် မရှိနိုင်ကိုလည်း
              ကြိုတင်လေ့လာသွားကြပါ
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
