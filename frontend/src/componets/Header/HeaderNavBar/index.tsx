import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./HeaderNavBar.module.scss";
import { HeaderCatalog } from "../../index";

const navHeader = [
  { title: "Шведские стенки", link: "/*" },
  { title: "Уличные комплексы", link: "/*" },
  { title: "Турники", link: "/*" },
  { title: "Тяжелая атлетика", link: "/*" },
];

export function HeaderNavBar() {
  return (
    <div className={styles.header__nav}>
      <div className="container">
        <nav className={styles.header__nav_items}>
          <div className={styles.header__nav_items_catalog}>
            <HeaderCatalog />
          </div>
          <div className={styles.header__nav_items_catalogNav}>
            <ul>
              {navHeader.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.header__nav_items_sale}>
            <Link to="/*">
              <HandySvg src="/img/sale.svg" />
              Товары со скидкой
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
