import React from "react";
import newsImg from "../../img/news/banner.svg";
import Carousel from "../Carousel/Carousel";
import prevArrowImg from "../../img/arrow-down.svg";
import nextArrowImg from "../../img/arrow.svg";
import "./News.css";
function NewsCard() {
  const newsImage = [
    {
      image: newsImg,
    },
    {
      image: newsImg,
    },
    {
      image: newsImg,
    },
    {
      image: newsImg,
    },
    {
      image: newsImg,
    },
    {
      image: newsImg,
    },
    {
      image: newsImg,
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: <img src={prevArrowImg} alt="Previous" />,
    nextArrow: <img src={nextArrowImg} alt="Next" />,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="news_block"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Carousel settings={settings}>
        {newsImage.map((item, index) => {
          return (
            <div className="news_card" key={index}>
              <img src={item.image} alt="" />{" "}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default NewsCard;
