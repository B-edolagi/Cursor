import React from "react";
import styles from "./styles.module.css"; // Замените на ваш стиль
import { More, Next, Next1 } from "../../components/buttons";
const data = [
  {
    name: "Стрельцов Максим",
    title: "JavaScript, Pyton, C++",
    human: "./src/assets/human1.svg",
    star: "./src/assets/Star_full.svg",
    rating: "4.6",
    cmnts: "(89 отзывов)",
    stdnts_img: "./src/assets/Two-Person.svg",
    courses_img: "./src/assets/Document-1-Copy.svg",
    stdnts: "(2128 студентов)",
    courses: "(46 курсов)",
  }, // Здесь вы можете указать данные для первого элемента
  {
    name: "Артем Ефремов",
    title: "JavaScript, Pyton, C++",
    human: "./src/assets/human2.svg",
    star: "./src/assets/Star_full.svg",
    rating: "4.4",
    cmnts: "(67 отзывов)",
    stdnts_img: "./src/assets/Two-Person.svg",
    courses_img: "./src/assets/Document-1-Copy.svg",
    stdnts: "(1459 студентов)",
    courses: "(39 курсов)",
  }, // Здесь вы можете указать данные для второго элемента
  {
    name: "Елена Абрамова",
    title: "SEO,  контент маркетинг",
    human: "./src/assets/human3.svg",
    star: "./src/assets/Star_full.svg",
    rating: "4.5",
    cmnts: "(89 отзывов)",
    stdnts_img: "./src/assets/Two-Person.svg",
    courses_img: "./src/assets/Document-1-Copy.svg",
    stdnts: "(2128 студентов)",
    courses: "(46 курсов)",
  }, // Здесь вы можете указать данные для третьего элемента
  // Добавьте данные для остальных элементов
];

function AuthorsCourses() {
  return (
    <section className={styles.Section_Online}>
      <h2 className={styles.Main_h2}>Авторы курсов</h2>
      <div className={styles.Main_block}>
        {data.map((item, index) => (
          <div className={styles.Wrap}>
            <div className={styles.Wrap_title}>
              <img src={item.human} alt="human" />
              <div className={styles.Wrap_title_inf}>
                <div className={styles.Inf_inf}>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
                <div className={styles.Inf_title}>
                  <img src={item.star} alt="star" />
                  <p>
                    {item.rating} {item.cmnts}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.Wrap_inf}>
              <div className={styles.Wrap_inf_}>
                <img src={item.stdnts_img} alt="stdnt" />
                <p>{item.stdnts}</p>
              </div>
              <div className={styles.Wrap_inf_}>
                <img src={item.courses_img} alt="stdnt" />
                <p>{item.courses}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AuthorsCourses;
