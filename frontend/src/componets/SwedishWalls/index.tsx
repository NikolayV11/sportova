import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwedishWalls.module.scss";
import "./style.css";
import "swiper/css";
import { HandySvg } from "handy-svg";

const cards = [
  {
    title: "Шведская стенка P-19 (Цвет: Белый)",
    link: "*",
    urlImg: "/img/wall_1.jpeg",
    price: { price: 14980 },
  },
  {
    title: "Шведская стенка P-3 (Цвет: Антик Серебро)",
    link: "*",
    urlImg: "/img/wall_2.jpeg",
    price: { price: 7990, discount: 11320 },
  },
  {
    title: "Шведская стенка P-4 (Цвет: Светофор)",
    link: "*",
    urlImg: "/img/wall_3.jpeg",
    price: { price: 10990, discount: 14990 },
  },
  {
    title: "Шведская стенка P-19 (Цвет: Антик серебро)",
    link: "*",
    urlImg: "/img/wall_4.jpeg",
    price: { price: 14980 },
  },
  {
    title: "Шведская стенка P-3 (Цвет: Антик Серебро)",
    link: "*",
    urlImg: "/img/wall_2.jpeg",
    price: { price: 7990, discount: 11320 },
  },
  {
    title: "Шведская стенка P-19 (Цвет: Белый)",
    link: "*",
    urlImg: "/img/wall_1.jpeg",
    price: { price: 14980 },
  },
  {
    title: "Шведская стенка P-4 (Цвет: Светофор)",
    link: "*",
    urlImg: "/img/wall_3.jpeg",
    price: { price: 10990, discount: 14990 },
  },
];
export function SwedishWalls() {
  return (
    <div className="container">
      <div className={styles.swiper_conteiner}>
        <h2>Шведские стенки</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // 1024: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
          }}
          modules={[Navigation]}
          className="swedish-walls">
          {cards.map((item, index) => {
            return (
              <SwiperSlide key={index} className={styles.card_item}>
                <div className={styles.card_item_block_btn}>
                  <button>
                    <HandySvg src="/img/product_comparison_add.svg" />
                  </button>
                  <button>
                    <HandySvg src="/img/favorites_add.svg" />
                  </button>
                </div>
                <img className={styles.card_item_img} src={item.urlImg} alt="" />
                <Link className={styles.card_item_link} to={item.link}>
                  <h3>{item.title}</h3>
                </Link>
                <div className={styles.card_item_block_priceBtn}>
                  <div className={styles.card_item_block_priceBtn_price}>
                    {item.price?.discount && (
                      <p className={styles.card_item_block_priceBtn_price_discount}>
                        {item.price?.discount}
                      </p>
                    )}
                    <p>{item.price.price}</p>
                  </div>
                  <div className={styles.card_item_block_priceBtn_btn}>
                    <button>
                      <HandySvg src="/img/card_btn_cart.svg" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
