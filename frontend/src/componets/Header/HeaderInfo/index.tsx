import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./HeaderInfo.module.scss";

const linkInfo = [
  { title: "Акции", link: "*" },
  { title: "Как заказать", link: "*" },
  { title: "О компании", link: "/company" },
  { title: "Доставка и Оплата", link: "*" },
  { title: "Гарантии", link: "*" },
  { title: "Контакты", link: "*" },
];

export function HeaderInfo() {
  const [activeLink, setActiveLink] = React.useState(0);
  return (
    <div className={styles.header__info}>
      <div className="container">
        <nav className={styles.header__info_items}>
          <div className={styles.header__info_item}>
            <button>
              <HandySvg src="/img/city.svg" />
              <p>Нижний Новгород</p>
            </button>
          </div>
          <div className={styles.header__info_item}>
            <ul>
              {linkInfo.map((item, index) => {
                return (
                  <li key={item.title}>
                    <Link
                      onClick={() => setActiveLink(index)}
                      className={activeLink === index ? styles.link_active : ""}
                      to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.header__info_item}>
            <a href="tel:8800 550-22-16">
              <HandySvg src="/img/clock2.svg" />
              <p>8800 550-22-16</p>
            </a>
            <button>Заказать звонок</button>
          </div>
        </nav>
      </div>
    </div>
  );
}
