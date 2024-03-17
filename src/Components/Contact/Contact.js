import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
// import Arrow from "../img/Vector.svg";
import "./Contact.css";
import location from "../img/location.svg";
import phoneCall from "../img/phonecall.svg";
import mail from "../img/mail.svg";
import { LuSendHorizonal } from "react-icons/lu";

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
    <div className="Foo">
      <div className="Footer">
        <div className="foot">
          <h1>GET IN TOUCH</h1>
          <p className="footPPP">
            At <span className="carl">CARLOS CONSTRUCTION</span>, we always
            strive to provide the best customer service possible. Our Customer
            Service Agents are always available to help with your enquirers, and
            we are happy to assist with any special requests or requirements.
          </p>
          <h1>BUSINESS HOURS</h1>
          <p>Monday - Saturday - 9AM-5PM ES</p>
          <h1>CUSTOMER SERVICE</h1>
          <p>Available 24 Hours / 7 Days</p>
        </div>
        <div className="foot2">
          <h1 className="Cont">THE OFFICE</h1>
          <hr className="Line" />
          <div className="googleMap">
            <iframe
              title="Google Maps"
              width="100%"
              height="220"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=220&amp;hl=en&amp;q=8319%20Preston%20Rd,%20Dallas,%20TX%2075225,%20United%20States+(carlos%20construction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
          <div className="footBox">
            <img src={location} alt="" />
            <h5>8319 Preston Rd, Dallas, TX 75225, United States</h5>
          </div>
          <div className="footBox">
            <img src={mail} alt="" />
            <h5>carlosconstructionllc01@gmail.com</h5>
          </div>
          <div className="footBox">
            <img src={phoneCall} alt="" />
            <h5>+1 213 781-2324</h5>
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
                SEND MESSAGE
                <LuSendHorizonal />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
