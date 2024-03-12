import React from "react";
import { SortBlock } from "../index";
import styles from "./FilterSort.module.scss";
import { typeSort, TypeParams, TypeValueParams } from "../../Type";
import { useAppDispatch } from "../../redux/store";
import { setSortParamsSlice } from "../../redux/SortParams";
const sort: typeSort[] = [
  {
    title: "Популярности",
    type: TypeParams.POPULARITY,
    value: [
      { title: "Популярности (DESC)", params: TypeValueParams.DESC },
      { title: "Популярности (ASC)", params: TypeValueParams.ASC },
    ],
  },
  {
    title: "Новизне",
    type: TypeParams.NAME,
    value: [
      { title: "По алфавиту (DESC)", params: TypeValueParams.DESC },
      { title: "По алфавиту (ASC)", params: TypeValueParams.ASC },
    ],
  },
  {
    title: "Цене",
    type: TypeParams.PRICE,
    value: [
      { title: "По цене (DESC)", params: TypeValueParams.DESC },
      { title: "По цене (ASC)", params: TypeValueParams.ASC },
    ],
  },
  {
    title: "Размеру скидки",
    type: TypeParams.DISCOUNTS,
    value: [
      { title: "По скидки (DESC)", params: TypeValueParams.DESC },
      { title: "По скидки (ASC)", params: TypeValueParams.ASC },
    ],
  },
];

export function FilterSort() {
  const [activeType, setActiveType] = React.useState<TypeParams>(TypeParams.POPULARITY);
  const [activeParams, setActiveParams] = React.useState<TypeValueParams>(TypeValueParams.DESC);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setSortParamsSlice({ params: activeParams, type: activeType }));
  }, [activeType, activeParams]);

  return (
    <div className={styles.filter_sort}>
      <p className={styles.filter_sort__title}>Сортировать по:</p>
      <div className={styles.filter_sort__block}>
        {sort.map((item, index) => {
          return (
            <SortBlock
              setActiveParams={setActiveParams}
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
