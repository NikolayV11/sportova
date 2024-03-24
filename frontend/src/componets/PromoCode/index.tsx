import React from "react";

import styles from "./PromoCode.module.scss";
import { HandySvg } from "handy-svg";
export function PromoCode() {
  const [value, setValue] = React.useState<React.HTMLInputTypeAttribute>("");

  function onClose() {
    setValue("");
  }

  return (
    <div className={styles.promo_code}>
      <div className={styles.promo_code_input}>
        <input
          value={value}
          onChange={(event) => {
            console.log(event.target.value);
            setValue(event.target.value);
          }}
          type="text"
          name=""
          id=""
          placeholder="Промо-код"
        />
        {value.length > 0 && (
          <button className={styles.promo_code_input_close} onClick={onClose}>
            <HandySvg className={styles.promo_code_input_close_closeSVG} src="/img/close.svg" />
          </button>
        )}
      </div>

      <button className={styles.promo_code__btn}>Применить</button>
    </div>
  );
}
