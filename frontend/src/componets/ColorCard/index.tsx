import React from "react";
import styles from "./ColorCard.module.scss";
import { HandySvg } from "handy-svg";

import { typePalette, typePaletteArr } from "../../Type";

export const ColorCard = React.memo(({ palette }: { palette: typePalette }) => {
  const [activeColor, setActiveColor] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);

  const colorRef = React.useRef<HTMLDivElement>();
  // клик вне компоента
  React.useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent & {
        composedPath: (tar?: HTMLElement) => EventTarget[];
      },
    ) => {
      if (!event.composedPath().includes(colorRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.palette} ref={colorRef}>
      <p>{palette.title} :</p>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={styles.palette_active}>
        <div
          className={styles.palette_active_color}
          style={{
            background: `linear-gradient(${palette.palette[activeColor].color})`,
          }}></div>
        <p>{palette.palette[activeColor].title}</p>
        <HandySvg src={open ? "/img/collapse.svg" : "/img/staticCategory.svg"} />
      </div>
      {open && (
        <div className={styles.palette__list}>
          {palette.palette.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setActiveColor(index);
                  setOpen(false);
                }}
                className={styles.palette__list_items}
                key={index}>
                <div className={styles.palette__list_items_item}>
                  <div
                    className={styles.palette__list_items_item_color}
                    style={{
                      background: `linear-gradient(${item.color}`,
                    }}></div>
                  <p>{item.title}</p>
                </div>
                {activeColor === index && <HandySvg src="/img/staticCategory.svg" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});
