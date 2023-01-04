import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./about.css";
const Result = () => {
  return (
    <p className="notifysms">
      Your message has been successfully sent. Thanks for your informations...
    </p>
  );
};

export default function Aboutcontact() {
  const form = useRef(null);
  const emailref = useRef(null);
  const messref = useRef(null);
  const [result, showResult] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();

    if (
      emailref.current.value.length === 0 ||
      messref.current.value.length === 0
    ) {
      alert("please fill all data");
    } else {
      emailjs
        .sendForm(
          "gmail",
          "template_wskoggv",
          form.current,
          "X2g6jwrEyUhbIzoQW"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      emailref.current.value = "";
      messref.current.value = "";
      showResult(true);
    }

    //hide result
    setTimeout(() => {
      showResult(false);
    }, 7000);
  };

  return (
    <div className="about_main_contact">
      <div className="abmain_heading">
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={formSubmit}>
          <div className="about_border_contact">
            <p>
              At vero eos et accusanus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </p>

            <div className="about_testform">
              <input
                ref={emailref}
                type="email"
                name="email"
                placeholder="email"
              ></input>
            </div>

            <div className="text">
              <textarea
                ref={messref}
                type="text"
                name="message"
                placeholder="comment"
              ></textarea>
            </div>
          </div>
          <button className="contactbtn">Contact</button>
          <div className="row">{result ? <Result /> : ""}</div>
        </form>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15275.631849412832!2d96.12209588501248!3d16.830921415535474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194c83da2329f%3A0x6c847def2d82a317!2zNiDhgIXhgLbhgJvhgK3hgJXhgLrhgIThgLzhgK3hgJnhgLog4YGFIOGAnOGAmeGAuuGAuCwg4YCb4YCU4YC64YCA4YCv4YCU4YC6!5e0!3m2!1smy!2smm!4v1648795970311!5m2!1smy!2smm"
          width="600"
          height="450"
          // style="border:0;"
          // allowfullscreen=""
          // loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
