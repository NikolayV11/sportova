import React from "react";

import styles from "./CharacteristicsCard.module.scss";

export function CharacteristicsCard() {
  return (
    <div className={styles.block} id="characteristics">
      <h3>Характеристики</h3>
      <div className={styles.block__table}>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>В комплекте</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>
              Шведская стенка Классик, Турник PRO, Брусья+Пресс, Упор под штангу, Скамья приставная
            </p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Внимание!</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>Гриф и блины для штанги в комплект не входят</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Вид установки</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>Пристенный: дюбель 10х50</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Макс нагрузка</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>до 250 кг</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Материал</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>Сталь 2мм, профиль 40 х 40</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Габариты (ВхШхГ), см</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>240 х 71 х 14 — Шведская стенка</p>
            <p>240 х 100 х 58 — Стенка с турником</p>
            <p>240 х 71 х 80 — Стенка с брусьями</p>
            <p>240 х 71 х 154 — При горизонтальной скамье</p>
            <p>10 см — Отступ от стены</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Параметры упаковки</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>Вес: 50 кг, Объём: 0,5 м³, Max длина: 2,4 м, помещается в легковой автомобиль</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Диаметр перекладин</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>⌀ 32 мм</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Расстояние между</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>23 см</p>
          </div>
        </div>
        <div className={styles.block__table_str}>
          <div className={styles.block__table_str_title}>
            <p>Гарантия</p>
          </div>
          <div className={styles.block__table_str_info}>
            <p>2 года</p>
          </div>
        </div>
      </div>
    </div>
  );
}
