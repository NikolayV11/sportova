import React from "react";
import styles from "./FilterAge.module.scss";
import { TypeCheckBox } from "../../Type";

const checkBox: TypeCheckBox[] = [
  { title: "Вся семья", value: "family" },
  { title: "Взрослые", value: "adults" },
  { title: "Детские", value: "children's" },
];

export function FilterAge() {
  const [activeCheckbox, setActiveCheckbox] = React.useState(0);
  return (
    <div className={styles.filter_age}>
      <h4>Для кого</h4>
      <div className={styles.filter_age__items}>
        {checkBox.map((item, idx) => (
          <div className={`checkBox ${activeCheckbox === idx ? "checkBoxActive" : ""}`} key={idx}>
            <input
              type="checkbox"
              checked={idx === activeCheckbox}
              onClick={() => {
                setActiveCheckbox(idx);
              }}
            />
            <label>{item.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
