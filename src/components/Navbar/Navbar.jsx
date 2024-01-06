import React from "react";
import "./Navbar.css";
import logo from "../../img/logo/logo.svg";
import Search from "../Search/Search";
import burgerMenu from "../../img/logo/burgerMenu.svg";
import { Link } from "react-router-dom";
import user from "../../img/logo/user.svg";
import cart from "../../img/logo/basket.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            style={{ cursor: "pointer" }}
            src={logo}
            alt="Логотип"
            className="logo"
          />{" "}
        </Link>
        <button className="burger-menu-button">
          <img src={burgerMenu} alt="" />
          Каталог
        </button>
      </div>
      <div style={{ padding: "0 2vh" }}>
        <Search />
      </div>
      <div className="navbar-right">
        <div className="navbar-user">
          <p>Добро пожаловать</p>
          <Link>Вход/</Link>
          <Link>Регистрация</Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="user-profile">
            <img
              style={{ cursor: "pointer" }}
              src={user}
              alt="Фото пользователя"
            />
          </div>
          <div className="line"></div>
          <div className="cart-icon">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
