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
import { fetchCatalog } from "../../redux/filtration";
import { useAppDispatch } from "../../redux/store";

export function ProductCatalog() {
  const dispatch = useAppDispatch();
  const [titlePage, setTitlePage] = React.useState("");
  const [heightCard, setHeightCard] = React.useState(null);
  const [heightImg, setHeightImg] = React.useState(null);
  const path = useParams();
  function loadingPage(pathPage: any) {
    const title: any = {
      swedish_walls: "Щведские стенки",
      horizontal_bars: "Турники",
      street_equipment: "Уличные комплексы",
      weightlifting: "Тяжелая атлетика",
      barbell_stands: "Стойки под штангу",
      martial_arts: "Единоборства",
      fitness: "Фитнес",
      tubings: "Тубинги",
      trampolines: "Батуты",
      swimming_pools: "Бассейны",
      backpacks_and_bags: "Рюкзаки и сумки",
      christmas_trees: "Новогодние ёлки",
      kids_toys: "Детские игрушки",
      scooters: "Самокаты",
      bicycles: "Велосипеды",
    };

    if (title.hasOwnProperty(pathPage)) {
      setTitlePage(title[`${pathPage}`]);
    } else {
      console.log(pathPage);
      window.location.pathname = "*";
    }
  }

  React.useEffect(() => {
    dispatch(fetchCatalog());
    loadingPage(path.path);
    window.scrollTo(0, 0);
  }, []);

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
        <div className={styles.catalog__path}>
          <Link to="/">Главная</Link>
          <span>/</span> <Link to="/category">Каталог</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
