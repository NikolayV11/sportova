import React from "react";

import {
  ProductGallery,
  InfoCardMin,
  CharacteristicsCard,
  Description,
} from "../../componets/index";

import styles from "./CardProduct.module.scss";
import { Link, useParams } from "react-router-dom";
import { titleCategory } from "../titleCategory";

export function CardProduct() {
  const [titlePage, setTitlePath] = React.useState("");
  const path = useParams();

  React.useEffect(() => {
    setTitlePath(titleCategory[`${path.path}`]);
  }, [path]);
  return (
    <div className={styles.product}>
      <div className="container">
        <div className="linkCategory">
          <Link to="/">Главная</Link>
          <span>/</span>
          <Link to="/category">Каталог</Link>
          <span>/</span>
          <Link to={`/category/${path.path}`}>{titlePage}</Link>
          <span>/</span>
          <h3>title</h3>
        </div>
        <div>
          <h2 className="titleCardProduct">title</h2>
        </div>
        <div className={styles.product_block}>
          <div className={styles.product_block_info_card}>
            <ProductGallery />
            <CharacteristicsCard />
            <Description />
          </div>
          <InfoCardMin />
        </div>
      </div>
    </div>
  );
}
