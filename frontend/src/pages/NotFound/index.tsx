import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
export function NotFound() {
  return (
    <div className={styles.block}>
      <div className="container">
        <div className={styles.block__item}>
          <div className={styles.block__item__info}>
            <h1>Данная страница не найдена</h1>
          </div>
          <div className={styles.block__item__link}>
            <Link to="/">Перейти на главную</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
