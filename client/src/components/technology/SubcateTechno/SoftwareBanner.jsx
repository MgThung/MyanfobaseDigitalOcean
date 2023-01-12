import React from "react";
import "../technology.css"

export default function SoftwareBanner() {
  return (
    <>
      <section className="container catebannerImg">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/technology/software/window11.png" />
          </div>
          <article className="bannerPara">
            <button className="cateTechnology">Software</button>
            <h4>Windows 11 figures are finally rising</h4>
            <p className="leftparaText">
              The latest data from web analytics service Statcounter (via The
              Register(opens in new tab)) reveals that Windows 11 ran on 16.93%
              of PCs worldwide in December 2022.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/technology/software/tabs.jpg" />
          </div>
          <article className="bannerPara">
            <button className="cateTechnology">Software</button>
            <h4>
              Tabs are coming to Notepad in future Windows 11 updat.
            </h4>
            <p className="rightparaText">
              According to Windows Latest(opens in new tab), Microsoft was
              working on this back in 2019 for Windows 10, but was shelved.
              However, with tabs in File Explorer already helping plenty of
              users .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
