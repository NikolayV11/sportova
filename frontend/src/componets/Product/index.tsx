import React from "react";

import styles from "./Product.module.scss";

import { Constructor } from "../index";

export function Product() {
  return (
    <div className={styles.product}>
      <Constructor />
    </div>
  );
}
