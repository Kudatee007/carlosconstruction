import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../img/BENTRACO (13) 1.svg";
import "./Navbar.css";
import hamburger from "../img/tabler_menu-2.svg";
import cancel from "../img/iconoir_cancel.svg";

const Navbar = () => {
  const [expand, setExpand] = useState(true);

  function handler() {
    setExpand(!expand);
  }
  return (
    <div>
      <div className="navBar">
        <Link to="/" className="link">
          <h1 className="carlosHead">
            <span>CARLOS</span> CONSTRUCTION
          </h1>
        </Link>
        <div className={expand ? "navs" : "navs navs-NX"}>
          <Link to="/services" className="link" onClick={handler}>
            <h2 className="navTxt">Services</h2>
          </Link>
          <Link to="/contact" className="link" onClick={handler}>
            <h2 className="navTxt">Contact Us</h2>
          </Link>
          <Link to="/About" className="link" onClick={handler}>
            <h2 className="navTxt">About Us</h2>
          </Link>
          <Link to="/projects" className="link" onClick={handler}>
            <h2 className="navTxt projects">PROJECTS</h2>
          </Link>
          {/* <Link to="/booking" className="link" onClick={handler}>
            <button className="btnBook">PROJECTS</button>
          </Link> */}

          <img src={cancel} alt="" id="cancel" onClick={handler} />
        </div>
        <div className="hamburger">
          <img src={hamburger} alt="" className="ham" onClick={handler} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
