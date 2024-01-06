import React from "react";
import vanna from "../../img/img/categoryImg/vanna.svg";
import vytajka from "../../img/img/categoryImg/vytajka.svg";
import unitazy from "../../img/img/categoryImg/unitazy.svg";
import smesitel from "../../img/img/categoryImg/smesitel.svg";
import polotenecsushitel from "../../img/img/categoryImg/polotenecsushitel.svg";
import kuhonnayaMoika from "../../img/img/categoryImg/kuhonnayaMoika.svg";
import dushevye from "../../img/img/categoryImg/dushevye.svg";
import Vodonagrevatel from "../../img/img/categoryImg/Vodonagrevatel.svg";
import Umyvalnik from "../../img/img/categoryImg/Umyvalnik.svg";
import "./Category.css";
function CategoryCard() {
  const category = [
    { title: "Ванны", count: "3000 товаров", img: vanna },
    { title: "Смесители", count: "3000 товаров", img: smesitel },
    { title: "Вытяжки для кухни", count: "3000 товаров", img: vytajka },
    { title: "Кухонные мойки", count: "3000 товаров", img: kuhonnayaMoika },
    { title: "Другие", count: "3000 товаров", img: smesitel },
    { title: "Унитазы", count: "3000 товаров", img: unitazy },
    { title: "Вытяжки для кухни", count: "3000 товаров", img: vytajka },
    { title: "Умывальники", count: "3000 товаров", img: Umyvalnik },
    {
      title: "Полотенцесушители",
      count: "3000 товаров",
      img: polotenecsushitel,
    },
    { title: "Водонагреватели", count: "3000 товаров", img: Vodonagrevatel },
    { title: "Душевые", count: "3000 товаров", img: dushevye },
    { title: "Водонагреватели", count: "3000 товаров", img: Vodonagrevatel },
    {
      title: "Полотенцесушители",
      count: "3000 товаров",
      img: polotenecsushitel,
    },
    { title: "Ванны", count: "3000 товаров", img: vanna },
  ];
  return (
    <div className="category">
      {category.map((item) => {
        return (
          <div className="category_card">
            <h1 className="category_card_title">{item.title}</h1>
            <p className="category_card_count">{item.count}</p>
            <img className="category_card_img" src={item.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCard;
