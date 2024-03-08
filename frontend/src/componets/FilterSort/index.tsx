import React from "react";
import { SortBlock } from "../index";
import styles from "./FilterSort.module.scss";
import { typeSort, typeValueSort } from "../../Type";
const sort: typeSort[] = [
  {
    title: "Популярности",
    value: [
      { title: "Популярности (DESC)", params: "" },
      { title: "Популярности (ASC)", params: "" },
    ],
  },
  {
    title: "Новизне",
    value: [
      { title: "По алфавиту (DESC)", params: "" },
      { title: "По алфавиту (ASC)", params: "" },
    ],
  },
  {
    title: "Цене",
    value: [
      { title: "По цене (DESC)", params: "" },
      { title: "По цене (ASC)", params: "" },
    ],
  },
  {
    title: "Размеру скидки",
    value: [
      { title: "По скидки (DESC)", params: "" },
      { title: "По скидки (ASC)", params: "" },
    ],
  },
];

export function FilterSort() {
  return (
    <div className={styles.filter_sort}>
      <p className={styles.filter_sort__title}>Сортировать по:</p>
      <div className={styles.filter_sort__block}>
        {sort.map((item, index) => {
          return <SortBlock key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
