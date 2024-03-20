import React from "react";
import { Link } from "react-router-dom";
import { Maps } from "../../componets";
import styles from "./Contacts.module.scss";

export function Contacts() {
  return (
    <div className={`${styles.block} pageBackground`}>
      <div className="container">
        <div className={styles.block__path}>
          <Link to="/">Главная</Link>
          <span>/</span> <p>Контакты</p>
        </div>
        <h1 className="colorTitlePages">Контакты</h1>

        <div className={styles.block__map}>
          <div className={styles.block__map_info}>
            <div className={styles.block__map_info_shop}>
              <h3 className="colorTitlePages">Офис / Магазин</h3>
              <Link to="https://maps.app.goo.gl/BmkohSifwcLnQM7Z9" target="blank">
                г. Нижний Новгород, ул. Народная 20
              </Link>
              <Link to="tel:88005502216">
                Тел.: <span>8 (800) 550-22-16</span>
              </Link>
              <Link to="mailto:info@sportova.ru">
                E-mail: <span>info@sportova.ru</span>
              </Link>
            </div>
            <div className={styles.block__map_info_pickup}>
              <h3>Точка самовывоза</h3>
              <Link to="https://maps.app.goo.gl/ZMjeYT2637axvpfR6" target="blank">
                г. Москва, ул. Кавказский бульвар 51, с. 12
              </Link>
              <Link to="tel:88005502217">
                Тел.: <span>8 (800) 550-22-17</span>
              </Link>
              <Link to="mailto:info@sportova.ru">
                E-mail: <span>info@sportova.ru</span>
              </Link>
            </div>
          </div>
          <div className={styles.block__map_map}>
            <Maps />
          </div>
        </div>
        <div className={styles.block__link}>
          <div className={styles.block__link_vk}>
            <p>«Спортова» ВКонтакте</p>
            <Link to="https://www.vk.com/" target="blank">
              Вступить
            </Link>
          </div>
          <div className={styles.block__link_inst}>
            <p>«Спортова» в Instagram</p>
            <Link to="https://www.instagram.com/" target="blank">
              Подписаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
