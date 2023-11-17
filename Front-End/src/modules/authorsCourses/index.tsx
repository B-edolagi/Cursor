import React from "react";
import styles from "./styles.module.css";
import { More, Next, Next1 } from "../../components/buttons";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 0,
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
  },
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
];

function AuthorsCourses() {
  const navigate = useNavigate();

  const handleCursorClick = (id: number) => {
    navigate(`/prfsr-main/${id}`);
  };

  return (
    <section className={styles.Section_Online}>
      <div className={styles.Section_Online_wrap}>
        <h2 className={styles.Main_h2}>Авторы курсов</h2>
        <div className={styles.Main_block}>
          {data.map((item) => (
            <div
              key={item.id}
              className={styles.Wrap}
              onClick={() => handleCursorClick(item.id)}
            >
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
      </div>
    </section>
  );
}

export default AuthorsCourses;
