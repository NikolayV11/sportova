import React from "react";
import styles from "./FilterPrice.module.scss";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import "./style.css";
import { useSelector } from "react-redux";
import {
  parametersFilters,
  paramsFilterPriceMin,
  paramsFilterPriceMax,
} from "../../redux/FilterParams";
import { useAppDispatch } from "../../redux/store";
export function FilterPrice() {
  const { filterPrice } = useSelector(parametersFilters);
  const dispatch = useAppDispatch();

  function paramsValue(value: number, index: number) {
    const setValue = [paramsFilterPriceMin, paramsFilterPriceMax];
    dispatch(setValue[index](value));
  }
  React.useEffect(() => {}, [filterPrice]);

  return (
    <div className={`${styles.block_price}`}>
      <h3 className="filterTitle">Цена</h3>
      <div className={styles.block_price_swipe}>
        <Nouislider
          onUpdate={(values, handle) => {
            paramsValue(Math.floor(values[handle]), handle);
          }}
          className={`${styles.block_price_input} inputPrice`}
          range={{ min: [0], max: [99999] }}
          step={1}
          start={[filterPrice.Min, filterPrice.Max]}
          connect={true}
        />
      </div>
      <div className={styles.block_price__input}>
        <div className={styles.block_price__input_min}>
          <input
            value={filterPrice.Min}
            onChange={(e) => paramsValue(+e.target.value, 0)}
            type="text"
          />
        </div>
        <div className={styles.block_price__input_max}>
          <input
            value={filterPrice.Max}
            onChange={(e) => paramsValue(+e.target.value, 1)}
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
