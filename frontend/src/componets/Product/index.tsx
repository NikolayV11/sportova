import React from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.scss";

import { Constructor, CardHome } from "../index";
import { fetchCatalog, selectProductData } from "../../redux/filtration";
import { parametersFilters } from "../../redux/FilterParams";
import { useAppDispatch } from "../../redux/store";

export function Product({
  heightCard,
  heightImg,
  path,
}: {
  heightCard: number;
  heightImg: number;
  path: string;
}) {
  const { filterAge, filterPrice } = useSelector(parametersFilters);
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectProductData);

  console.log(path);

  React.useEffect(() => {
    const pathPage = path;
    dispatch(fetchCatalog({ pathPage, filterAge, filterPrice }));
  }, [filterAge, filterPrice]);
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
