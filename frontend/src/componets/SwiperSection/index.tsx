import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
// import "swiper/css/scrollbar";
import styles from "./SwiperSection.module.scss";

const arrSlider = [
  {
    title: "Соберите шведскую стенку по своему желанию!",
    text: "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.",
    urlImg: "/img/topSectionSwiper.jpg",
    urlLink: "*",
  },
  {
    title: "Соберите шведскую стенку по своему желанию!",
    text: "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.",
    urlImg: "/img/topSectionSwiper.jpg",
    urlLink: "*",
  },
  {
    title: "Соберите шведскую стенку по своему желанию!",
    text: "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.",
    urlImg: "/img/topSectionSwiper.jpg",
    urlLink: "*",
  },
  {
    title: "Соберите шведскую стенку по своему желанию!",
    text: "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.",
    urlImg: "/img/topSectionSwiper.jpg",
    urlLink: "*",
  },
  {
    title: "Соберите шведскую стенку по своему желанию!",
    text: "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.",
    urlImg: "/img/topSectionSwiper.jpg",
    urlLink: "*",
  },
];
export function SwiperSection() {
  return (
    <div className={styles.swiper__block}>
      <Swiper
        className="swipers_top"
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiper.updateSlidesClasses();
          console.log(swiper);
        }}
        onSlideChange={() => console.log("slide change")}>
        {arrSlider.map((item, index) => {
          return (
            <SwiperSlide className={styles.swiper__block_item} key={index}>
              <div
                className={styles["swiper__block_item"]}
                style={{ backgroundImage: `url(${item.urlImg}` }}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link to={item.urlLink}>Перейти в конструктор</Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
}
