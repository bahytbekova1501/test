import React from "react";
import CategoryCard from "../components/Category/CategoryCard";
import "./HomePage.css";
import ProductImg from "../img/img/ProductImg.svg";
import ProductCard from "../components/Product/ProductCard";
import Carousel from "../components/Carousel/Carousel";
import NewsCard from "../components/News/NewsCard";
import AdressCard from "../components/Adress/AdressCard";
const product = [
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1299",
    newPrice: "999",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1500",
    newPrice: "900",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "890",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1600",
    newPrice: "550",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1300",
    newPrice: "400",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "224",
    newPrice: "50",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1999",
    newPrice: "330",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "890",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "500",
    newPrice: "250",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "2900",
    newPrice: "1000",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "3500",
    newPrice: "2000",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1000",
    newPrice: "400",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "340",
    newPrice: "100",
    availability: "В наличии",
    set: "Комплект",
    isPromo: true,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
  {
    img: ProductImg,
    title: "Держатель для лейки BOOU PG605 ",
    price: "1294",
    newPrice: "500",
    availability: "В наличии",
    set: "Комплект",
    isPromo: false,
  },
];
const promoProducts = product.filter((prod) => prod.isPromo);
const regularProducts = product.filter((prod) => !prod.isPromo);
function HomePage() {
  return (
    <div
      className="home_page"
      style={{ padding: "0 7vw", backgroundColor: " #fafafa" }}
    >
      <div className="category_block">
        <h3>Категории</h3>
        <CategoryCard />
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Xиты продаж</h3>
          <button>перейти в каталог</button>
        </div>
        <ProductCard products={regularProducts} />
      </div>
      <div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Новости</h3>
          <button>все</button>
        </div>
        <NewsCard />
      </div>
      <div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Акционные товары</h3>
          <button>перейти в каталог</button>
        </div>
        <ProductCard products={promoProducts} />
      </div>
      <div style={{ paddingBottom: "6vh" }}>
        <h3>Адреса магазинов </h3>
        <AdressCard />
      </div>
    </div>
  );
}

export default HomePage;
