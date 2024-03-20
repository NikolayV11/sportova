import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import { CartMap } from "../../componets";

import styles from "./Cart.module.scss";
export function Cart() {
  return (
    <div className={`${styles.cart} pageBackground`}>
      <div className="container">
        <div className={styles.cart_info}>
          <div className={styles.cart_info__path}>
            <Link to="/">Главная</Link>
            <span>/</span> <p>карзина</p>
          </div>
          <h1>Карзина пуста</h1>
          <div className={styles.cart_info__items}>
            <div className={styles.cart_info__items_list}>
              <CartMap />
            </div>
            <div className={styles.cart_info__items_order}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
