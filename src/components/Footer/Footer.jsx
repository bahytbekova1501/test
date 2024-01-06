import React from "react";
import "./Footer.css"; // Создайте свой файл стилей Footer.css
import logo from "../../img/logo/logo.svg";
import appstore from "../../img/appstore.svg";
import WA from "../../img/WA.svg";
import google from "../../img/logos_google-play.svg";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/logo-facebook.svg";
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer">
        <div className="footer_column_1">
          <img className="footer_logo" src={logo} alt="" />
          <p>
            Первый отечественный бренд Iskender на рынке сантехники от компании
            ОсОО «Стройдом.кг»
          </p>
          <div>
            <button>
              <img src={appstore} alt="" />
            </button>
            <button>
              <img src={google} alt="" />
            </button>
          </div>
        </div>
        <div className="footer_column_2">
          <h3> Адреса</h3>
          <div>
            <p>
              <span>ЭлитСтрой </span>{" "}
            </p>
            <p>ул. Ден-Сяопина 18/1</p>
          </div>{" "}
          <div>
            <p>
              <span>Баткен </span>
            </p>
            <p>ул. Льва-Толстого 191</p>
          </div>{" "}
          <div>
            <p>
              <span>ТааТан </span>{" "}
            </p>
            <p>ул. Лермонтова 6</p>
          </div>
        </div>{" "}
        <div className="footer_column_3">
          <h3>Компания </h3>
          <p>
            {" "}
            <span>Каталог</span>{" "}
          </p>{" "}
          <p>
            {" "}
            <span>Избранное</span>{" "}
          </p>{" "}
          <p>
            <span>Личный кабинет</span>{" "}
          </p>
        </div>
        <div className="footer_column_4">
          <h3>Контакты </h3>
          <div>
            <p>
              {" "}
              <span> Email:</span>
            </p>
            <p>iskender.kg@gmail.com</p>
          </div>{" "}
          <div>
            <p>
              {" "}
              <span>Телефон:</span>
            </p>
            <p>+996 (500) 000-104 </p>
            <p>+996 (997) 000-104</p>
            <p>+996 (222) 000-104</p>
            <button className="WA">
              <img src={WA} alt="" /> WhatsApp
            </button>
          </div>
        </div>{" "}
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          opacity: "0.5",
        }}
      >
        <p style={{ fontSize: "15px", padding: "3vh 0" }}>
          © 2023 Iskender.kg - Отечественный бренд сантехники
        </p>
        <div style={{ display: "flex" }}>
          <img style={{ paddingRight: "2vh" }} src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
