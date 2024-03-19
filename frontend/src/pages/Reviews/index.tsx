import React from "react";
import { Link } from "react-router-dom";

import { UserReviews } from "../../componets";
import styles from "./Reviews.module.scss";

import { usersData } from "./users";

export function Reviews() {
  return (
    <div className={`${styles.block} pageBackground`}>
      <div className="container">
        <div className={styles.block__content}>
          <div className={styles.block__content__path}>
            <Link to="/">Главная</Link>
            <span>/</span> <p>Отзовы</p>
          </div>
          <h1 className="titlePages">Отзовы</h1>
          <div className={styles.block__content_users}>
            {usersData.map((item, index) => {
              return <UserReviews key={`${item.id} ${index}`} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
