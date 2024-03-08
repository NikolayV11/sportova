import React from "react";
import styles from "./FilterSale.module.scss";
import { useSelector } from "react-redux";
import { parametersFilters, paramsFilterSale } from "../../redux/FilterParams";
import { useAppDispatch } from "../../redux/store";

export function FilterSale() {
  const dispatch = useAppDispatch();
  const { sale } = useSelector(parametersFilters);
  return (
    <div
      onClick={() => {
        dispatch(paramsFilterSale(!sale));
      }}
      className={styles.sale_bloc}>
      <h4 style={{ margin: "0px" }} className="filterTitle">
        Распродажа
      </h4>
      <div className={`${styles.sale_bloc_switch}`}>
        <div
          className={`${styles.sale_bloc_switch_block} ${
            sale ? styles.sale_bloc_switch_active : ""
          }`}></div>
      </div>
    </div>
  );
}
