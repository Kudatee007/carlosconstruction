import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Arrow from "../img/Vector.svg";
import "./Contact.css";
import location from "../img/location.svg";
import phoneCall from "../img/phonecall.svg";
import mail from "../img/mail.svg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7mgroal",
        "template_agumg9q",
        form.current,
        "0l_7Ii5swDRXaZUNu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="googleMap">
        <iframe
          title="Google Maps"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&enable-dark-mode" // Add enable-dark-mode to force dark mode
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
      <div className="Footer">
        <div className="foot">
          <h1>
            G<span className="span">et</span> in touch
          </h1>
          <p className="footPPP">
            At BENTRACO LOGISTICS, we always strive to provide the best customer
            service possible. Our Customer Service Agents are always available
            to help with your reservations, and we are happy to assist with any
            special requests or requirements.
          </p>
          <h1>
            Bu<span className="span">si</span>ness Hours
          </h1>
          <p>Reservation and Dispatch 24/7</p>
          <h1>
            Billing <span className="span">De</span>partment
          </h1>
          <p>Monday - Friday - 9AM-5PM EST</p>
        </div>
        <div className="foot2">
          <h1 className="Cont">
            The o<span className="span">ff</span>ice
          </h1>
          <hr className="Line" />
          <div className="footBox">
            <img src={location} alt="" />
            <h5>2145 E West Connector Apt 202 Austell GA 30106-8191</h5>
          </div>
          <div className="footBox">
            <img src={mail} alt="" />
            <h5>bentracologistics@gmail.com</h5>
          </div>
          <div className="footBox">
            <img src={phoneCall} alt="" />
            <h5>+1 470 265-9412</h5>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="Input">
              <h2 className="inTouch">Lets get in touch.</h2>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="inputName"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="inputEmail"
              />
              <textarea
                name="message"
                cols="30"
                rows="4"
                placeholder="Message"
                className="inputText"
              />
              <button className="Btnsend" type="submit" value="Send">
                <img src={Arrow} alt="" />
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
