import React from "react";
import { Link } from "react-router-dom";
import styles from "./Catalog.module.scss";
import { CategoryMap, DeliveryPay } from "../../componets";
import { typeCategoryMap } from "../../Type";

const category: typeCategoryMap[] = [
  {
    title: "Щведские стенки",
    img: "/img/CategoryMap/CategoryMap_1.png",
    link: "/category/swedish_walls",
  },
  {
    title: "Турники",
    img: "/img/CategoryMap/CategoryMap_2.png",
    link: "/category/horizontal_bars",
  },
  {
    title: "Уличные комплексы",
    img: "/img/CategoryMap/CategoryMap_3.png",
    link: "/category/street_equipment",
  },
  {
    title: "Тяжелая атлетика",
    img: "/img/CategoryMap/CategoryMap_4.png",
    link: "/category/weightlifting",
  },
  {
    title: "Стойки под штангу",
    img: "/img/CategoryMap/CategoryMap_5.png",
    link: "/category/barbell_stands",
  },
  {
    title: "Единоборства",
    img: "/img/CategoryMap/CategoryMap_6.png",
    link: "/category/martial_arts",
  },
  { title: "Фитнес", img: "/img/CategoryMap/CategoryMap_7.png", link: "/category/fitness" },
  { title: "Тубинги", img: "/img/CategoryMap/CategoryMap_8.png", link: "/category/tubings" },
  { title: "Батуты", img: "/img/CategoryMap/CategoryMap_9.png", link: "/category/trampolines" },
  {
    title: "Бассейны",
    img: "/img/CategoryMap/CategoryMap_10.png",
    link: "/category/swimming_pools",
  },
  {
    title: "Рюкзаки и сумки",
    img: "/img/CategoryMap/CategoryMap_11.png",
    link: "/category/backpacks_and_bags",
  },
  {
    title: "Новогодние ёлки",
    img: "/img/CategoryMap/CategoryMap_12.png",
    link: "/category/christmas_trees",
  },
  {
    title: "Детские игрушки",
    img: "/img/CategoryMap/CategoryMap_13.png",
    link: "/category/kids_toys",
  },
  { title: "Самокаты", img: "/img/CategoryMap/CategoryMap_14.png", link: "/category/scooters" },
  { title: "Велосипеды", img: "/img/CategoryMap/CategoryMap_15.png", link: "/category/bicycles" },
];
export function Category() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles.catalog}>
      <div className="container">
        <div className={styles.catalog__path}>
          <Link to="/">Главная</Link>
          <span>/</span> <p>Каталог</p>
        </div>
        <h1>Каталог товаров</h1>
        <div className={styles.catalog__list}>
          <div
            style={{ backgroundImage: "url(/img/constructor.png)" }}
            className={styles.catalog__list_constructor}>
            <h2>Соберите шведскую стенку по своему желанию!</h2>
            <Link to="*">
              <span>Перейти в конструктор</span>
            </Link>
          </div>
          {category.map((item, index) => (
            <CategoryMap {...item} key={index} />
          ))}
        </div>
        <DeliveryPay />
      </div>
    </div>
  );
}
