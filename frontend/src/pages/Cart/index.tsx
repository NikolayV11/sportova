import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./Cart.module.scss";
export function Cart() {
  return (
    <div className={styles.cart}>
      <div className="container">
        <div className={styles.cart_info}>
          <h1>Карзина пуста</h1>
        </div>
      </div>
    </div>
  );
}
