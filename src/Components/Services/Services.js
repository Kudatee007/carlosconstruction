import React from "react";
import "./Services.css";
import resident from "../Images/resident.jpg";
import comme from "../Images/comme.jpg";
import indust from "../Images/indust.jpg";
import infra from "../Images/infra.jpg";
import Project from "../Project/Project";

const Services = () => {
  return (
    <div>
    <div>
      <div className="service">
        <h1 className="solid1">
          Carlos Construction specializes in a wide range of construction
          services, including:
        </h1>
      </div>
      <h1 className="serv">SERVICES</h1>
      <div className="parent1">
        <div>
          <img src={resident} alt="" className="img1" />
        </div>
        <div className="serve">
          <p className="p1">
            Residential construction involves building or renovating structures
            intended for private residential use. We offer a wide range of
            services to meet the diverse needs and preferences of homeowners.
            Whether building custom homes, renovating existing properties, or
            enhancing outdoor living spaces, Carlos Construction strive to
            deliver high-quality craftsmanship and personalized solutions
            tailored to each client's vision.
          </p>
        </div>
        <div className="serve">
          <p className="p1">
            In the realm of commercial construction, Carlos Construction offers
            a comprehensive range of services tailored to meet the diverse needs
            of businesses across various industries. With our commitment to
            excellence and our extensive expertise, we deliver innovative
            solutions that not only meet but exceed our clients' expectations.
            At Carlos Construction, we are dedicated to delivering exceptional
            commercial construction solutions that empower businesses to thrive.
            Contact us today to learn more about how we can bring your vision to
            life and elevate your commercial space to new heights of success.
          </p>
        </div>
        <div>
          <img src={comme} alt="" className="img1" />
        </div>
        <div>
          <img src={indust} alt="" className="img1" />
        </div>
        <div className="serve">
          <p className="p1">
            Our company specializes in providing comprehensive industrial
            construction solutions tailored to meet the unique needs of clients
            across various sectors. With our extensive experience, technical
            expertise, and commitment to quality, we deliver innovative projects
            that enhance operational efficiency, safety, and sustainability.At
            Carlos Construction, we are committed to delivering excellence in
            industrial construction, driving operational excellence, and
            empowering industries to thrive in a rapidly evolving global market.
            Contact us today to learn more about our industrial construction
            services and how we can support your project needs.
          </p>
        </div>
        <div className="serve">
          <p className="p1">
            Carlos Construction specializes in providing comprehensive civil
            engineering and infrastructure solutions tailored to meet the
            diverse needs of communities, municipalities, and industries. With
            our expertise, innovation, and commitment to sustainable
            development, we deliver projects that enhance connectivity,
            resilience, and quality of life. We are dedicated to delivering
            excellence in civil engineering and infrastructure, building
            sustainable communities, and shaping the future of transportation,
            water resources, and urban development. Contact us today to learn
            more about our services and how we can support your project needs.
          </p>
        </div>
        <div>
          <img src={infra} alt="" className="img1" />
        </div>
      </div>
    </div>
      <Project />
      </div>
  );
};

export default Services;
