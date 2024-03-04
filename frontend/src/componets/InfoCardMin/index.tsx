import React from "react";
import styles from "./InfoCardMin.module.scss";
import { ChoiceOfColors } from "../index";
import { HandySvg } from "handy-svg";

export function InfoCardMin() {
  const tableInfo = [
    { title: "Комплектация:", info: "Шведская стенка, ступени, турник (три хвата), брусья+пресс" },
    { title: "Гарантия:", info: "2 года" },
    { title: "Артикул:", info: "НФ-00000612" },
  ];
  return (
    <div className={styles.card_info}>
      <p>
        Надежная шведская стенка P-4 подойдет как детям от 3 лет так и взрослым. Предназначена для
        установки в квартиру или на дачу под навесом. Выдерживает перепады температур и влажности.
        <a href="#description"> Перейти к описанию.</a>
      </p>
      <div className={styles.card_info_table}>
        <table>
          {tableInfo.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.title}</th>
                <th>{item.info}</th>
              </tr>
            );
          })}
        </table>
        <a href="#characteristics">Все характеристики</a>
      </div>
      <div className={styles.card_info_price}>
        <p>14990 ₽</p>
        <p>26700 ₽</p>
      </div>
      <div className={styles.card_info_color}>
        <ChoiceOfColors />
      </div>
      <div className={styles.card_info__order}>
        <button className={styles.card_info__order_add_basket}>
          <div className={styles.card_info__order_add_basket__ico}>
            <HandySvg
              className={styles.card_info__order_add_basket__ico_cart}
              src="/img/card_btn_cart.svg"
            />
            <HandySvg
              className={`${styles.card_info__order_add_basket__ico_status} SVGstatus`}
              src="/img/add_hover.svg"
            />
          </div>
          <p>Добавить в корзину</p>
        </button>
        <button className={styles.card_info__order_quick_order}>
          <p>Быстрый заказ</p>
        </button>
      </div>
      <div className={styles.card_info__delivery}>
        <HandySvg src="/img/delivery.svg" />
        <p>Доставка в любую точку России!</p>
      </div>
    </div>
  );
}
