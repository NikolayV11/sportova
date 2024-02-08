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
];
export function ComponentSwaiper() {
  //swipe 1
  const [click, setClick] = React.useState(1);
  const [maxClick, setMaixClick] = React.useState(1);
  const [leftList, setLeftList] = React.useState(0);
  const legthItem = React.useRef<any | number>(0);
  function onclickPrev() {
    setClick(click - 1);
    if (click <= 1) {
      setClick(maxClick);
      setLeftList(580 * (maxClick - 1));
      return;
    }
    setLeftList(leftList - 580);
  }
  function onclickNext() {
    setClick(click + 1);
    console.log(`click ${click}, maxClick ${maxClick}`);
    if (click >= maxClick) {
      console.log(`click ${click}, maxClick ${maxClick} if`);
      setLeftList(0);
      setClick(1);
      return;
    }
    setLeftList(leftList + 580);
  }
  // swipe 2
  const widthSwipeTwo = React.useRef<any>();
  const [mouseSwipeTwo, setMouseSwipeTwo] = React.useState(null);
  const [swipeTwoStatus, setSwipeTwoStatus] = React.useState(false);
  const [coordinatesSwipeTwo, setCoordinatesSwipeTwo] = React.useState(null);
  const [leftListTwo, setLeftListTwo] = React.useState(0);
  const [widthSwipeList, setWidthSwipeList] = React.useState(0);

  function swipeTwoListLeft(num: number) {
    if (swipeTwoStatus) {
      console.log(num);
      setSwipeTwoStatus(false);
    }
  }
  function swipeTwoListRight(num: number) {
    if (swipeTwoStatus) {
      console.log(num);
      setSwipeTwoStatus(false);
    }
  }
  function swipeTwoStart(clientX: any) {
    if (coordinatesSwipeTwo > clientX) {
      swipeTwoListLeft(1);
      return;
    }
    if (coordinatesSwipeTwo < clientX) {
      swipeTwoListRight(2);
      return;
    }
  }

  React.useEffect(() => {
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
              // console.log("onDragStart", event.clientX);
            }}
            onDrag={(event) => {
              swipeTwoStart(event.clientX);
              // console.log("onDrag провели удерживая", event.clientX);
            }}
            onDragEnd={(event) => {
              setCoordinatesSwipeTwo(null);
            }}
            className={styles.swiper_two__list_items}
            style={{ left: `${-leftListTwo}px` }}>
            {img.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    console.log("click");
                  }}
                  key={index}
                  className={styles.swiper_two__list_items_item}>
                  <img src={item} alt="" />
                  <p>{index}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
