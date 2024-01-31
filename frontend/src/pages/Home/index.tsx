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
          <SwiperSection />
        </section>
      </div>
    </main>
  );
}
