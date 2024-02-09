import React from "react";
import { HandySvg } from "handy-svg";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
export function Footer() {
  return (
    <footer className={`${styles.footer} footer`}>
      <div className={styles.footer_top}>
        <div className="container"></div>
      </div>
      <div className={styles.footer_contacts}>
        <div className="container">
          <div className={styles.footer_contacts_items}>
            <div className={styles.footer_contacts_items_contacts}>
              <h3>Контакты</h3>
              <ul className={styles.footer_contacts_items_contacts_list}>
                <li>
                  <Link to="https://maps.app.goo.gl/BmkohSifwcLnQM7Z9">
                    г. Нижний Новгород, ул.Народная, 20
                  </Link>
                </li>
                <li>
                  <Link to="tel:88005502216">8 (800) 550-22-16</Link>
                </li>
                <li>
                  <Link to="mailto:info@sportova.ru">info@sportova.ru</Link>
                </li>
                <li>
                  <div className={styles.footer_contacts_items_contacts__social_media}>
                    <span>Sportova на связи:</span>
                    <ul className={styles.footer_contacts_items_contacts__social_media_items}>
                      <li>
                        <Link to="https://vk.com/">
                          <HandySvg src="/img/social_media/social_media_vk.svg" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/">
                          <HandySvg src="/img/social_media/social_media_insta.svg" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://t.me/">
                          <HandySvg src="/img/social_media/social_media_teleg.svg" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://wa.me/">
                          <HandySvg src="/img/social_media/social_media_whatSapp.svg" />
                        </Link>
                      </li>
                      <li>
                        <Link to="viber://call?number=846316546464">
                          <HandySvg src="/img/social_media/social_media_viber.svg" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.footer_contacts_items_catalog}>
              <h3>Каталог</h3>
              <ul className={styles.footer_contacts_items_catalog_list}>
                <li>Шведские стенки</li>
                <li>Турники</li>
                <li>Уличные комплексы</li>
                <li>Тяжелая атлетика</li>
                <li>Единоборства</li>
                <li>Тюбинги</li>
                <li>Игровые домики</li>
                <li>Фитнес</li>
                <li>Скамьи и стойки под штангу</li>
                <li>Сухие бассейны</li>
                <li>Батуты</li>
                <li>Новогодние елки</li>
              </ul>
            </div>
            <div className={styles.footer_contacts_items_useful}>
              <h3>Полезное</h3>
              <ul className={styles.footer_contacts_items_useful_list}>
                <li>Обратная связь</li>
                <li>Акции и скидки</li>
                <li>Доставка и оплата</li>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Политика сайта</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_button}>
        <div className="container"></div>
      </div>
    </footer>
  );
}
