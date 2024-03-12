import React from "react";
import styles from "./SlideCompany.module.scss";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const img = [
  "/img/swiper_1.jpeg",
  "/img/swiper_2.jpeg",
  "/img/swiper_1.jpeg",
  "/img/swiper_2.jpeg",
  "/img/swiper_2.jpeg",
  "/img/swiper_1.jpeg",
  "/img/swiper_2.jpeg",
  "/img/swiper_1.jpeg",
  "/img/swiper_2.jpeg",
  "/img/swiper_1.jpeg",
  "/img/swiper_2.jpeg",
];
export function SlideCompany() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
  const [amountOfSwiper, setAmountOfSwiper] = React.useState<number>(4);

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);

      if (width <= 450) {
        setAmountOfSwiper(2);
      }
      if (width >= 920) {
        setAmountOfSwiper(3);
      }
      if (width >= 1100) {
        setAmountOfSwiper(4);
      }
      console.log(width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className={styles.block}>
      <div className={`swiper1 ${styles.block_swiper1}`}>
        <Swiper
          style={{}}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`mySwiper2 ${styles.block_swiper1_items}`}>
          {img.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={`swiper2 ${styles.block_swiper2}`}>
        <Swiper
          onSwiper={setThumbsSwiper}
          onClick={(swiper: any) => {
            console.log(swiper.clickedIndex);
            setThumbsSwiper(swiper.clickedIndex);
          }}
          spaceBetween={10}
          slidesPerView={amountOfSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper">
          {img.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
