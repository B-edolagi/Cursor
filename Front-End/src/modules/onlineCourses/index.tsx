import React from "react";
import styles from "./styles.module.css"; // Замените на ваш стиль
import { More, Next, Next1 } from "../../components/buttons";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const data = [
  {
    title: "Учебный курс для веб-разработчиков",
    description: "Поляков Марк",
    rating: "4.5",
    additionalInfo: "(98 отзывов)",
    times: ["3 недели"],
    times1: ["3 часа в неделю"],
    imageUrl: "/src/assets/programming.png",
    imageAlt: "program",
  }, // Здесь вы можете указать данные для первого элемента
  {
    title: "Веб Дизайн в Figma. Основы UI/UX дизайна",
    description: "Стрельцов Максим",
    rating: "4",
    additionalInfo: "(86 отзывов)",
    times: ["4 недели"],
    times1: ["3 часа в неделю"],
    imageUrl: "/src/assets/hands.png",
    imageAlt: "hands",
  }, // Здесь вы можете указать данные для второго элемента
  {
    title: "Основы PHP: Структура и синтаксис",
    description: "Поляков Марк",
    rating: "4.5",
    additionalInfo: "(99 отзывов)",
    times: ["3 недели"],
    times1: ["3 часа в неделю"],
    imageUrl: "/src/assets/php.png",
    imageAlt: "php",
  }, // Здесь вы можете указать данные для третьего элемента
  // Добавьте данные для остальных элементов
];
const data1 = [
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
    title: "Blender. Курс 3D моделирования",
    description: "Стрельцов Максим",
    rating: "4",
    additionalInfo: "(86 отзывов)",
    times: ["4 недели"],
    times1: ["3 часа в неделю"],
    imageUrl: "/src/assets/inf.png",
    imageAlt: "hands",
  }, // Здесь вы можете указать данные для второго элемента
  {
    title: "SEO. Продвижение в поисковых системах",
    description: "Елена Абрамова",
    rating: "4.5",
    additionalInfo: "(57 отзывов)",
    times: ["3 недели"],
    times1: ["2 часа в неделю"],
    imageUrl: "/src/assets/graph.png",
    imageAlt: "php",
  }, // Здесь вы можете указать данные для третьего элемента
  // Добавьте данные для остальных элементов
];

function MyComponent() {
  const navigate = useNavigate(); // Create a navigate function

  const handleCursorClick = () => {
    // Use navigate function to navigate to the desired path
    navigate("/course");
  };

  return (
    <section className={styles.Section_Online}>
      <div className={styles.Section_Online_wrpa}>
        <h2 className={styles.Main_h2}>Онлайн-курсы</h2>
        <div className={styles.Online_wrap}>
          <p className={styles.Main_P}>Новые курсы</p>
          <p className={styles.Second_P}>Веб-разработка</p>
          <p className={styles.Second_P}>Дизайн и 3D</p>
          <p className={styles.Second_P}>Аналитика данных</p>
          <p className={styles.Second_P}>Маркетинг и продажи</p>
        </div>
        <div className={styles.Main_block}>
          <Next />
          <div className={styles.Main_wrap}>
            <div className={styles.Wrap}>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={styles.Wrap_title}
                  onClick={handleCursorClick}
                >
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
                            <img src="./src/assets/SandClock.svg" alt="star" />
                          </div>
                          <p className={styles.snd_p}>{time}</p>
                        </div>
                      ))}
                    {item.times &&
                      item.times1.map((time, timeIndex) => (
                        <div key={timeIndex} className={styles.Time_wks}>
                          <div className={styles.snd}>
                            {" "}
                            <img src="./src/assets/Watch.svg" alt="star" />
                          </div>
                          <p className={styles.snd_p}>{time}</p>
                        </div>
                      ))}
                  </div>
                  <More />
                </div>
              ))}
            </div>
            <div className={styles.Wrap}>
              {data1.map((item, index) => (
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
                            <img src="./src/assets/SandClock.svg" alt="star" />
                          </div>
                          <p className={styles.snd_p}>{time}</p>
                        </div>
                      ))}
                    {item.times &&
                      item.times1.map((time, timeIndex) => (
                        <div key={timeIndex} className={styles.Time_wks}>
                          <div className={styles.snd}>
                            {" "}
                            <img src="./src/assets/Watch.svg" alt="star" />
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

export default MyComponent;
