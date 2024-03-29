import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./styles.module.scss";

import { HeaderInfo, HeaderSearch, HeaderNavBar } from "../index";

export function Header() {
  return (
    <header className="header">
      <HeaderInfo />
      <HeaderSearch />
      <HeaderNavBar />
    </header>
  );
}
