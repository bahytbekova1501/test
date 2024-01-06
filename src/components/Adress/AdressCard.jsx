import React from "react";
import "./AdressCaed.css";
import market from "../../img/adress/market.svg";
import Clock from "../../img/adress/Clock-Square.svg";
import Location from "../../img/adress/Location.svg";
import arrow from "../../img/adress/arrow-up.svg";
import tel from "../../img/adress/tel.svg";
import Carousel from "../Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrowImg from "../../img/arrow-down.svg";
import nextArrowImg from "../../img/arrow.svg";
function AdressCard() {
  const adress = [
    {
      img: market,
      title: "Iskender home",
      location: "Кыргызстан, г. Бишкек ул. Турусбекова A167",
      time: "08:00 - 22:00",
      tel: "+996 500 345 345",
    },
    {
      img: market,
      title: "Iskender home",
      location: "Кыргызстан, г. Бишкек ул. Лермонтова 6",
      time: "08:00 - 22:00",
      tel: "+996 500 345 345",
    },
    {
      img: market,
      title: "Iskender home",
      location: "Кыргызстан, г. Бишкек ул. Льва-Толстого 19",
      time: "08:00 - 22:00",
      tel: "+996 500 345 345",
    },
  ];

  return (
    <div className="adress_container">
      {adress.map((item, index) => {
        return (
          <div key={index} className="adress_card">
            <div className="adress_top">
              <img className="adress_market_image" src={item.img} alt="" />
              <div>
                <h5>{item.title}</h5>
                <a href="#">
                  <p>открыть в карте</p>
                </a>
              </div>

              <button>
                <img src={arrow} alt="" />
              </button>
            </div>
            <hr />
            <div className="adress_bottom">
              <div className="adress_bottom_col adress_bottom_col_1">
                <img src={Location} alt="" />
                <p>{item.location}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="adress_bottom_col">
                  <img src={Clock} alt="" />
                  <p>{item.time}</p>
                </div>
                <div className="adress_bottom_col">
                  <img src={tel} alt="" />
                  <p>{item.tel}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default AdressCard;
