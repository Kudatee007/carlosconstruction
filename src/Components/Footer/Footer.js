import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footerDiv">
        <div>
          <h3 className="footerH3">ABOUT US</h3>
          <h5 className="footerH5">CARLOS CONSTRUCTION</h5>
          <p className="footerP">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            consequatur nam vel harum! Odio vero odit deleniti fuga voluptatibus
            harum sequi beatae distinctio! Veritatis rem pariatur fuga vero,
            adipisci officiis!
          </p>
        </div>
        <div>
          <h3 className="footerH3">NAVIGATION</h3>
          <ul>
            <li className="footerLi">Home</li>
            <li className="footerLi">Project</li>
            <li className="footerLi">Services</li>
            <li className="footerLi">About us</li>
            <li className="footerLi">Contact us</li>
          </ul>
        </div>
        <div>
            <h3 className="footerH3">WORKING HOUR</h3>
            <div className="hourDiv">
                <p className="hourDays">Monday</p>
                <p className="hourTime">8 am - 17 pm</p>
            </div>
            <div className="hourDiv">
                <p className="hourDays">Tuesday</p>
                <p className="hourTime">8 am - 17 pm</p>
            </div>
            <div className="hourDiv">
                <p className="hourDays">Wednesday</p>
                <p className="hourTime">8 am - 17 pm</p>
            </div>
            <div className="hourDiv">
                <p className="hourDays">Thursday</p>
                <p className="hourTime">8 am - 17 pm</p>
            </div>
            <div className="hourDiv">
                <p className="hourDays">Friday</p>
                <p className="hourTime">8 am - 17 pm</p>
            </div>
            <div className="hourDiv">
                <p className="hourDays">Saturday</p>
                <p className="hourTime">8 am - 17 pm</p>
            </div>
        </div>
      </div>
      <div className="footerReserved">
        <p className="reservedTxt">carlos construction | © 2014 constuction, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
