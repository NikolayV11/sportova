import React from "react";
import styles from "./ProductGallery.module.scss";

export function ProductGallery() {
  const [activeImg, setActiveImg] = React.useState(0);
  const gallery = [
    "/img/swedish_walls_gallery-6.jpeg",
    "/img/swedish_walls_gallery-5.jpeg",
    "/img/swedish_walls_gallery-4.jpeg",
    "/img/swedish_walls_gallery-3.jpeg",
    "/img/swedish_walls_gallery-2.jpeg",
    "/img/swedish_walls_gallery-1.jpeg",
  ];
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery_list}>
        {gallery.map((item, index) => {
          return (
            <img
              onClick={() => setActiveImg(index)}
              key={index}
              className={`${styles.gallery_list_img} ${
                activeImg === index ? styles.gallery_list_img_active : ""
              }`}
              src={item}
              alt="img"
            />
          );
        })}
      </div>
      <div
        style={{ backgroundImage: `url(${gallery[activeImg]})` }}
        className={styles.gallery_imgBlock}></div>
    </div>
  );
}
