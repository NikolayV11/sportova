import React from "react";
import { uponDelivery, uponPayment } from "./info";

import styles from "./PaymentAndDelivery.module.scss";
import { Link } from "react-router-dom";

import { QuestionsAndAnswers } from "../../componets/index";

export function PaymentAndDelivery() {
  return (
    <div className={`pageBackground ${styles.block}`}>
      <div className="container">
        <div className={styles.block__path}>
          <Link to="/">Главная</Link>
          <span>/</span> <p>Доставка и оплата</p>
        </div>
        <h1>Доставка</h1>
        <div className={`${styles.block__delivery} ${styles.block__container}`}>
          <div className={`${styles.block__container_items} ${styles.block__delivery_cities}`}>
            <h3>Москва и Нижний Новгород</h3>
            <p>
              Доставка осуществляется в день заказа или на следующий штатными курьерами до подъезда.
            </p>
            <p>
              Если Вам необходимо поднять товар до квартиры, предупредите об этом менеджера или
              укажите в комментарии к заказу.
            </p>
          </div>
          <div className={`${styles.block__container_items} ${styles.block__delivery_pickup}`}>
            <h3>Самовывоз</h3>
            <p>Самовывоз возможен из магазинов:</p>
            <ul>
              <li>г. Нижний Новгород, ул. Народная 20 ежедневно с 9.00 до 19.00</li>
              <li>г. Москва, Кавказский б-р 51 / 12, вт-сб 8:30 -17:30, вс-пн 8:30 -12:00</li>
            </ul>
            <p>Оплатить в магазинах возможно наличными или переводом на карту.</p>
          </div>
          <QuestionsAndAnswers
            classNameBlockIndividually={styles.block__container_uponPayment}
            classNameBlock={styles.block__container_items}
            info={uponPayment}
          />

          <div className={`${styles.block__container_items} ${styles.block__delivery_regions}`}>
            <h3>Регионы РФ</h3>
            <p>Доставка осуществляется с помощью транспортных компаний.</p>
            <p>
              Время доставки варьируется в зависимости от удаленности региона.Среднее время в пути
              по Центральной России 3-5 дней.
            </p>
            <p>
              Забрать заказ можно как с терминала выдачи самостоятельно, так и оформив доставку «до
              двери».В большинстве регионов оплатить заказ можно при получении наличными или картой.
            </p>
          </div>
        </div>

        <div className={`${styles.block__payment} ${styles.block__container_payment}`}>
          <h1>Оплата</h1>
          <div className={styles.block__container_payment_items}>
            <div
              className={`${styles.block__container_payment_items_item} ${styles.block__payment_price}`}>
              <h3>Оплата курьеру при получении</h3>
              <p>
                Вы можете оплатить заказ наличными при получении или переводом на карту. После
                проведения оплаты Вам на указанный email поступит сообщение с чеком от нашего
                оператора фискальных данных.
              </p>
            </div>
            <QuestionsAndAnswers
              classNameBlock={styles.block__container_payment_items_item}
              classNameBlockIndividually={styles.block__container_payment_items_uponDelivery}
              info={uponDelivery}
            />
            <div
              className={`${styles.block__container_payment_items_item} ${styles.block__payment_i}`}>
              <h3>Оплата при самовывозе</h3>
              <p>Оплатить в магазинах возможно наличными или переводом на карту.</p>
              <p>Продавец выдаст Вам кассовый и товарный чек с перечнем оплаченной продукции.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
