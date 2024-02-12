import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwedishWalls.module.scss";

import "swiper/css";
import { CardHome } from "../index";
import { typeCard } from "../../Type";

const cards: typeCard[] = [
  {
    id: 1,
    title: "УСК Богатырь Romana, качели гнездо Romana",
    link: "*",
    urlImg: "/img/StreetSports_1.jpeg",
    price: { price: 27590 },
  },
  {
    id: 2,
    title: "Спортивный детский комплекс “Юниор-Плюс”...",
    link: "*",
    urlImg: "/img/StreetSports_2.jpeg",
    price: { price: 15999, discount: 18500 },
  },
  {
    id: 3,
    title: "Детский уличный спортивный комплекс «Юниор» (с сеткой)...",
    link: "*",
    urlImg: "/img/StreetSports_3.jpeg",
    price: { price: 19490, discount: 23800 },
  },
  {
    id: 4,
    title: "Уличный спортивный турник Романа",
    link: "*",
    urlImg: "/img/StreetSports_4.jpeg",
    price: { price: 22990 },
  },
  {
    id: 5,
    title: "Спортивный детский комплекс “Юниор-Плюс”...",
    link: "*",
    urlImg: "/img/StreetSports_2.jpeg",
    price: { price: 15990, discount: 18500 },
  },
  {
    id: 6,
    title: "УСК Богатырь Romana, качели гнездо Romana",
    link: "*",
    urlImg: "/img/StreetSports_1.jpeg",
    price: { price: 27590, discount: 45999 },
  },
  {
    id: 7,
    title: "Детский уличный спортивный комплекс «Юниор» (с сеткой)...",
    link: "*",
    urlImg: "/img/StreetSports_3.jpeg",
    price: { price: 20000, discount: 25990 },
  },
];
export function StreetSports() {
  return (
    <div className="container">
      <div className={styles.swiper_conteiner}>
        <h2 className={styles.swiper_conteiner_title}>Уличные спортивные комплексы</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          modules={[Navigation]}
          className="swedish-streetSports">
          {cards.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardHome heightImg={220} heightCard={396} {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
