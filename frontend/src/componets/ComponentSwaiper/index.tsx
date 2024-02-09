import React from "react";

import styles from "./ComponentSwaiper.module.scss";
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
  //swipe 1
  const [click, setClick] = React.useState(1);
  const [maxClick, setMaixClick] = React.useState(1);
  const [leftList, setLeftList] = React.useState(0);
  const legthItem = React.useRef<any | number>(0);

  function onclickPrev() {
    setClick(click - 1);
    console.log(`leftList:${leftList}`);
    if (click <= 1) {
      setClick(maxClick);
      setLeftList(580 * (maxClick - 1));
      return;
    }
    setLeftList(leftList - 580);
  }
  function onclickNext() {
    setClick(click + 1);
    if (click >= maxClick) {
      setLeftList(0);
      setClick(1);
      return;
    }
    setLeftList(leftList + 580);
  }
  // swipe 2
  const widthSwipeTwo = React.useRef<any>();
  const [swipeTwoStatus, setSwipeTwoStatus] = React.useState(false);
  const [coordinatesSwipeTwo, setCoordinatesSwipeTwo] = React.useState(null);
  const [leftListTwo, setLeftListTwo] = React.useState(0);
  const [widthSwipeList, setWidthSwipeList] = React.useState(0);

  function swipeTwoStart(clientX: any) {
    const maxWidth = widthSwipeList - (widthSwipeList - (maxClick - 4) * 150);
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
    setLeftList(580 * index);
    setClick(index + 1);
  }

  React.useEffect(() => {
    // количество элементов в первом блоке
    setMaixClick(legthItem.current.childElementCount);
    setWidthSwipeList(widthSwipeTwo.current.offsetWidth);
  }, []);

  return (
    <>
      <div className={styles.swiper}>
        <div className={styles.swiper_prevBtn} onClick={onclickPrev}></div>
        <div className={styles.swiper_block_items}>
          <div
            ref={legthItem}
            style={{ left: `${-leftList}px` }}
            className={styles.swiper_block_items__list}>
            {img.map((item, index) => {
              return (
                <div key={index} className={styles.swiper_block_items__list_item}>
                  <img src={item} alt="" />
                  <p>{`${click}/${maxClick}`}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div onClick={onclickNext} className={styles.swiper_nextBtn}></div>
      </div>
      <div className={styles.swiper_two}>
        <div className={styles.swiper_two__list}>
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
