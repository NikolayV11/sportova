import React from "react";
import { Link } from "react-router-dom";
import { typeCategoryMap } from "../../Type";

import styles from "./CategoryMap.module.scss";
export function CategoryMap({ link, img, title }: typeCategoryMap) {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.card__link}>
        <img src={img} alt="img category" className={styles.card__link_img} />
        <h2 className={styles.card__link_title}>{title}</h2>
      </Link>
    </div>
  );
}
