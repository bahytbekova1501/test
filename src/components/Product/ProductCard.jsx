import React, { useState } from "react";
import "./ProductCard.css";
import fav1 from "../../img/img/fav1.svg";
import fav2 from "../../img/img/fav2.svg";
import Carousel from "../Carousel/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrowImg from "../../img/arrow-down.svg";
import nextArrowImg from "../../img/arrow.svg";
function ProductCard({ products }) {
  const [favorites, setFavorites] = useState(
    Array(products.length).fill(false)
  );
  const [counts, setCounts] = useState(Array(products.length).fill(0));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFavoriteToggle = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];

    setFavorites(updatedFavorites);
  };

  const handleIncrement = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;

    setCounts(updatedCounts);
  };

  const handleDecrement = (index) => {
    const updatedCounts = [...counts];
    if (updatedCounts[index] > 0) {
      updatedCounts[index] -= 1;
    }

    setCounts(updatedCounts);
  };
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    prevArrow: <img src={prevArrowImg} alt="Previous" />,
    nextArrow: <img src={nextArrowImg} alt="Next" />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 913,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="product_container">
      <Carousel settings={settings}>
        {products.map((item, index) => {
          const isPromo = item.isPromo || false;
          return (
            <div
              className={`product_card ${isPromo ? "promo" : ""}`}
              key={index}
            >
              <div style={{ padding: "1.7vh" }}>
                <div className="product_img">
                  <img src={item.img} alt="" />
                  <div className="product_img_fav">
                    <img
                      src={favorites[index] ? fav2 : fav1}
                      alt=""
                      onClick={() => handleFavoriteToggle(index)}
                    />
                  </div>
                </div>
                <div className="product_card_text">
                  <h5>{item.title}</h5>
                  <p className="product_card_price">
                    {isPromo && (
                      <>
                        <span className="new_price">{item.newPrice} c </span>
                        <span className="old_price">{item.price} c</span>
                      </>
                    )}
                    {!isPromo && (
                      <span span className="product_card_price">
                        {item.price} c
                      </span>
                    )}
                  </p>
                  <p className="product_card_availability">
                    {item.availability}
                  </p>
                  <ul className="product_card_set">
                    <li>{item.set}</li>
                  </ul>
                </div>
              </div>
              <div className="counter">
                <button onClick={() => handleDecrement(index)}>-</button>
                <span>{counts[index]}</span>
                <button onClick={() => handleIncrement(index)}>+</button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProductCard;
