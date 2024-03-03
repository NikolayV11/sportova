import React from "react";

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
      </div>
    </div>
  );
}