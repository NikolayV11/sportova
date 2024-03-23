import React from "react";

import { ExpandText } from "../index";

import styles from "./CartMap.module.scss";

export function CartMap() {
  const [quantity, setQuantity] = React.useState(0);

  const num1 = 14990;
  const num2 = 26700;

  const description =
    "Шведская стенка Классик, Турник PRO, Брусья+Пресс, Упор под штангу, Скамья приставная";

  function getSumFormat(number: number) {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(number);
  }
  function onClickReduce() {
    if (quantity > 0) {
      setQuantity((quantity) => (quantity -= 1));
    }
  }

  function onClickAdd() {
    setQuantity((quantity) => (quantity += 1));
  }
  return (
    <div className={styles.block}>
      <div style={{ backgroundImage: "url(/img/wall_2.jpeg)" }} className={styles.block__img}></div>
      <div className={styles.block__info}>
        <div className={styles.block__info_description}>
          <h3>Шведская стенка P-4 (Цвет: Серебро)</h3>
          <ExpandText
            text={description + description}
            maxSymbolText={25}
            classP={styles.block__info_description_text}
          />
        </div>
        <div className={styles.block__info_buy}>
          <div className={styles.block__info_buy_article}>
            <p>Артикул:</p>
            <p>НФ-00000612</p>
          </div>
          <div className={styles.block__info_buy__items}>
            <div className={styles.block__info_buy__items_quantity}>
              <p>Кол-во:</p>
              <div className={styles.block__info_buy__items_quantity_block}>
                <button
                  onClick={onClickReduce}
                  className={styles.block__info_buy__items_quantity_block_reduce}>
                  <span>-</span>
                </button>
                <p>{quantity}</p>
                <button
                  onClick={onClickAdd}
                  className={styles.block__info_buy__items_quantity_block_add}>
                  <span>+</span>
                </button>
              </div>
            </div>
            <div className={styles.block__info_buy__items_price}>
              <p>Цена:</p>
              <div className={styles.block__info_buy__items_price__block}>
                <p className={styles.block__info_buy__items_price__block_price}>
                  {getSumFormat(num1)}
                </p>
                <p className={styles.block__info_buy__items_price__block_discount}>
                  {getSumFormat(num2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
