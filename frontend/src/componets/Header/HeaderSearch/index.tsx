import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import { Search } from "../../index";
import styles from "./HeaderSearch.module.scss";

export function HeaderSearch() {
  return (
    <div className={styles.header__search}>
      <div className="container">
        <div className={styles.header__search_items}>
          <div className={styles.header__search_items_item}>
            <Link className={styles.header__search_items_item_link} to="/">
              <HandySvg
                className={styles.header__search_items_item_link_logo}
                src="./img/sportova_logo.svg"
              />
            </Link>
          </div>
          <div className={styles.header__search_items_search}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
