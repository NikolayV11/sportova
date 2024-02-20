import React from "react";

import { HandySvg } from "handy-svg";
import { typeSort } from "../../Type";
import styles from "./SortBlock.module.scss";

export function SortBlock({ title, value }: typeSort) {
  const [active, setActive] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const sortRef = React.useRef<HTMLDivElement>();

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
      </div>
      {open && (
        <div className={styles.sort__block}>
          <ul>
            {value.map((item, index) => {
              return (
                <li
                  key={item.title}
                  onClick={() => {
                    setOpen(false);
                    setActive(index);
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
