import React from "react";
import { TypeCheckBox } from "../../Type";
import styles from "./FilterColor.module.scss";

import { useAppDispatch } from "../../redux/store";
import { paramsFilterColor } from "../../redux/FilterParams";

let checkBox: TypeCheckBox[] = [
  { id: 0, title: "Антик-серебро", value: "серебро", status: false },
  { id: 1, title: "Бежевый", value: "бежевый", status: false },
  { id: 2, title: "Белый, желтый", value: "бело-желтый", status: false },
  { id: 3, title: "Зелёный", value: "зеленый", status: false },
  { id: 4, title: "Красный", value: "красный", status: false },
  { id: 5, title: "Красный, желтый", value: "красно-желтый", status: false },
  { id: 6, title: "Белый, черный", value: "бело-черный", status: false },
  { id: 7, title: "Желтый, черный", value: "желто-черный", status: false },
];

export function FilterColor() {
  const dispatch = useAppDispatch();
  const [activeCheckbox, setActiveCheckbox] = React.useState(checkBox);
  const [openList, setOpenList] = React.useState(false);

  function onChangeBox(index: number, color: TypeCheckBox) {
    setActiveCheckbox(
      activeCheckbox.map((item) => {
        if (item.id === index) {
          item.status = !item.status;
        }
        return item;
      }),
    );
    dispatch(paramsFilterColor(color));
  }
  return (
    <div className={styles.filter_color}>
      <h4 className="filterTitle">Для кого</h4>
      <div
        style={{ height: `${openList ? "auto" : "135px"}` }}
        className={`filterCheckBox ${styles.filter_color_items}`}>
        {checkBox.map((item, idx) => (
          <div
            style={{ display: `${!openList && idx > 3 ? "none" : "flex"}` }}
            className={`checkBox ${activeCheckbox[idx].status ? "checkBoxActive" : ""}`}
            key={idx}>
            <label>
              <input
                value={item.value}
                type="checkbox"
                onChange={() => {
                  onChangeBox(idx, item);
                }}
              />
              <p>{item.title}</p>
            </label>
          </div>
        ))}
      </div>
      <div className={styles.filter_color_list} style={{ marginTop: `${openList ? "16px" : "0"}` }}>
        <button
          onClick={() => {
            setOpenList(!openList);
            console.log(openList);
          }}>
          <span>показать {openList ? "меньше" : "болше"}</span>
        </button>
      </div>
    </div>
  );
}
