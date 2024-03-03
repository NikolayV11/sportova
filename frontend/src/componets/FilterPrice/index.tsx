import React from "react";
import styles from "./FilterPrice.module.scss";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import "./style.css";
export function FilterPrice() {
  const [minValue, setMinValue] = React.useState<any>(0);
  const [maxValue, setMaxValue] = React.useState<any>(9999);

  const [startMin, setStartMin] = React.useState<any>(0);
  const [startMax, setStartMax] = React.useState<any>(9999);

  const onChengeInputMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(minValue);
    // console.log(event.target.value);
    setMinValue(event.target.value);
    if (!Number.isNaN(event.target.value)) {
    }
  };
  const onChengeInputMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(event.target.value);
    if (!Number.isNaN(event.target.value)) {
    }
  };
  return (
    <div className={`${styles.block_price}`}>
      <h3 className="filterTitle">Цена</h3>
      <div className={styles.block_price_swipe}>
        <Nouislider
          onUpdate={(values) => {
            setMinValue(Math.floor(values[0]));
            setMaxValue(Math.floor(values[1]));
          }}
          className={`${styles.block_price_input} inputPrice`}
          range={{ min: [0], max: [9999] }}
          step={1}
          start={[minValue, maxValue]}
          connect={true}
        />
      </div>
      <div className={styles.block_price__input}>
        <div className={styles.block_price__input_min}>
          <input value={minValue} onChange={onChengeInputMin} type="text" />
        </div>
        <div className={styles.block_price__input_max}>
          <input value={maxValue} onChange={onChengeInputMax} type="text" />
        </div>
      </div>
    </div>
  );
}
