import React from "react";
import "./Project.css";
import carlosLogo2 from "../Images/Image 3-11-24 at 11.55 AM.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skyBlue from "../Images/4784471_Mumbai_India_Skyline_1920x1080.mp4";

const Project = () => {
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
      {/* PROJECT WORK */}
      <div className="projectWork">
        <h2 className="projectWorkTxt">PROJECT WORK</h2>
        <div>
          <Carousel responsive={responsive}>
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
            <img src={carlosLogo2} alt="" className="projectWorkImg" />
          </Carousel>
          ;
        </div>
      </div>
      <div>
        <video src={skyBlue} autoPlay loop muted className="skyBlue"/>
      </div>
    </div>
  );
};

export default Project;
