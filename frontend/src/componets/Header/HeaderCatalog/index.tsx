import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./HeaderCatalog.module.scss";

export function HeaderCatalog() {
  return (
    <div className={styles.catalog}>
      <button className={styles.catalog__nav_btn}>
        <HandySvg src="/img/menu.svg" />
        <p>Каталог товаров</p> <HandySvg src="/img/staticCategory.svg" />
      </button>
      <nav className={styles.catalog__nav__block}></nav>
    </div>
  );
}
