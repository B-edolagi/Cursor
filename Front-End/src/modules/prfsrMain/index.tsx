import Footer from "../footer";
import Header from "../header";
import styles from "./styles.module.css";
const users = [
  {
    name: "Пользователь",
    time: "05 ноября, 09:46",
    comment:
      "Очень понравился курс, как и курс по анимации, впереди фотошоп и тильда, уже приобрела по скидке кстати)",
    phtuser: "../src/assets/userpht.svg",
  },
  {
    name: "Пользователь",
    time: "05 ноября, 09:46",
    comment:
      "Очень понравился курс, как и курс по анимации, впереди фотошоп и тильда, уже приобрела по скидке кстати)",
    phtuser: "../src/assets/userpht.svg",
  },
  {
    name: "Пользователь",
    time: "05 ноября, 09:46",
    comment:
      "Очень понравился курс, как и курс по анимации, впереди фотошоп и тильда, уже приобрела по скидке кстати)",
    phtuser: "../src/assets/userpht.svg",
  },
];
function PrfsrMain() {
  return (
    <>
      <section className={styles.Prfsr__section}>
        <div className={styles.Prfsr__section_wrap}>
          <div className={styles.Wrap__title}>
            <div className={styles.Wrap__title_photo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
              >
                <rect width="150" height="150" rx="5" fill="white" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="149"
                  height="149"
                  rx="4.5"
                  stroke="black"
                  stroke-opacity="0.5"
                />
                <path
                  d="M75.0011 66.2014C85.8263 66.2014 94.6018 57.4259 94.6018 46.6007C94.6018 35.7755 85.8263 27 75.0011 27C64.1759 27 55.4004 35.7755 55.4004 46.6007C55.4004 57.4259 64.1759 66.2014 75.0011 66.2014Z"
                  stroke="black"
                  stroke-opacity="0.5"
                />
                <path
                  d="M114 118.47C112.961 99.5782 107.176 85.8021 74.9998 85.8021C42.824 85.8021 37.0398 99.5782 36 118.47"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-linecap="round"
                />
              </svg>
              <div className={styles.Photo_title}>
                {[
                  {
                    img: "../src/assets/dblk.svg",
                    number: "2 450",
                    title: "сертификатов выдано",
                  },
                  {
                    img: "../src/assets/bbb.svg",
                    number: "16",
                    title: "курсов",
                  },
                  {
                    img: "../src/assets/star.svg",
                    number: "12.7K",
                    title: "репутация",
                  },
                ].map((item, index) => (
                  <p key={index}>
                    <img src={item.img} alt="img" width="20px" height="20px" />
                    <span>{item.number}</span>
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.Wrap__title_line}></div>
            <div className={styles.Wrap__title_links}>
              <p>
                Профессионально обучаю работе с графическими редакторами Adobe,
                преподаю дизайн и веб разработку.
              </p>
              <div>
                {[
                  { img: "../src/assets/instg.svg" },
                  { img: "../src/assets/tlg.svg" },
                  { img: "../src/assets/ytb.svg" },
                ].map((item, index) => (
                  <a href="#" key={index}>
                    <img src={item.img} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.Wrap__inf}>
            <div className={styles.Wrap__inf_top}>
              <h2>Name Second</h2>
              <p>
                Обучил более 15000 студентов по всему миру на своих авторских
                онлайн курсах. Более 6000 реальных отзывов со средней оценкой
                4,83 из 5.00! Я преподаю веб дизайн, веб разработку и
                необходимое ПО (Photoshop Illustrator, Figma). Мой опыт
                преподавания складывается из 5 лет репетиторства на фрилансе, а
                так- же преподавания через онлайн школы и курсы, на мировых
                площадках по дистанционному обучению. Студенты моих курсов,
                отмечают лучшие мои качества в том, как я преподаю материал без
                зубрежки, весело и интересно.
              </p>
            </div>
            <div className={styles.Wrap__inf_bottom}>
              <div className={styles.Bottom__rating}>
                <h3>Рейтинг и отзывы</h3>
                <div className={styles.Bottom__rating_wrap}>
                  <div className={styles.Wrap_5}>
                    {" "}
                    <p>5</p>
                    <span>/5</span>
                  </div>
                  <img src="../src/assets/graphprfs.png" alt="graph" />
                </div>
              </div>
              <div className={styles.Bottom__slider}>
                {users.map((item, index) => (
                  <div className={styles.Bottom__slider_user}>
                    <div className={styles.User__title}>
                      <img src={item.phtuser} alt="phtuser" />
                      <div className={styles.Rating_main}>
                        {" "}
                        <div>
                          {" "}
                          <h3 className={styles.User__h3}>Пользователь</h3>
                          <p>05 ноября, 09:46</p>
                        </div>
                        <div className={styles.User__title_rtng}>
                          <img
                            src="../src/assets/Star_full.svg"
                            alt=""
                            height="10px"
                            width="10px"
                          />
                          <img
                            src="../src/assets/Star_full.svg"
                            alt=""
                            height="10px"
                            width="10px"
                          />
                          <img
                            src="../src/assets/Star_full.svg"
                            alt=""
                            height="10px"
                            width="10px"
                          />

                          <img
                            src="../src/assets/Star_full.svg"
                            alt=""
                            height="10px"
                            width="10px"
                          />
                          <img
                            src="../src/assets/Star_full.svg"
                            alt=""
                            height="10px"
                            width="10px"
                          />
                        </div>
                      </div>
                    </div>
                    <p className={styles.Bottom__p}>
                      Очень понравился курс, как и курс по анимации, впереди
                      фотошоп и тильда, уже приобрела по скидке кстати)
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PrfsrMain;
