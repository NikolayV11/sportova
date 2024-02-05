import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./ListCatalog.module.scss";
import { typeList, typeList2, typeList3 } from "../../../../Type";

import { useAppDispatch } from "../../../../redux/store";
import { setActiveCatalog, selectCount } from "../../../../redux/catalog";
import { useSelector } from "react-redux";

export function ListCatalog({
  listData,
  numberMenu,
}: {
  listData: typeList | typeList2 | typeList3;
  numberMenu: number;
}) {
  const [status, setStatus] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(0);

  const statusCatalog = useSelector(selectCount);
  const dispatch = useAppDispatch();

  if (!listData) {
    return <></>;
  }
  return (
    <ul
      className={`${styles.catalog} ${
        numberMenu === 0 ? "catalog_1" : numberMenu === 1 ? "catalog_2" : "catalog_n"
      }`}>
      {listData.map((item, index) => {
        return (
          <li
            className={`${styles.catalog_list}`}
            key={index + item.title}
            onMouseOver={() => {
              setStatus(true);
              setMenuOpen(index);
            }}
            onMouseOut={() => {
              setStatus(false);
              setMenuOpen(index);
            }}>
            <Link className={`${styles.catalog_list_link}`} to={item?.link && item.link}>
              {item.title}
              {!item?.link && <HandySvg src="/img/right.svg" />}
            </Link>

            {item.list && (
              <div
                className={`${styles.catalog_list_block} ${
                  numberMenu === 0
                    ? styles.catalog_1
                    : numberMenu === 1
                    ? styles.catalog_2
                    : styles.catalog_n
                }`}
                style={{
                  display: `${status && menuOpen === index ? "block" : "none"}`,
                }}>
                <ListCatalog listData={item.list} numberMenu={numberMenu + 1} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
