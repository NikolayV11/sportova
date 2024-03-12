import React from "react";
import { HandySvg } from "handy-svg";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import { Subscription } from "../index";
export function Footer() {
  return (
    <footer className={`${styles.footer} footer`}>
      <Subscription />
      <div className={styles.footer_top}>
        <div className="container">
          <div className={styles.footer_top_logo}>
            <Link to="/">
              <HandySvg src="/img/footer_logo.svg" />
            </Link>
          </div>
        </div>
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
                <li>
                  <Link to="*">Шведские стенки</Link>
                </li>
                <li>
                  <Link to="*">Турники</Link>
                </li>
                <li>
                  <Link to="*">Уличные комплексы</Link>
                </li>
                <li>
                  <Link to="*">Тяжелая атлетика</Link>
                </li>
                <li>
                  <Link to="*">Единоборства</Link>
                </li>
                <li>
                  <Link to="*">Тюбинги</Link>
                </li>
                <li>
                  <Link to="*">гровые домики</Link>И
                </li>
                <li>
                  <Link to="*">Фитнес</Link>
                </li>
                <li>
                  <Link to="*">Скамьи и стойки под штангу</Link>
                </li>
                <li>
                  <Link to="*">Сухие бассейны</Link>
                </li>
                <li>
                  <Link to="*">Батуты</Link>
                </li>
                <li>
                  <Link to="*">Новогодние елки</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_contacts_items_useful}>
              <h3>Полезное</h3>
              <ul className={styles.footer_contacts_items_useful_list}>
                <li>
                  <Link to="*">Обратная связь</Link>
                </li>
                <li>
                  <Link to="*">Акции и скидки</Link>
                </li>
                <li>
                  <Link to="*">Доставка и оплата</Link>
                </li>
                <li>
                  <Link to="/company">О нас</Link>
                </li>
                <li>
                  <Link to="*">Контакты</Link>
                </li>
                <li>
                  <Link to="*">Политика сайта</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_button}>
        <div className="container">
          <div className={styles.footer_button_items}>
            <div className={styles.footer_button_items_logo}>
              <Link to="/">
                <HandySvg src="/img/footer_logo.svg" />
              </Link>
            </div>
            <div className={styles.footer_button_items_company}>
              <h2>© ООО «Спортова», 2024</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
