import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";

import styles from "./ContactsCompany.module.scss";

export function ContactsCompany() {
  return (
    <div className={styles.contacts_company}>
      <h3>Контакты</h3>
      <div className={styles.contacts_company_list}>
        <div>
          <p>Адрес:</p>
        </div>
        <div className={styles.contacts_company_list_info}>
          <Link
            className={styles.contacts_company_list_link}
            to={"https://maps.app.goo.gl/BmkohSifwcLnQM7Z9"}
            target="blank">
            г. Нижний Новгород, ул.Народная, 20
          </Link>
        </div>
        <div>
          <p>Телефон:</p>
        </div>
        <div className={styles.contacts_company_list_info}>
          <Link to="tel:88005502216">8 (800) 550-22-16</Link>
        </div>
        <div>
          <p>E-mail:</p>
        </div>
        <div className={styles.contacts_company_list_info}>
          <Link className={styles.contacts_company_list_link} to="mailto:info@sportova.ru">
            info@sportova.ru
          </Link>
        </div>
        <div>
          <p>Режим работы:</p>
        </div>
        <div className={styles.contacts_company_list_info}>
          <p>Пн. – Вс.: с 9:00 до 19:00</p>
        </div>
        <div>
          <p>Соц.сети:</p>
        </div>
        <div className={styles.contacts_company_list_info}>
          <ul className={styles.contacts_company_list__social_media_items}>
            <li>
              <Link to="https://vk.com/" target="blank">
                <HandySvg src="/img/social_media/social_media_vk.svg" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/" target="blank">
                <HandySvg src="/img/social_media/social_media_insta.svg" />
              </Link>
            </li>
            <li>
              <Link to="https://t.me/" target="blank">
                <HandySvg src="/img/social_media/social_media_teleg.svg" />
              </Link>
            </li>
            <li>
              <Link to="https://wa.me/" target="blank">
                <HandySvg src="/img/social_media/social_media_whatSapp.svg" />
              </Link>
            </li>
            <li>
              <Link to="viber://call?number=846316546464" target="blank">
                <HandySvg src="/img/social_media/social_media_viber.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
