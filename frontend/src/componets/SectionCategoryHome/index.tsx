import React from "react";
import styles from "./SectionCategoryHome.module.scss";

import { typeCategoryMap } from "../../Type";
import { CategoryMap } from "../CategoryMap";

const card: typeCategoryMap[] = [
  {
    title: "Щведские стенки",
    img: "/img/CategoryMap/CategoryMap_1.png",
    link: "/category/swedish_walls",
  },
  {
    title: "Турники",
    img: "/img/CategoryMap/CategoryMap_2.png",
    link: "/category/horizontal_bars",
  },
  {
    title: "Уличные комплексы",
    img: "/img/CategoryMap/CategoryMap_3.png",
    link: "/category/street_equipment",
  },
  {
    title: "Тяжелая атлетика",
    img: "/img/CategoryMap/CategoryMap_4.png",
    link: "/category/weightlifting",
  },
  {
    title: "Стойки под штангу",
    img: "/img/CategoryMap/CategoryMap_5.png",
    link: "/category/barbell_stands",
  },
  {
    title: "Единоборства",
    img: "/img/CategoryMap/CategoryMap_6.png",
    link: "/category/martial_arts",
  },
  { title: "Фитнес", img: "/img/CategoryMap/CategoryMap_7.png", link: "/category/fitness" },
  { title: "Весь каталог", img: "/img/CategoryMap/CategoryMap_81.png", link: "/category" },
];
export function SectionCategoryHome() {
  return (
    <div className={styles.section__category}>
      <div className="container">
        {" "}
        <h2 className={styles.section__category_title}>Каталог товаров</h2>
        <div className={styles.section__category_block}>
          {card.map((item, index) => {
            return <CategoryMap {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
