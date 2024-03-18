import React from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.scss";

import { Constructor, CardHome } from "../index";
import { fetchCatalog, selectProductData } from "../../redux/filtration";
import { parametersFilters } from "../../redux/FilterParams";
import { useAppDispatch } from "../../redux/store";
import { parametersSort } from "../../redux/SortParams";

export function Product({
  heightCard,
  heightImg,
  path,
}: {
  heightCard: number;
  heightImg: number;
  path: string;
}) {
  const { filterAge, filterPrice, sale, filterColor, filterLoad } = useSelector(parametersFilters);
  const { type, params } = useSelector(parametersSort);
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectProductData);

  React.useEffect(() => {
    const pathPage = path;
    dispatch(
      fetchCatalog({
        pathPage,
        filterAge,
        filterPrice,
        sale,
        filterColor,
        filterLoad,
        type,
        params,
      }),
    );
  }, [filterAge, filterPrice, sale, filterColor, filterLoad, type, params, path]);
  return (
    <div className={`${items.length > 0 ? styles.product : styles.product_one}`}>
      <Constructor
        classBlock={`${items.length > 0 ? styles.product_list : styles.product_one_list}`}
      />
      {items.map((item: any, index: number) => {
        return (
          <CardHome
            key={index}
            {...item}
            link={`${item.id}`}
            heightImg={heightImg}
            heightCard={heightCard}
          />
        );
      })}
    </div>
  );
}
