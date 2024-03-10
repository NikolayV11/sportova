import React from "react";
import { SortBlock } from "../index";
import styles from "./FilterSort.module.scss";
import { typeSort } from "../../Type";
const sort: typeSort[] = [
  {
    title: "Популярности",
    type: "popularity",
    value: [
      { title: "Популярности (DESC)", params: "desc" },
      { title: "Популярности (ASC)", params: "asc" },
    ],
  },
  {
    title: "Новизне",
    type: "name",
    value: [
      { title: "По алфавиту (DESC)", params: "desc" },
      { title: "По алфавиту (ASC)", params: "asc" },
    ],
  },
  {
    title: "Цене",
    type: "price",
    value: [
      { title: "По цене (DESC)", params: "desc" },
      { title: "По цене (ASC)", params: "asc" },
    ],
  },
  {
    title: "Размеру скидки",
    type: "discounts",
    value: [
      { title: "По скидки (DESC)", params: "" },
      { title: "По скидки (ASC)", params: "" },
    ],
  },
];

export function FilterSort() {
  const [activeType, setActiveType] = React.useState("popularity");
  return (
    <div className={styles.filter_sort}>
      <p className={styles.filter_sort__title}>Сортировать по:</p>
      <div className={styles.filter_sort__block}>
        {sort.map((item, index) => {
          return (
            <SortBlock
              activeType={activeType}
              setActiveType={setActiveType}
              key={index}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}
