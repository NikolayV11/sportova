import React from "react";
import styles from "./InfoCardMin.module.scss";
import { ChoiceOfColors } from "../index";

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
        <a> Перейти к описанию.</a>
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
        <a>Все характеристики</a>
      </div>
      <div className={styles.card_info_price}>
        <p>14990 ₽</p>
        <p>26700 ₽</p>
      </div>
      <div className={styles.card_info_color}>
        <ChoiceOfColors />
      </div>
    </div>
  );
}
