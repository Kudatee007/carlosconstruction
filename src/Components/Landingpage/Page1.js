import React from "react";
import "./Page1.css";
// import { Link } from "react-router-dom";
import videoBg from "../Images/1104411_1080p_4k_2k_3840x2160.mov";
import carlosLogo from "../Images/carlos.svg";

const Page1 = () => {
  return (
    <div>
      <div className="div01">
        <video src={videoBg} autoPlay loop muted />
        <div className="div01Txt">
          {/* <img src={carlosLogo} alt="" className="carlosLogo" /> */}
          <h1 className="ccTxt">CARLOS CONSTRUCTION</h1>
          <h1 className="craftTxt">Crafting Your Vision into Reality</h1>
          <h2 className="beyondTxt">
            Carlos Construction Builds Beyond Expectations!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page1;
