import React from "react";
import styles from "./styles.module.css"; // Замените на ваш стиль
import { More, Next, Next1 } from "../../components/buttons";
import { CgSandClock } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
const data = [
  {
    title: "JavaScript. Основы языка и практика",
    description: "Артем Ефремов",
    rating: "4.5",
    additionalInfo: "(57 отзывов)",
    times: ["3 недели"],
    times1: ["3 часа в неделю"],
    imageUrl: "/src/assets/js.png",
    imageAlt: "program",
  }, // Здесь вы можете указать данные для первого элемента
  {
    title: '"Поколение Python": ООП',
    description: "Стрельцов Максим",
    rating: "4",
    additionalInfo: "(86 отзывов)",
    times: ["4 недели"],
    times1: ["3 часа в неделю"],
    imageUrl: "/src/assets/python.png",
    imageAlt: "hands",
  }, // Здесь вы можете указать данные для второго элемента
  {
    title: "HTML и CSS - полный курс по вёрстке",
    description: "Поляков Марк",
    rating: "4.5",
    additionalInfo: "(98 отзывов)",
    times: ["3 недели"],
    times1: ["3 часа в неделю"],
    imageUrl: "/src/assets/html.png",
    imageAlt: "php",
  }, // Здесь вы можете указать данные для третьего элемента
  // Добавьте данные для остальных элементов
];

function BestCourses() {
  return (
    <section className={styles.Section_Online}>
      <div className={styles.Section_Online_wrap}>
        <div className={styles.Section_Online_title}>
          <h2 className={styles.Main_h2}>Подборка лучших курсов</h2>
          <a href="#">Все курсы</a>
        </div>
        <div className={styles.Main_block}>
          <Next />
          <div className={styles.Main_wrap}>
            <div className={styles.Wrap}>
              {data.map((item, index) => (
                <div key={index} className={styles.Wrap_title}>
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    width="300px"
                    height="171px"
                  />
                  <div className={styles.Title_inf}>
                    <h2 className={styles.Title_h2}>{item.title}</h2>
                    <p className={styles.Title_p}>{item.description}</p>
                    <div className={styles.Inf_rtng}>
                      <div className={styles.Rtng}>
                        <div className={styles.Full}>
                          <img src="./src/assets/Star_full.svg" alt="star" />
                        </div>
                        <div className={styles.Full}>
                          <img src="./src/assets/Star_full.svg" alt="star" />
                        </div>
                        <div className={styles.Full}>
                          <img src="./src/assets/Star_full.svg" alt="star" />
                        </div>
                        <div className={styles.Full}>
                          <img src="./src/assets/Star_full.svg" alt="star" />
                        </div>
                        <div className={styles.Half}>
                          <img src="./src/assets/Star_half.svg" alt="star" />
                        </div>
                      </div>
                      <div className={styles.Rtng_title}>
                        <p>{item.rating}</p>
                        <p>{item.additionalInfo}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.Wrap_Time}>
                    {item.times &&
                      item.times.map((time, timeIndex) => (
                        <div key={timeIndex} className={styles.Time_wks}>
                          <div className={styles.snd}>
                            {" "}
                            <CgSandClock />
                          </div>
                          <p className={styles.snd_p}>{time}</p>
                        </div>
                      ))}
                    {item.times &&
                      item.times1.map((time, timeIndex) => (
                        <div key={timeIndex} className={styles.Time_wks}>
                          <div className={styles.snd}>
                            {" "}
                            <FiWatch />
                          </div>
                          <p className={styles.snd_p}>{time}</p>
                        </div>
                      ))}
                  </div>
                  <More />
                </div>
              ))}
            </div>
          </div>
          <Next1 />
        </div>
      </div>
    </section>
  );
}

export default BestCourses;
