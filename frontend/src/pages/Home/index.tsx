import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./Home.module.scss";

import { SwiperSection } from "../../componets";
export function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.section_top}>
          <div
            className={styles.section_top_item}
            style={{ backgroundImage: "url(/img/job_top.jpg)" }}>
            <h3>Собственное швейное производство</h3>
            <p>Приглашаем к сотрудничеству</p>
            <Link to="*">
              Подробнее <HandySvg src="/img/right.svg" />
            </Link>
          </div>
          <SwiperSection />
          <div
            className={styles.section_top_item}
            style={{ backgroundImage: "url(/img/showroom_top.jpg)" }}>
            <h3>Посетите наш шоу-рум!</h3>
            <p>Н.Новгород, ул.Народная 20 Ежедневно с 9:00 до 19:00</p>
            <Link to="*">
              Подробнее <HandySvg src="/img/right.svg" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
