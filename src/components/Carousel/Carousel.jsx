import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import prevArrowImg from "../../img/arrow-down.svg";
import nextArrowImg from "../../img/arrow.svg";

const Carousel = ({ children, settings }) => {
  console.log("Carousel settings:", settings);
  return (
    <Slider {...settings}>
      {children.map((card, index) => (
        <div key={index} className="card">
          {card}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
