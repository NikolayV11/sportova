import React from "react";
import { TypeCheckBox } from "../../Type";
import styles from "./FilterColor.module.scss";

let checkBox: TypeCheckBox[] = [
  { id: 0, title: "Антик-серебро", value: "family", status: false },
  { id: 1, title: "Бежевый", value: "adults", status: false },
  { id: 2, title: "Белый, желтый", value: "children's", status: false },
  { id: 3, title: "Зелёный", value: "children's", status: false },
  { id: 4, title: "Красный", value: "children's", status: false },
  { id: 5, title: "Красный, желтый", value: "children's", status: false },
  { id: 6, title: "Белый, черный", value: "children's", status: false },
  { id: 7, title: "Желтый, черный", value: "children's", status: false },
];

export function FilterColor() {
  const [activeCheckbox, setActiveCheckbox] = React.useState(checkBox);
  const [openList, setOpenList] = React.useState(false);

  function onChangeBox(index: number) {
    setActiveCheckbox(
      activeCheckbox.map((item) => {
        if (item.id === index) {
          item.status = !item.status;
        }
        return item;
      }),
    );
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
                  onChangeBox(idx);
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
          <span>показать болше</span>
        </button>
      </div>
    </div>
  );
}
