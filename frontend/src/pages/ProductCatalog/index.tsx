import React from "react";
import { Link, useParams } from "react-router-dom";

import {
  FilterAge,
  FilterPrice,
  FilterSale,
  FilterColor,
  FilterLoad,
  FilterSort,
  Product,
} from "../../componets/index";

import styles from "./ProductCatalog.module.scss";
import { titleCategory } from "../titleCategory";

export function ProductCatalog() {
  const [titlePage, setTitlePage] = React.useState("");
  const [heightCard, setHeightCard] = React.useState(null);
  const [heightImg, setHeightImg] = React.useState(null);
  const path = useParams();
  function loadingPage(pathPage: any) {
    if (titleCategory.hasOwnProperty(pathPage)) {
      setTitlePage(titleCategory[`${pathPage}`]);
    } else {
      console.log(pathPage);
      window.location.pathname = "*";
    }
  }

  React.useEffect(() => {
    const pathPage = path.path;
    loadingPage(pathPage);
    window.scrollTo(0, 0);
  }, [path]);

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

    heightElment();
  });
  return (
    <div className={styles.catalog}>
      <div className="container">
        <div className="linkCategory">
          <Link to="/">Главная</Link>
          <span>/</span> <Link to="/category">Каталог</Link>
          <span>/</span>
          <h3>{titlePage}</h3>
        </div>
        <h2>{titlePage}</h2>
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
            <div className={styles.catalog__product__card_product}>
              <Product path={path.path} heightImg={heightImg} heightCard={heightCard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
