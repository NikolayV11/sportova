import React from "react";
import styles from "./FilterLoad.module.scss";
import { TypeCheckBox } from "../../Type";
import { paramsFilterLoad } from "../../redux/FilterParams";
import { useAppDispatch } from "../../redux/store";
let checkBox: TypeCheckBox[] = [
  { id: 0, title: "Детский, до 80 кг", value: "80", status: false },
  { id: 1, title: "Подростки, до 100 кг", value: "100", status: false },
  { id: 2, title: "Взрослый, до 120 кг", value: "120", status: false },
  { id: 3, title: "Надежный, до 150 кг", value: "150", status: false },
  { id: 4, title: "Максимум, до 250 кг", value: "250", status: false },
];
export function FilterLoad() {
  const dispatch = useAppDispatch();
  const [activeCheckbox, setActiveCheckbox] = React.useState(checkBox);

  function onChangeBox(index: number, value: TypeCheckBox) {
    setActiveCheckbox(
      activeCheckbox.map((item) => {
        if (item.id === index) {
          item.status = !item.status;
        }
        return item;
      }),
    );
    dispatch(paramsFilterLoad(value));
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
                  onChangeBox(idx, item);
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
