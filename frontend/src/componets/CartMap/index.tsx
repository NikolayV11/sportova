import React from "react";

import styles from "./CartMap.module.scss";

export function CartMap() {
  const [quantity, setQuantity] = React.useState(0);
  const num1 = 14990;
  const num2 = 26700;
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
      <div className={styles.block__img}>
        <img src="/img/wall_2.jpeg" alt="" />
      </div>
      <div className={styles.block__info}>
        <div className={styles.block__info_description}>
          <h3>Шведская стенка P-4 (Цвет: Серебро)</h3>
          <p>
            Шведская стенка Классик, Турник PRO, Брусья+Пресс, Упор под штангу, Скамья приставная
          </p>
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
                  {num1.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")} ₽
                </p>
                <p className={styles.block__info_buy__items_price__block_discount}>
                  {num2.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")} ₽
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
