import React from "react";

import styles from "./ComponentSwaiper.module.scss";
import { HandySvg } from "handy-svg";
const img = [
  "/img/sw_1.jpeg",
  "/img/sw_2.jpeg",
  "/img/sw_3.jpeg",
  "/img/sw_2.jpeg",
  "/img/sw_1.jpeg",
  "/img/sw_2.jpeg",
  "/img/sw_3.jpeg",
  "/img/sw_2.jpeg",
  "/img/sw_3.jpeg",
  "/img/sw_2.jpeg",
  "/img/sw_3.jpeg",
  "/img/sw_3.jpeg",
  "/img/sw_2.jpeg",
  "/img/sw_3.jpeg",
  "/img/sw_2.jpeg",
  "/img/sw_3.jpeg",
];
export function ComponentSwaiper() {
  // ширина блока swiper
  const widthItem = React.useRef<HTMLDivElement>();
  const widthList = React.useRef<HTMLDivElement>();
  const [listWidth, setListWidth] = React.useState(0);
  const [swipItem, setSwipItem] = React.useState(4);
  const [widthItemSwiper, setWidthItemSwiper] = React.useState(580);
  //swipe 1
  const [click, setClick] = React.useState(1);
  const [maxClick, setMaixClick] = React.useState(1);
  const [leftList, setLeftList] = React.useState(0);
  const legthItem = React.useRef<any | number>(0);

  function onclickPrev() {
    setClick(click - 1);
    if (click <= 1) {
      setClick(maxClick);
      setLeftList(widthItemSwiper * (maxClick - 1));
      return;
    }
    setLeftList(leftList - widthItemSwiper);
  }
  function onclickNext() {
    setClick(click + 1);
    if (click >= maxClick) {
      setLeftList(0);
      setClick(1);
      return;
    }
    setLeftList(leftList + widthItemSwiper);
  }
  // swipe 2
  const widthSwipeTwo = React.useRef<any>();

  const [swipeTwoStatus, setSwipeTwoStatus] = React.useState(false);
  const [coordinatesSwipeTwo, setCoordinatesSwipeTwo] = React.useState(null);
  const [leftListTwo, setLeftListTwo] = React.useState(0);
  const [widthSwipeList, setWidthSwipeList] = React.useState(0);

  function swipeTwoStart(clientX: any) {
    const maxWidth = widthSwipeList - (widthSwipeList - (maxClick - swipItem) * 150);
    if (coordinatesSwipeTwo > clientX) {
      if (swipeTwoStatus) {
        setSwipeTwoStatus(false);
        setCoordinatesSwipeTwo(null);
        if (leftListTwo < maxWidth) {
          setLeftListTwo(leftListTwo + 150);
        }
      }
    }
    if (coordinatesSwipeTwo < clientX) {
      if (swipeTwoStatus) {
        setSwipeTwoStatus(false);
        setCoordinatesSwipeTwo(null);
        if (leftListTwo > 0) {
          setLeftListTwo(leftListTwo - 150);
        }
      }
    }
  }

  // отлеживание нажатия на изображение из swipeTwo
  function onClickSwipeTwo(index: number) {
    setLeftList(widthItemSwiper * index);
    setClick(index + 1);
  }

  React.useEffect(() => {
    // количество элементов в первом блоке
    setMaixClick(legthItem.current.childElementCount);
    setWidthSwipeList(widthSwipeTwo.current.offsetWidth);
    setListWidth(widthList.current.offsetWidth);
    setWidthItemSwiper(widthItem.current.offsetWidth);
  }, []);
  React.useEffect(() => {
    // console.log(listWidth);
    if (listWidth === 280) return setSwipItem(2);
    if (listWidth === 400) return setSwipItem(2.5);
    if (listWidth === 500) return setSwipItem(3.3);
    if (listWidth === 580) return setSwipItem(4);
  }, [listWidth]);

  return (
    <>
      <div className={styles.swiper}>
        <div className={styles.swiper_prevBtn} onClick={onclickPrev}>
          <HandySvg src="/img/btn_prev.svg" />
        </div>
        <div className={styles.swiper_block_items}>
          <div
            ref={legthItem}
            style={{ left: `${-leftList}px` }}
            className={styles.swiper_block_items__list}>
            {img.map((item, index) => {
              return (
                <div ref={widthItem} key={index} className={styles.swiper_block_items__list_item}>
                  <img src={item} alt="" />
                  <p>{`${click}/${maxClick}`}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div onClick={onclickNext} className={styles.swiper_nextBtn}>
          <HandySvg src="/img/btn_next.svg" />
        </div>
      </div>
      <div className={styles.swiper_two}>
        <div ref={widthList} className={styles.swiper_two__list}>
          <div
            ref={widthSwipeTwo}
            onDragStart={(event) => {
              setCoordinatesSwipeTwo(event.clientX);
              setSwipeTwoStatus(true);
            }}
            onDrag={(event) => {
              swipeTwoStart(event.clientX);
            }}
            onDragEnd={() => {
              return false;
            }}
            className={styles.swiper_two__list_items}
            style={{ left: `${-leftListTwo}px` }}>
            {img.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    onClickSwipeTwo(index);
                  }}
                  key={index}
                  className={`${styles.swiper_two__list_items_item} ${
                    index + 1 === click && styles.swiper_two__list_items_item_active
                  }`}>
                  <img src={item} alt="" />
                  <p>{index + 1}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
