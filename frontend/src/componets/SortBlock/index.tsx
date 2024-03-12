import React, { Dispatch, SetStateAction } from "react";

import { HandySvg } from "handy-svg";
import { typeSort, TypeParams, TypeValueParams } from "../../Type";
import styles from "./SortBlock.module.scss";

type activeTypeSort = {
  activeType: string;
  setActiveType: React.Dispatch<React.SetStateAction<TypeParams>>;
  setActiveParams: React.Dispatch<React.SetStateAction<TypeValueParams>>;
};

export function SortBlock({
  title,
  value,
  type,
  activeType,
  setActiveType,
  setActiveParams,
}: typeSort & activeTypeSort) {
  const [active, setActive] = React.useState(null);
  const [activeSortType, setActiveSortType] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const sortRef = React.useRef<HTMLDivElement>();

  function onClickParams(type: typeSort["type"], params: TypeValueParams, index: number) {
    setOpen(false);
    setActive(index);
    setActiveType(type);
    setActiveParams(params);
  }

  React.useEffect(() => {
    if (type === activeType) {
      setActiveSortType(true);
    } else {
      setActiveSortType(false);
      setActive(null);
    }
  }, [activeType]);

  React.useEffect(() => {
    if (type === activeType) {
      setActive(0);
    }
  }, []);

  // клик вне компоента
  React.useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent & {
        composedPath: (tar?: HTMLElement) => EventTarget[];
      },
    ) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sort} ref={sortRef}>
      <div
        className={styles.sort__title}
        onClick={() => {
          setOpen(!open);
        }}>
        <p>{title}</p>
        {activeSortType && <div className={styles.sort__title_active}></div>}
      </div>
      {open && (
        <div className={styles.sort__block}>
          <ul>
            {value.map((item, index) => {
              return (
                <li
                  key={item.title}
                  onClick={() => {
                    onClickParams(type, item.params, index);
                  }}>
                  <p>{item.title}</p>
                  {active === index && <HandySvg src="/img/staticCategory.svg" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
