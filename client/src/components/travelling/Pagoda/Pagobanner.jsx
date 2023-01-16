import React from "react";
import "../../subcategory/subcategy.css";


export default function Pagobanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/travel/pagoda/pago1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Travel</button>
            <h4>ကုသိုလ်တော် ဘုရား(မန္တလေး)</h4>
            <p className="leftparaText">
              ကုသိုလ်တော်ဘုရား သည် မန္တလေးတောင်၏ အရှေ့တောင်ဘက်တွင် တည်ရှိပြီး
              မင်းတုန်းမင်း၏ ကုသိုလ်တော် ဖြစ်သည်။ မြန်မာသက္ကရာဇ် ၁၂၂၄ ဝါဆိုလတွင်
              မင်းတုန်းမင်း တည်ထားကိုးကွယ်ခဲ့သော ဘုရားဖြစ်ပြီး ဘွဲ့အမည်မှာ
              မဟာလောကမာရဇိန် ဖြစ်သည်။ တံတိုင်း ၃ ထပ်ရှိပြီး ဖိနပ်ခင်းအချင်း
              သံတောင် ၆၅၊ အရပ်တော် သံတောင် ၅၀၊ ၁ မိုက် ၄ သစ်ရှိသည်။
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/travel/pagoda/pago2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateTravel ">Travel</button>
            <h4>ရွှေတိဂုံစေတီတော်ပေါ်ရှိ ထူးခြားသော ကိုးဌာန</h4>
            <p className="rightparaText">
              ရွှေတိဂုံစေတီတော် ကုန်းတော်ပေါ်မှာ ရွှေတိဂုံဘုရားကြီးကလွှဲရင်
              သူ့ထောင့်နဲ့သူ မွန်ဘုရင်များ၊ မြန်မာမင်းများ၊
              မှူးမတ်စစ်သေနာပတိများ၊ ထွက်ရပ်လမ်း အားထုတ်သော ဘိုးဘိုးအောင်၊
              ဓမ္မစေတီမင်းနှင့်တကွ ဘားမဲ့ဆရာတော်၊ ရှင်မထီးဆရာတော်၊ ရှင်အဇ္ဇဂေါဏ
              စသော ပုဂ္ဂိုလ်အကျော်အမော်များ တည်ထားကိုးကွယ်ခဲ့ကြတဲ့ ဘုရားများစွာ
              ရှိနေပါတယ်။
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
