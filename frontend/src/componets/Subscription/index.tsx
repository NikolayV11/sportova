import React from "react";

import styles from "./Subscription.module.scss";

export function Subscription() {
  return (
    <div className={styles.subscription}>
      <div className="container">
        <div className={styles.subscription_block}>
          <div className={styles.subscription_block_subscription}>
            <p>Редкие, но очень полезные письма!</p>
            <span>
              Подпишись и получи промокод на скидку! Его можно применить ко всем товарам в магазине
            </span>
          </div>
          <form className={styles.subscription_block_form}>
            <input type="email" name="emailUser" id="" placeholder="Ваш e-mail" />
            <button>
              <span>Подписаться</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
