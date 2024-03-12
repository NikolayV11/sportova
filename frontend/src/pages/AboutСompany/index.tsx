import React from "react";

import styles from "./AboutСompany.module.scss";
import { SlideCompany } from "../../componets";
import { Link } from "react-router-dom";

const infoBlock = [
  "Узкая специализация. Мы знаем больше нюансов и потребностей клиента, чем магазины, которые продают все подряд. Соответственно, сможем лучше проконсультировать и подобрать необходимый Вам комплекс;",
  "90% ассортимента держим в наличии на складе в Нижнем Новгороде и Москве;",
  "Выставочный зал, где все оборудование надежно закреплено. Вы можете протестировать комплексы еще до покупки;",
  "Если Вам необходима сборка шведской стенки, детской площадки или турника – мы предоставляем такую услугу. В компании работают опытные и аккуратные специалисты. Также мы оказываем услугу по укорачиванию шведской стенки;",
  "Отправки в регионы РФ производим каждый день. Для большинства городов действует оплата при получении;",
  "Если товар не подошел, Вы можете его обменять или вернуть в течение расширенного срока в 30 дней;",
];

export function AboutСompany() {
  return (
    <div className={`pageBackground ${styles.block}`}>
      <div className="container">
        <div className={` ${styles.block_page}`}>
          <div className={`${styles.block_page__link} linkCategory`}>
            <Link to="/">Главная</Link>
            <span>/</span>
            <h3>О компании СПОРТОВА</h3>
          </div>
          <div
            style={{ backgroundImage: "url(/img/constructor_2.jpeg)" }}
            className={`${styles.block_page__info} `}>
            <h2>Добро пожаловать в компанию СПОРТОВА!</h2>
            <p>
              Компания «Sportova» специализируется на продаже шведских стенок, детских площадок и
              тренажеров. Мы являемся официальными дилерами ведущих производителей шведских стенок и
              детских площадок.
            </p>
          </div>
          <SlideCompany />
          <div className={styles.block_page__company}>
            <div className={styles.block_page__company_info}>
              <h2>
                Коротко о <span>Sportova</span>
              </h2>
              <ul>
                {infoBlock.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.block_page__company_privilege}>
              <div className={styles.block_page__company_privilege_item}>
                <p>90% ассортимента держим в наличии на складе в Нижнем Новгороде и Москве</p>
              </div>
              <div className={styles.block_page__company_privilege_item}>
                <p>Возможность вернуть или обменять товар в течение 30 дней после оплаты.</p>
              </div>
            </div>
            <div className={styles.block_page__company_contact}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
