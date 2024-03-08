import React from "react";
import styles from "./FilterSale.module.scss";

export function FilterSale() {
  const [switchActive, setSwitchActive] = React.useState(false);
  return (
    <div
      onClick={() => {
        // console.log(switchActive);
        setSwitchActive(!switchActive);
      }}
      className={styles.sale_bloc}>
      <h4 style={{ margin: "0px" }} className="filterTitle">
        Распродажа
      </h4>
      <div className={`${styles.sale_bloc_switch}`}>
        <div
          className={`${styles.sale_bloc_switch_block} ${
            switchActive ? styles.sale_bloc_switch_active : ""
          }`}></div>
      </div>
    </div>
  );
}
