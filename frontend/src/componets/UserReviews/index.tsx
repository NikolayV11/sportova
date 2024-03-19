import React from "react";
import { Link } from "react-router-dom";
import { typeUserCommit } from "../../Type";
import styles from "./UserReviews.module.scss";

export function UserReviews({
  id,
  last_name,
  first_name,
  city,
  data,
  commit,
  link,
  imgUrl,
}: typeUserCommit) {
  return (
    <div className={styles.block}>
      <div className={styles.block__user}>
        <div className={styles.block__user_photo}>
          <img src={imgUrl} alt="photo_user" />
        </div>
        <div className={styles.block__user_info}>
          <h3>
            {first_name} {last_name}
          </h3>
          <p>
            {city}, {data}
          </p>
        </div>
      </div>
      <div className={styles.block__commit}>
        <p>
          <span>{commit}</span>
          <Link to={`${link}/${id}`}>Читать полностью.</Link>
        </p>
      </div>
    </div>
  );
}
