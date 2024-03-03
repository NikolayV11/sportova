import React from "react";

import styles from "./ChoiceOfColors.module.scss";
import { ColorCard } from "../index";
import { typePalette } from "../../Type";

const profileColor: typePalette = {
  title: "Цвет профиля",
  palette: [
    { title: "Антик-серебро", color: "#f41a3f, #f1f3" },
    { title: "серебро", color: "#f45f3f, blue" },
    { title: "Антик-серебро", color: "#f45fa8, #a23c94, blue" },
    { title: "серебро", color: "#f45f3f, #2f33ad" },
    { title: "Антик-серебро", color: "#f45f3f, #2bdf1b" },
    { title: "серебро", color: "#f45fa3,#d6d6d6" },
  ],
};

const crossbarColor: typePalette = {
  title: "Цвет перекладин",
  palette: [
    { title: "Антик-серебро", color: "#f41a3f, #f1f3" },
    { title: "серебро", color: "#f45f3f, blue" },
    { title: "Антик-серебро", color: "#f45fa8, #a23f34, blue" },
    { title: "серебро", color: "#f45f3f, #2f33ad" },
    { title: "Антик-серебро", color: "#f45f3f, #2bde1b" },
    { title: "серебро", color: "#f45fa3,#d6d6d6" },
  ],
};
export function ChoiceOfColors() {
  return (
    <div className={styles.block}>
      <ColorCard palette={profileColor} />
      <ColorCard palette={crossbarColor} />
    </div>
  );
}
