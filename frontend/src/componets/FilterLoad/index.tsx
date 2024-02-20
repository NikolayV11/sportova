import React from "react";
import styles from "./FilterLoad.module.scss";
import { TypeCheckBox } from "../../Type";

let checkBox: TypeCheckBox[] = [
  { id: 0, title: "Детский, до 80 кг", value: "family", status: false },
  { id: 1, title: "Подростки, до 100 кг", value: "adults", status: false },
  { id: 2, title: "Взрослый, до 120 кг", value: "children's", status: false },
  { id: 3, title: "Надежный, до 150 кг", value: "children's", status: false },
  { id: 4, title: "Максимум, до 250 кг", value: "children's", status: false },
];
export function FilterLoad() {
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
      <h4 className="filterTitle">Макс.нагрузка</h4>
      <div className={`filterCheckBox `}>
        {checkBox.map((item, idx) => (
          <div
            className={`checkBox ${activeCheckbox[idx].status ? "checkBoxActive" : ""}`}
            key={idx}>
            <label>
              <input
                value={item.value}
                type="checkbox"
                // checked={true}
                onChange={() => {
                  onChangeBox(idx);
                }}
              />
              <p>{item.title}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
