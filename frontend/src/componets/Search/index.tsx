import React from "react";
import { HandySvg } from "handy-svg";
import styles from "./Search.module.scss";
export function Search() {
  const [value, setValue] = React.useState("");

  function onClose() {
    setValue("");
  }
  return (
    <div className={styles.search__block}>
      <HandySvg className={styles.search__block_searchSVG} src="/img/search.svg" />
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Поиск по сайту"
        className={`${styles.search__block_search} border`}
      />
      <button className={styles.search__block_close} onClick={onClose}>
        <HandySvg className={styles.search__block_closeSVG} src="/img/close.svg" />
      </button>
    </div>
  );
}
