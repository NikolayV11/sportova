import React from "react";
import styles from "./FilterAge.module.scss";

import { useAppDispatch } from "../../redux/store";
import { parametersFilters, paramsFilterAge } from "../../redux/FilterParams";

import { useSelector } from "react-redux";

export function FilterAge() {
  const dispatch = useAppDispatch();
  const { checkBox } = useSelector(parametersFilters);
  const [activeCheckbox, setActiveCheckbox] = React.useState(0);
  return (
    <div className={styles.filter_age}>
      <h4 className="filterTitle">Для кого</h4>
      <div className={styles.filter_age__items}>
        {checkBox.map((item, idx) => (
          <div className={`checkBox ${activeCheckbox === idx ? "checkBoxActive" : ""}`} key={idx}>
            <label>
              <input
                value={item.value}
                onChange={() => {
                  dispatch(paramsFilterAge(item));
                }}
                type="checkbox"
                checked={idx === activeCheckbox}
                onClick={() => {
                  setActiveCheckbox(idx);
                }}
              />
              <p> {item.title}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
