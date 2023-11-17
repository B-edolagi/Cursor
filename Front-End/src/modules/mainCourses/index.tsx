import React from "react";
import styles from "./styles.module.css";
import samsungImage from "../../assets/samsung.png";
import vkImage from "../../assets/vk.png";
import yandexImage from "../../assets/yandex.png";
import cscImage from "../../assets/csc.png";
import bioinfImage from "../../assets/bioinf.png";
import rudnImage from "../../assets/rudn.png";

const images = [
  samsungImage,
  vkImage,
  yandexImage,
  cscImage,
  bioinfImage,
  rudnImage,
];

export default function MainCourses() {
  return (
    <section className={styles.MainCourses}>
      <div className={styles.MainCourses_wrap}>
        <h2 className={styles.WrapH2}>Размещают курсы на Cursor</h2>
        <div className={styles.WrapImages}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image-${index}`}
              width="144px"
              height="82px"
              className={styles.Img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
