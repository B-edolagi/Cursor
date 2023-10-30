import React from "react";
import styles from "./styles.module.css"; // Замените на ваш стиль
import { More } from "../../components/buttons";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
const data = [
  {
    title: "Учебный курс для веб-разработчиков",
    description: "Поляков Марк",
    rating: "4.5",
    additionalInfo: "(98 отзывов)",
    times: [3, "недели"],
    times1: [3, "часа в неделю"],
    imageUrl: "/src/assets/programming.png",
    imageAlt: "program",
  }, // Здесь вы можете указать данные для первого элемента
  {
    title: "Веб Дизайн в Figma. Основы UI/UX дизайна",
    description: "Стрельцов Максим",
    rating: "4",
    additionalInfo: "(86 отзывов)",
    times: [4, "недели"],
    times1: [3, "часа в неделю"],
    imageUrl: "/src/assets/hands.png",
    imageAlt: "hands",
  }, // Здесь вы можете указать данные для второго элемента
  {
    title: "Основы PHP: Структура и синтаксис",
    description: "Поляков Марк",
    rating: "4.5",
    additionalInfo: "(99 отзывов)",
    times: [3, "недели"],
    times1: [3, "часа в неделю"],
    imageUrl: "/src/assets/php.png",
    imageAlt: "php",
  }, // Здесь вы можете указать данные для третьего элемента
  // Добавьте данные для остальных элементов
];

function MyComponent() {
  return (
    <section className={styles.Section_Online}>
      <h2>Онлайн-курсы</h2>
      <div>
        <p className={styles.Main_P}>Новые курсы</p>
        <p className={styles.Second_P}>Веб-разработка</p>
        <p className={styles.Second_P}>Дизайн и 3D</p>
        <p className={styles.Second_P}>Аналитика данных</p>
        <p className={styles.Second_P}>Маркетинг и продажи</p>
      </div>
      <div>
        {/* 11 */}
        <div>
          <div className={styles.Wrap}>
            {data.map((item, index) => (
              <div key={index} className={styles.Wrap_title}>
                <img src={item.imageUrl} alt={item.imageAlt} />
                <div className={styles.Title_inf}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className={styles.Inf_rtng}>
                    <div className={styles.Rtng}>
                      <div className={styles.Full}>
                        <BsStarFill />
                      </div>
                      <div className={styles.Full}>
                        <BsStarFill />
                      </div>
                      <div className={styles.Full}>
                        <BsStarFill />
                      </div>
                      <div className={styles.Full}>
                        <BsStarFill />
                      </div>
                      <div className={styles.Half}>
                        <BsStarHalf />
                      </div>
                    </div>
                    <p>{item.rating}</p>
                    <p>{item.additionalInfo}</p>
                  </div>
                </div>
                <div className={styles.Wrap_Time}>
                  {item.times &&
                    item.times.map((time, timeIndex) => (
                      <div key={timeIndex} className={styles.Time_wks}>
                        <div className={styles.snd}></div>
                        <p>{time}</p>
                      </div>
                    ))}
                  {item.times &&
                    item.times1.map((time, timeIndex) => (
                      <div key={timeIndex} className={styles.Time_hrs}>
                        <div className={styles.snd}></div>
                        <p>{time}</p>
                      </div>
                    ))}
                </div>
                <More />
              </div>
            ))}
          </div>
        </div>
        {/* 11 */}
      </div>
    </section>
  );
}

export default MyComponent;
