import React from "react";
import { HandySvg } from "handy-svg";

import styles from "./QuestionsAndAnswers.module.scss";
import { TypeQuestionsAbout } from "../../Type";

type TypeQuestionsAndAnswers = {
  classNameBlock: any;
  classNameBlockIndividually: any;
  info: TypeQuestionsAbout;
};

export function QuestionsAndAnswers({
  classNameBlock,
  classNameBlockIndividually,
  info,
}: TypeQuestionsAndAnswers) {
  const [active, setActive] = React.useState<null | number>(null);

  const blockInfo = React.useRef();

  function onClickBlock(index: number) {
    if (!active === null) {
    } else {
      if (active === index) {
        return setActive(null);
      }
      return setActive(index);
    }
  }

  // клик вне компоента
  React.useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent & {
        composedPath: (tar?: HTMLElement) => EventTarget[];
      },
    ) => {
      if (!event.composedPath().includes(blockInfo.current)) {
        setActive(null);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={`${classNameBlock} ${classNameBlockIndividually}`}>
      <h3>Частые вопросы по доставке</h3>
      <div ref={blockInfo} className={styles.block__container}>
        {info.map((item, index) => {
          return (
            <div key={index} className={styles.block__container_items}>
              <div
                onClick={() => {
                  onClickBlock(index);
                }}
                className={`${styles.block__container_items_question} ${
                  active === index && styles.SVGActive
                }`}>
                <p>{item.question}</p>
                <HandySvg
                  src={active === index ? "/img/collapse2.svg" : "/img/staticCategory.svg"}
                />
              </div>
              <div
                style={{ display: `${active === index ? "block" : "none"}` }}
                className={`${styles.block__container_items_answer}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
