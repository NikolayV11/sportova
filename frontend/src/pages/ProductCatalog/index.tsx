import React from "react";
import { Link } from "react-router-dom";

import { FilterAge } from "../../componets/index";

import styles from "./ProductCatalog.module.scss";

export function ProductCatalog() {
  return (
    <div className={styles.catalog}>
      <div className="container">
        <div className={styles.catalog__path}>
          <Link to="/">Главная</Link>
          <span>/</span> <Link to="/category">Каталог</Link>
        </div>
        <h2>Шведские стенки</h2>
        <div className={styles.catalog__product}>
          <div className={styles.catalog__product_filter}>
            <div className={styles.catalog__product_filter__age}>
              <FilterAge />
            </div>
          </div>
          <div className={styles.catalog__product_card}></div>
        </div>
      </div>
    </div>
  );
}
