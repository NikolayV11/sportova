import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import { Search } from "../../index";
import styles from "./HeaderSearch.module.scss";

const navBtn = [
  { urlSVG: "/img/favorite.svg", link: "*" },
  { urlSVG: "/img/comparison.svg", link: "*" },
];

export function HeaderSearch() {
  return (
    <div className={styles.header__search}>
      <div className="container">
        <div className={styles.header__search_items}>
          <div className={styles.header__search_items_item}>
            <Link className={styles.header__search_items_item_link} to="/">
              <HandySvg
                className={styles.header__search_items_item_link_logo}
                src="./img/sportova_logo.svg"
              />
            </Link>
          </div>
          <div className={styles.header__search_items_search}>
            <Search />
            {navBtn.map((item, index) => {
              return (
                <button key={index} className={`${styles.header__search_items_search_btn} border`}>
                  <Link to={item.link}>
                    <HandySvg src={item.urlSVG} />
                  </Link>
                </button>
              );
            })}
            <button className={`${styles.header__search_items_search_btn_cart} border`}>
              <Link to="/cart">
                <HandySvg src="/img/cart.svg" />
                <div className={styles.box_info}>
                  <p className={styles.box_info_title}>Корзина (0)</p>
                  <p className={styles.box_info_state}>Нет товаров</p>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
