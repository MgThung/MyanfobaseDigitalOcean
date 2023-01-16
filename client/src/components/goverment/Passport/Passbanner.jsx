import React from "react";
import "../../subcategory/subcategy.css";

export default function Passbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/government/passport/pass1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4>
              ပတ်စ်ပိုစ့် ရုံးအကန့်သတ်မရှိ ပိတ်ပြီ။ အချိန်မရွေး အပြောင်းအလဲ
              ရှိနိုင်ပါတယ်။{" "}
            </h4>
            <p className="leftparaText">
              Passport အသစ် လုပ်ချင်သူများ ၊ သက်တမ်းတိုးချင်သူ ၊ PJ PV ပြောင်း ၊
              PV PJ ပြောင်း စတဲ့ စာအုပ်လုပ်တာ မှန်သမျှ ကို ရန်ကုန်ရှိ ပတ်စပို့စ်
              ရုံးအပါအဝင် တစ်နိုင်ငံလုံးက ပတ်ပိုစ့် ရုံးတွေအားလုံးမှာ
              ရပ်နားလိုက်ပါပြီ ။
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/government/passport/pass2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
            <h4>
              passport လုပ်ခြင်း ကို MOU နှင့် Buddha Gaya ဘုရားဖူးများအတွက်တော့
              ဖွင့်ပေး
            </h4>
            <p className="rightparaText">
              စာသင်မယ့်သူတေွ၊ အလုပ်လုပ်မယ့်သူတွေ၊ နိုင်ငံခြားခရီးသွား ၊
              သဘော်သားတွေ ခုချိန် passport လိုရင်တော့ မျှော်လင့်ချက်မရှိ
              နည်းလမ်းမရှိနိုင်သေးပါဘူး။ လူတိုင်း ပတ်စပို့စ် လုပ်ရင် လူလိမ် လူညာ
              တချက် သတိပြုကြပါလို့ မှာကြားချင်ပါတယ်။
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
