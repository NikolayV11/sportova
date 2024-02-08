import React from "react";
import { Link } from "react-router-dom";

import styles from "./AboutCompany.module.scss";

import { typeCardServicesMin } from "../../Type";
import { ComponentSwaiper } from "../index";

const cardServicesMin: typeCardServicesMin[] = [
  { title: "Выставочный зал на 450 кв.м", imgUrl: "/img/cardServices_1.png", link: "/*" },
  { title: "90% товара в наличии на складе", imgUrl: "/img/cardServices_2.png", link: "/*" },
  { title: "Монтаж \n опытными \n специалистами", imgUrl: "/img/cardServices_3.png", link: "/*" },
  {
    title: "Отправляем в регионы с оплатой при получении",
    imgUrl: "/img/cardServices_4.png",
    link: "/*",
  },
];

export function AboutCompany() {
  return (
    <div className="container">
      <div className={styles.about_company}>
        <h2 className="title-section">О компании</h2>
        <div className={styles.about_company__info}>
          <p>
            Компания «Sportova» специализируется на продаже шведских стенок, детских площадок и
            тренажеров. Мы являемся официальными дилерами ведущих производителей шведских стенок и
            детских площадок.
          </p>
          <Link to="/*">Подробнее</Link>
        </div>
        <div className={styles.about_company__about_services}>
          <div className={styles.about_company__about_services_min}>
            {cardServicesMin.map((item, index) => {
              return (
                <div key={index} className={styles.about_company__about_services_min_item}>
                  <Link to={item.link}>
                    <img src={item.imgUrl} alt="img card" />
                    <p>{item.title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={styles.about_company__about_services_wide}>
            <div className={styles.about_company__about_services_wide_swiper}>
              <ComponentSwaiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
