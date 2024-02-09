import React from "react";
import { Link } from "react-router-dom";

import styles from "./AboutCompany.module.scss";

import { typeCardServicesMin } from "../../Type";
import { ComponentSwaiper } from "../index";
const infoBlock: string[] = [
  "Узкая специализация. Мы знаем больше нюансов и потребностей клиента, чем магазины, которые продают все подряд. Соответственно, сможем лучше проконсультировать и подобрать необходимый Вам комплекс;",
  "90% ассортимента держим в наличии на складе в Нижнем Новгороде и Москве;",
  "Выставочный зал, где все оборудование надежно закреплено. Вы можете протестировать комплексы еще до покупки;",
  "Если Вам необходима сборка шведской стенки, детской площадки или турника – мы предоставляем такую услугу. В компании работают опытные и аккуратные специалисты. Также мы оказываем услугу по укорачиванию шведской стенки;",
  "Если товар не подошел, Вы можете его обменять или вернуть в течение расширенного срока в 30 дней;",
];
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
            <div className={styles.about_company__about_services_wide_info}>
              <ul>
                {infoBlock.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
