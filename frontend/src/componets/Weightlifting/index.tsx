import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Weightlifting.module.scss";

import "swiper/css";
import { CardHome } from "../index";
import { typeCard } from "../../Type";

const cards: typeCard[] = [
  {
    id: 1,
    title: "Гантель разборная стальная (гриф + блины) 15 кг",
    link: "*",
    urlImg: "/img/Weightlifting_1.jpeg",
    price: { price: 1920 },
  },
  {
    id: 2,
    title: "Гантель разборная (гриф + блины) 24,1 кг",
    link: "*",
    urlImg: "/img/Weightlifting_2.jpeg",
    price: { price: 4260, discount: 6200 },
  },
  {
    id: 3,
    title: "Гантель разборная (гриф + блины) 26,6 кг",
    link: "*",
    urlImg: "/img/Weightlifting_3.jpeg",
    price: { price: 4260, discount: 5500 },
  },
  {
    id: 4,
    title: "Гиря «Горилла» 16,0 кг",
    link: "*",
    urlImg: "/img/Weightlifting_4.jpeg",
    price: { price: 5990 },
  },
  {
    id: 5,
    title: "Гантель разборная (гриф + блины) 24,1 кг",
    link: "*",
    urlImg: "/img/Weightlifting_2.jpeg",
    price: { price: 4200, discount: 6530 },
  },
  {
    id: 6,
    title: "Гантель разборная стальная (гриф + блины) 15 кг",
    link: "*",
    urlImg: "/img/Weightlifting_1.jpeg",
    price: { price: 3520 },
  },
  {
    id: 7,
    title: "Гантель разборная (гриф + блины) 26,6 кг",
    link: "*",
    urlImg: "/img/Weightlifting_3.jpeg",
    price: { price: 3590, discount: 5624 },
  },
];
export function Weightlifting() {
  return (
    <div className="container">
      <div className={styles.swiper_conteiner}>
        <h2 className={styles.swiper_conteiner_title}>Тяжелая атлетика</h2>
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
                <CardHome heightImg={240} heightCard={396} {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
