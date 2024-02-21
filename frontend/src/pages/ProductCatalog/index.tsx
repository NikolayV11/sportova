import React from "react";
import { Link, useParams } from "react-router-dom";

import {
  FilterAge,
  FilterPrice,
  FilterSale,
  FilterColor,
  FilterLoad,
  FilterSort,
} from "../../componets/index";

import styles from "./ProductCatalog.module.scss";

export function ProductCatalog() {
  const [heightCard, setHeightCard] = React.useState(null);
  const [heightImg, setHeightImg] = React.useState(null);
  const path = useParams();

  React.useEffect(() => {
    function heightElment() {
      if (path.path === "swedish_walls") {
        setHeightCard(520);
        setHeightImg(320);
        return;
      } else {
        setHeightCard(396);
        setHeightImg(240);
        return;
      }
    }
    window.scrollTo(0, 0);
    console.log(path);
    console.log(heightCard, heightImg);
    return heightElment();
  });
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
            <div className={styles.catalog__product_filter__price}>
              <FilterPrice />
            </div>
            <div className={styles.catalog__product_filter__sale}>
              <FilterSale />
            </div>
            <div className={styles.catalog__product_filter__color}>
              <FilterColor />
            </div>
            <div className={styles.catalog__product_filter__load}>
              <FilterLoad />
            </div>
          </div>
          <div className={styles.catalog__product__card}>
            <div className={styles.catalog__product__card_sort}>
              <FilterSort />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
