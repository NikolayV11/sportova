import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";
import { typeCard } from "../../Type";
import styles from "./CardHome.module.scss";

export function CardHome({ id, title, link, urlImg, price, heightImg, heightCard }: typeCard) {
  return (
    <div key={id} style={{ height: `${heightCard}px` }} className={styles.card_item}>
      <div className={styles.card_item_block_btn}>
        <button className={styles.card_item_block_btn__cart}>
          <HandySvg
            src="/img/product_comparison_add.svg"
            className={styles.card_item_block_btn__cart_add}
          />
          <HandySvg className={styles.card_item_block_btn__cart_status} src="/img/add_hover.svg" />
        </button>
        <button className={styles.card_item_block_btn__favorites}>
          <HandySvg src="/img/favorite.svg" className={styles.card_item_block_btn__favorites_add} />
          <HandySvg
            className={styles.card_item_block_btn__favorites_status}
            src="/img/add_hover.svg"
          />
        </button>
      </div>
      <img
        style={{ height: `${heightImg}px` }}
        className={styles.card_item_img}
        src={urlImg}
        alt=""
      />
      <Link className={styles.card_item_link} to={link}>
        <h3>{title}</h3>
      </Link>
      <div className={styles.card_item_block_priceBtn}>
        <div className={styles.card_item_block_priceBtn_price}>
          {price?.discount && (
            <p className={styles.card_item_block_priceBtn_price_discount}>{price?.discount} ₽</p>
          )}
          <p className={styles.card_item_block_priceBtn_price_price}>{price.price} ₽</p>
        </div>
        <div className={styles.card_item_block_priceBtn_btn}>
          <button className={`${styles.card_item_block_priceBtn_btn_block} btnHover`}>
            <HandySvg
              className={styles.card_item_block_priceBtn_btn_block_cart}
              src="/img/card_btn_cart.svg"
            />{" "}
            <HandySvg
              className={`${styles.card_item_block_priceBtn_btn_block_status} SVGstatus`}
              src="/img/add_hover.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
