import React from "react";
import { Link } from "react-router-dom";
import styles from "./Catalog.module.scss";
import { CategoryMap, DeliveryPay } from "../../componets";
import { typeCategoryMap } from "../../Type";

const category: typeCategoryMap[] = [
  { title: "Щведские стенки", img: "/img/CategoryMap/CategoryMap_1.png", link: "/*" },
  { title: "Турники", img: "/img/CategoryMap/CategoryMap_2.png", link: "/*" },
  { title: "Уличные комплексы", img: "/img/CategoryMap/CategoryMap_3.png", link: "/*" },
  { title: "Тяжелая атлетика", img: "/img/CategoryMap/CategoryMap_4.png", link: "/*" },
  { title: "Стойки под штангу", img: "/img/CategoryMap/CategoryMap_5.png", link: "/*" },
  { title: "Единоборства", img: "/img/CategoryMap/CategoryMap_6.png", link: "/*" },
  { title: "Фитнес", img: "/img/CategoryMap/CategoryMap_7.png", link: "/*" },
  { title: "Тубинги", img: "/img/CategoryMap/CategoryMap_8.png", link: "/*" },
  { title: "Батуты", img: "/img/CategoryMap/CategoryMap_9.png", link: "/*" },
  { title: "Бассейны", img: "/img/CategoryMap/CategoryMap_10.png", link: "/*" },
  { title: "Рюкзаки и сумки", img: "/img/CategoryMap/CategoryMap_11.png", link: "/*" },
  { title: "Новогодние ёлки", img: "/img/CategoryMap/CategoryMap_12.png", link: "/*" },
  { title: "Детские игрушки", img: "/img/CategoryMap/CategoryMap_13.png", link: "/*" },
  { title: "Самокаты", img: "/img/CategoryMap/CategoryMap_14.png", link: "/*" },
  { title: "Велосипеды", img: "/img/CategoryMap/CategoryMap_15.png", link: "/*" },
];
export function Catalog() {
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
