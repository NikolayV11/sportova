import React from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.scss";

import { Constructor, CardHome } from "../index";
import { selectProductData } from "../../redux/filtration";
import { useParams } from "react-router-dom";

export function Product({ heightCard, heightImg, path }: any) {
  const { items } = useSelector(selectProductData);
  return (
    <div className={`${items.length > 0 ? styles.product : styles.product_one}`}>
      <Constructor
        classBlock={`${items.length > 0 ? styles.product_list : styles.product_one_list}`}
      />
      {items.map((item: any, index: number) => {
        return (
          <CardHome {...item} link={`${item.id}`} heightImg={heightImg} heightCard={heightCard} />
        );
      })}
    </div>
  );
}
