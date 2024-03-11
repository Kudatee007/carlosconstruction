import React from "react";
import "./Page1.css";
// import { Link } from "react-router-dom";
import videoBg from "../Images/1104411_1080p_4k_2k_3840x2160.mov";
<<<<<<< HEAD
// import carlosLogo from "../Images/carlos.svg";
=======
import videoBg1 from "../Images/1109257_1080p_4k_2k_3840x2160 (1).mp4";
import carlosLogo from "../Images/5c725fd0-a6d7-4f40-aa40-09a59f84dc11.JPG";
import carlosLogo3 from "../Images/e4afb92c-12c9-419c-8b81-c4c239987b2e.JPG";
import carlosLogo2 from "../Images/Image 3-11-24 at 11.55 AM.jpg";
import Featured from "./Featured";
import backWood from "../Images/wood-texture-background.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
>>>>>>> 2e18bd4a74f335fd8e36488a69d348de95f30c50

const Page1 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1400, min: 767 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
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
      {/* BACKWOOD BOX */}
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
      {/* PLANNING TOP CONSULTATION */}
      <div className="planTop">
        <div className="planTopDiv">
          <img src={carlosLogo} alt="" className="planTopImg" />
          <h5 className="planToph5">PLANNING YOUR PROJECT FROM SCRATCH</h5>
          <h6 className="planToph6">FREE CONSULTATION FOR YOUR PROJECT</h6>
          <p className="planTopP">
            Constructo Construction Inc provides building services to clients
            who value diligence, resourcefulness and creativity in a partner.
          </p>
        </div>
        <div className="planTopDiv">
          <img src={carlosLogo2} alt="" className="planTopImg" />
          <h5 className="planToph5">TOP CONCRETE DISTRIBUTION</h5>
          <h6 className="planToph6">TOP QUALITY CONCRETE DELIVERED</h6>
          <p className="planTopP">
            In Constructo we are committed to green building, roads, bridges and
            sustainability in our offices as well as on our job sites.
          </p>
        </div>
        <div className="planTopDiv">
          <img src={carlosLogo3} alt="" className="planTopImg" />
          <h5 className="planToph5">GET YOUR FREE CONSULTATION</h5>
          <h6 className="planToph6">ADAPTING TO ANY PROJECT</h6>
          <p className="planTopP">
            Our capacities give us the freedom of executing project of various
            sizes. From small personal projects to building mega build of grand
            scale.
          </p>
        </div>
      </div>
      {/* PROJECT WORK */}
      <div className="projectWork">
        <h2 className="projectWorkTxt">PROJECT WORK</h2>
        <div>
          <Carousel responsive={responsive}>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
         <img src={carlosLogo2} alt="" className="projectWorkImg"/>
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default Page1;
