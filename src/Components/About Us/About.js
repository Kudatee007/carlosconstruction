import React from "react";
import "./About.css";
import Project from "../Project/Project";
import china from "../Images/china-ningbo-cityscape_11208-1776.avif";

const About = () => {
  return (
    <div className="conTact">
      <div className="main">
        <img src={china} alt="" className="china" />
        <h1 className="solid">Solid foundation for a brighter future.</h1>
      </div>
      <div className="sub">
        <h2 className="head">ABOUT US</h2>
        <p className="para">
          Carlos Construction is a leading construction company dedicated to
          delivering high-quality projects with integrity, professionalism, and
          a commitment to excellence. With more than 10 years of experience in
          the industry, we have established ourselves as a trusted partner for
          residential, commercial, and industrial construction projects.
        </p>
        <h2 className="head">OUR HISTORY</h2>
        <p className="para">
          Founded in 2013, Carlos Construction has grown from humble beginnings
          to become a reputable name in the construction industry. Over the
          years, we have successfully completed numerous projects, earning the
          trust and satisfaction of our clients
        </p>
        <h2 className="head">OUR VALUES</h2>
        <p className="para">
          At Carlos Construction, we are guided by a set of core values that
          define who we are and how we conduct business:
        </p>
        <p className="para">
          <span>Quality</span>: We prioritize craftsmanship and attention to
          detail to deliver superior construction solutions that exceed our
          clients' expectations.
        </p>
        <p className="para">
          <span>Integrity</span>: Honesty, transparency, and ethical behavior
          are the foundation of our business practices.
        </p>
        <p className="para">
          <span>Customer Satisfaction</span>: We are committed to understanding
          our clients' needs and delivering tailored solutions that meet or
          exceed their requirements.
        </p>
        <p className="para">
          <span>Safety</span>: The safety of our employees, clients, and
          communities is paramount. We adhere to the highest safety standards to
          ensure a secure work environment.
        </p>
        <p className="para">
          <span>Innovation</span>: We embrace innovation and continually seek
          new technologies and methodologies to improve efficiency and
          productivity.
        </p>
      </div>
      <div className="main2"></div>
      <div className="sub">
        <h2 className="head">OUR TEAM</h2>
        <p className="para">
          Our team comprises experienced professionals who are passionate about
          their work and dedicated to delivering excellence in every project.
          From skilled craftsmen to project managers and engineers, each member
          of our team plays a vital role in our success.
        </p>
        <h2 className="head">OUR PROJECTS</h2>
        <p className="para">
          Throughout our history, Carlos Constructions has completed numerous
          projects across various sectors. From custom homes and office
          buildings to industrial facilities and infrastructure projects, we
          have a diverse portfolio that showcases our expertise and
          capabilities.
        </p>
      </div>
      <Project />
    </div>
  );
};

export default About;
