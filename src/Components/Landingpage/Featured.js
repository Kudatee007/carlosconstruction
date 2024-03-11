import React from "react";
import "./Feature.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featured = () => {
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
      <div>
        <h2>FEATURED WORK</h2>
        <div>
          <button>L</button>
          <button>R</button>
        </div>
        <div>
          <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default Featured;
