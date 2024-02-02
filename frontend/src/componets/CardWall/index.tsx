import React from "react";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";
import { typeCard } from "../index";
import styles from "./cardWall.module.scss";

export function CardWall({ id, title, link, urlImg, price }: typeCard) {
  return (
    <div key={id} className={styles.card_item}>
      <div className={styles.card_item_block_btn}>
        <button>
          <HandySvg src="/img/product_comparison_add.svg" />
        </button>
        <button>
          <HandySvg src="/img/favorites_add.svg" />
        </button>
      </div>
      <img className={styles.card_item_img} src={urlImg} alt="" />
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
          <button>
            <HandySvg src="/img/card_btn_cart.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
