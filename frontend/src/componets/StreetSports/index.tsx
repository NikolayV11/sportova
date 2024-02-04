import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwedishWalls.module.scss";
import "./style.css";
import "swiper/css";
import { CardStreetSports, CardWall } from "../index";
import { typeCard } from "../../Type";

const cards: typeCard[] = [
  {
    id: 1,
    title: "Шведская стенка P-19 (Цвет: Белый)",
    link: "*",
    urlImg: "/img/wall_1.jpeg",
    price: { price: 14_980 },
  },
  {
    id: 2,
    title: "Шведская стенка P-3 (Цвет: Антик Серебро)",
    link: "*",
    urlImg: "/img/wall_2.jpeg",
    price: { price: 7990, discount: 11320 },
  },
  {
    id: 2,
    title: "Шведская стенка P-4 (Цвет: Светофор)",
    link: "*",
    urlImg: "/img/wall_3.jpeg",
    price: { price: 10990, discount: 14990 },
  },
  {
    id: 2,
    title: "Шведская стенка P-19 (Цвет: Антик серебро)",
    link: "*",
    urlImg: "/img/wall_4.jpeg",
    price: { price: 14980 },
  },
  {
    id: 2,
    title: "Шведская стенка P-3 (Цвет: Антик Серебро)",
    link: "*",
    urlImg: "/img/wall_2.jpeg",
    price: { price: 7990, discount: 11320 },
  },
  {
    id: 2,
    title: "Шведская стенка P-19 (Цвет: Белый)",
    link: "*",
    urlImg: "/img/wall_1.jpeg",
    price: { price: 14980 },
  },
  {
    id: 2,
    title: "Шведская стенка P-4 (Цвет: Светофор)",
    link: "*",
    urlImg: "/img/wall_3.jpeg",
    price: { price: 10990, discount: 14990 },
  },
];
export function StreetSports() {
  return (
    <div className="container">
      <div className={styles.swiper_conteiner}>
        <h2 className={styles.swiper_conteiner_title}>Шведские стенки</h2>
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
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="swedish-walls">
          {cards.map((item, index) => {
            return (
              <SwiperSlide>
                <CardStreetSports heightImg={320} heightCard={520} {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
