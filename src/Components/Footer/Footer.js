import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footerDiv">
        <div>
          <h3 className="footerH3">ABOUT US</h3>
          {/* <h5 className="footerH5">CARLOS CONSTRUCTION</h5> */}
          <p className="footerP">
            <span className="carl2">Carlos Construction</span> is a renowned construction company dedicated to
            delivering excellence in residential, commercial, and industrial
            projects. With a legacy of craftsmanship, innovation, and client
            satisfaction, we have established ourselves as a trusted partner for
            construction solutions tailored to meet the diverse needs of our
            clients.
          </p>
        </div>
        <div>
          <h3 className="footerH3">NAVIGATION</h3>
          <ul>
            <Link to="/" className="link">
            <li className="footerLi">Home</li>
            </Link>
            <Link to="/project" className="link">
            <li className="footerLi">Project</li>
            </Link>
            <Link to="/services" className="link">
            <li className="footerLi">Services</li>
            </Link>
            <Link to="/about" className="link">
            <li className="footerLi">About us</li>
            </Link>
            <Link to="/contact" className="link">
            <li className="footerLi">Contact us</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="footerH3">WORKING HOUR</h3>
          <div className="hourDiv">
            <p className="hourDays">Monday</p>
            <p className="hourTime">9am - 5pm</p>
          </div>
          <div className="hourDiv">
            <p className="hourDays">Tuesday</p>
            <p className="hourTime">9am - 5pm</p>
          </div>
          <div className="hourDiv">
            <p className="hourDays">Wednesday</p>
            <p className="hourTime">9am - 5pm</p>
          </div>
          <div className="hourDiv">
            <p className="hourDays">Thursday</p>
            <p className="hourTime">9am - 5pm</p>
          </div>
          <div className="hourDiv">
            <p className="hourDays">Friday</p>
            <p className="hourTime">9am - 5pm</p>
          </div>
          <div className="hourDiv">
            <p className="hourDays">Saturday</p>
            <p className="hourTime">10am - 2pm</p>
          </div>
        </div>
      </div>
      <div className="footerReserved">
        <p className="reservedTxt">
          carlos construction | © 2014 constuction, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
