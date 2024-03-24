import React from "react";
import { Link } from "react-router-dom";

import { PromoCode } from "../index";
import styles from "./OrderPrice.module.scss";

export function OrderPrice() {
  return (
    <div className={styles.order}>
      <div className={styles.order__container}>
        <h4>Ваши заказы</h4>
        <div className={styles.order__container__price}>
          <ul className={styles.order__container__price_goods}>
            <li>Товары (2)</li>
            <li>31 190 ₽</li>
          </ul>
          <ul className={styles.order__container__price_discount}>
            <li>Ваша скидка</li>
            <li>-11 710 ₽</li>
          </ul>
          <ul className={styles.order__container__price_present}>
            <li>Подарок (доставка)</li>
            <li>0 ₽</li>
          </ul>
          <PromoCode />
        </div>
        <div className={styles.order__container__total_price}>
          <ul className={styles.order__container__total_price_price}>
            <li>Цена итого:</li>
            <li>19 480 ₽</li>
          </ul>
          <Link to="/*">Перейти к оформлению</Link>

          <p>Способы оплаты и время доставки можно выбрать при оформлении заказа</p>
        </div>
      </div>
    </div>
  );
}
