import React from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.scss";

import { Constructor, CardHome } from "../index";
import { selectProductData } from "../../redux/filtration";

export function Product({ heightCard, heightImg, path }: any) {
  const { items } = useSelector(selectProductData);
  console.log(items, "f1");
  return (
    <div className={styles.product}>
      <Constructor />
      {items.map((item: any, index: number) => {
        return (
          <CardHome
            {...item}
            link={`${path}/${item.id}`}
            heightImg={heightImg}
            heightCard={heightCard}
          />
        );
      })}
    </div>
  );
}
