import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./ListCatalog.module.scss";
import { typeList, typeList2, typeList3 } from "../../../../Type";

export function ListCatalog({
  listData,
  numberMenu,
}: {
  listData: typeList | typeList2 | typeList3;
  numberMenu: number;
}) {
  const [status, setStatus] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(0);

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
            key={index + item.title}
            onMouseOver={() => {
              setStatus(true);
              setMenuOpen(index);
            }}
            onMouseOut={() => {
              setStatus(false);
              setMenuOpen(index);
            }}>
            <Link to={item.link}>{item.title}</Link>
            {item.list && (
              <div
                style={{
                  display: `${status && menuOpen === index ? "block" : "none"}`,
                  position: "absolute",
                  right: "-100px",
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
