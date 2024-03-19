import React, { useEffect } from "react";
import "./Page1.css";
// import { Link } from "react-router-dom";
import backgroundBg from "../Images/Image 3-19-24 at 5.15 PM.jpg";
import backgroundBg1 from "../Images/Image 3-19-24 at 5.19 PM.jpg";
import carlosLogo from "../Images/5c725fd0-a6d7-4f40-aa40-09a59f84dc11.JPG";
import carlosLogo3 from "../Images/e4afb92c-12c9-419c-8b81-c4c239987b2e.JPG";
import carlosLogo2 from "../Images/Image 3-11-24 at 11.55 AM.jpg";
import backWood from "../Images/wood-texture-background.jpg";
import "react-multi-carousel/lib/styles.css";
import Project from "../Project/Project";

const Page1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="div01">
        {/* <video src={videoBg} autoPlay loop muted className="videoBg" /> */}
        {/* <video src={videoBg1} autoPlay loop muted className="videoBg1" /> */}
        {/* <img src={backgroundBg} alt="" className="videoBg"/>
        <img src={backgroundBg1} alt="" className="videoBg1"/> */}
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
          <h5 className="planToph5">PLANNING PROJECT FROM SCRATCH</h5>
          <h6 className="planToph6">FREE PROJECT CONSULTATION </h6>
          <p className="planTopP">
            Carlos Construction provides building services to clients who value
            diligence, resourcefulness and creativity in a partner.
          </p>
        </div>
        <div className="planTopDiv">
          <img src={carlosLogo2} alt="" className="planTopImg" />
          <h5 className="planToph5">TOP CONCRETE DISTRIBUTION</h5>
          <h6 className="planToph6">TOP QUALITY CONCRETE DELIVERED</h6>
          <p className="planTopP">
            In Carlos Construction we are committed to green building, roads,
            bridges and sustainability in our offices as well as on our job
            sites.
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
      <div className="kel">
        <p className="kelp">
          Construction is the process of creating infrastructure or buildings
          through systematic planning, design, and execution of various tasks,
          such as excavation, foundation laying, structural erection, and
          finishing. It encompasses a wide range of activities, from residential
          and commercial building construction to civil engineering projects
          like roads, bridges, and dams. Construction projects involve
          coordination among architects, engineers, contractors, suppliers, and
          laborers to ensure successful completion within budget and schedule.
          It plays a vital role in shaping urban landscapes, supporting economic
          growth, and improving living standards by providing essential
          infrastructure and shelter for communities. The construction industry
          is dynamic and continually evolving, driven by advancements in
          technology, sustainability practices, and regulatory requirements.
        </p>
        <p className="kelp">
          Whether it's building dream homes, creating dynamic workspaces, or
          constructing essential infrastructure, <span className="carl">Carlos Construction</span> is
          dedicated to delivering exceptional results that enhance communities,
          empower businesses, and <br /> shape the future of construction.
        </p>
        <p className="kelp">
          Contact us today to learn more about how <span className="carl">Carlos Construction</span> can turn
          your vision into reality and be your partner in building a better
          tomorrow.
        </p>
      </div>
      {/* PROJECT WORK */}
      <Project />
    </div>
  );
};

export default Page1;
