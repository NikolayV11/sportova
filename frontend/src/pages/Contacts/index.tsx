import React from "react";
import { Link } from "react-router-dom";

import styles from "./Contacts.module.scss";

export function Contacts() {
  return (
    <div className={styles.block}>
      <div className="container">
        <div className={styles.block__path}>
          <Link to="/">Главная</Link>
          <span>/</span> <p>Контакты</p>
        </div>
        <h1 className="titlePages">Контакты</h1>
      </div>
    </div>
  );
}
