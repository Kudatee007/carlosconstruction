import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../img/BENTRACO (13) 1.svg";
import "./Navbar.css";
// import hamburger from "../img/tabler_menu-2.svg";
import cancel from "../img/iconoir_cancel.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [expand, setExpand] = useState(true);

  function handler() {
    setExpand(!expand);
  }

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div>
      <header className="navBar">
        <Link to="/" className="link">
          <h1 className="carlosHead">
            <span>C<span className="arlos">ARLOS</span></span> CONSTRUCTION
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
          <Link className="link" onClick={handler}>
            <h2 className="projects">PROJECTS</h2>
          </Link>
          {/* <Link to="/booking" className="link" onClick={handler}>
            <button className="btnBook">PROJECTS</button>
          </Link> */}

          {/* <img src={cancel} alt="" id="cancel"  /> */}
          <MdCancel id="cancel" onClick={handler}/>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu className="ham" onClick={handler}/>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
