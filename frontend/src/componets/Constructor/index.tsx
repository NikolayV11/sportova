import React from "react";
import { Link } from "react-router-dom";

import styles from "./Constructor.module.scss";

export function Constructor() {
  return (
    <div
      style={{ backgroundImage: "url(/img/constructor.png)" }}
      className={styles.constructor_block}>
      <h2>Соберите шведскую стенку по своему желанию!</h2>
      <Link to="*">
        <span>Перейти в конструктор</span>
      </Link>
    </div>
  );
}
