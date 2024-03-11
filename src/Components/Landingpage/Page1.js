import React from "react";
import "./Page1.css";
// import { Link } from "react-router-dom";
import videoBg from "../Images/1104411_1080p_4k_2k_3840x2160.mov";
import videoBg1 from "../Images/1109257_1080p_4k_2k_3840x2160 (1).mp4";
import carlosLogo from "../Images/carlos.svg";
import Featured from "./Featured";
import backWood from "../Images/wood-texture-background.jpg";

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
      <div className="backwoodBox">
        <div className="quoteBox">
          <h2 className="quoteBoxTxt">
            FAST AND RELIABLE SERVICE FOR YOUR PROJECT OR A QUICK FIX, WE DO IT
            ALL!
          </h2>
          <button className="quoteBoxBtn">GET A QUOTE</button>
        </div>
        <img src={backWood} alt="" className="backWood" />
      </div>
    </div>
  );
};

export default Page1;
