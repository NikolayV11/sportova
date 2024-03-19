import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./QuestionsAndAnswers.module.scss";

const info = [
  { question: "Когда привезут мой заказ?", answer: "Информация указана в накладной" },
  { question: "Что нужно для получения заказа?", answer: "Номер накладной" },
  {
    question: "Где найти чек и информацию по заказу?",
    answer: "Прекреплена к накладной и в СМС-сообщение",
  },
  { question: "Как получить бесплатную доставку?", answer: "При заказе от 150 000 рублей" },
];
export function QuestionsAndAnswers({ classNameBlock }: any) {
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
    <div className={`${classNameBlock} ${styles.block}`}>
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
