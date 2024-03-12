import React from "react";

import styles from "./AboutСompany.module.scss";
import { Constructor } from "../../componets";
import { Link } from "react-router-dom";

export function AboutСompany() {
  return (
    <div className={`pageBackground ${styles.block}`}>
      <div className="container">
        <div className={` ${styles.block_page}`}>
          <div className={`${styles.block_page__link} linkCategory`}>
            <Link to="/">Главная</Link>
            <span>/</span>
            <h3>О компании СПОРТОВА</h3>
          </div>
          <div
            style={{ backgroundImage: "url(/img/constructor_2.jpeg)" }}
            className={`${styles.block_page__info} `}>
            <h2>Добро пожаловать в компанию СПОРТОВА!</h2>
            <p>
              Компания «Sportova» специализируется на продаже шведских стенок, детских площадок и
              тренажеров. Мы являемся официальными дилерами ведущих производителей шведских стенок и
              детских площадок.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
