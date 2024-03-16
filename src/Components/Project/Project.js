import React, { useEffect } from "react";
import "./Project.css";
import carlosLogo2 from "../Images/Image 3-11-24 at 11.55 AM.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skyBlue from "../Images/4784471_Mumbai_India_Skyline_1920x1080.mp4";
import project4 from "../Images/electrician-installer-with-tool-his-hands-working-with-cable-construction-site.jpg";
import project2 from "../Images/construction-silhouette.jpg";
import project3 from "../Images/building-new-concrete-houses.jpg";
import project1 from "../Images/heavy-machines-construction-workers-working-building.jpg";
import project5 from "../Images/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg";
import project6 from "../Images/workers-examining-work.jpg";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
      breakpoint: { max: 767, min: 540 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      {/* PROJECT WORK */}
      <div className="projectWork">
        <h2 className="projectWorkTxt">PROJECT WORK</h2>
        <div>
          <Carousel responsive={responsive}>
            <img src={project1} alt="" className="projectWorkImg" />
            <img src={project2} alt="" className="projectWorkImg" />
            <img src={project3} alt="" className="projectWorkImg" />
            <img src={project4} alt="" className="projectWorkImg" />
            <img src={project5} alt="" className="projectWorkImg" />
            <img src={project6} alt="" className="projectWorkImg" />
            <img src={project2} alt="" className="projectWorkImg" />
            <img src={project3} alt="" className="projectWorkImg" />
            <img src={project4} alt="" className="projectWorkImg" />
          </Carousel>
          ;
        </div>
      </div>
      <div>
        <video src={skyBlue} autoPlay loop muted className="skyBlue" />
      </div>
    </div>
  );
};

export default Project;
