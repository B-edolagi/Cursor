import styles from "./styles.module.css";

export default function CourseMain() {
  return (
    <section className={styles.Course}>
      <div className={styles.Course__container}>
        <div className={styles.Course__container_title}>
          <div className={styles.Title__inf}>
            <h2>
              Веб дизайн в Figma с нуля до результата! Основы UX/UI Web Design
            </h2>
            <p>
              В этом курсе, вы найдете все для успешного старта карьеры в UX/UI.
              Быстрый старт в профессию веб дизайнер.
            </p>
          </div>
          <div className={styles.Title__about}>
            <div>
              <img src="../src/assets/graph(small).svg" alt="graph" />
              <p>Начальный уровень</p>
            </div>
            <div>
              <img src="../src/assets/Watch.svg" alt="watch" />
              <p>4-5 часов в неделю</p>
            </div>
            <div>
              <img src="../src/assets/document-view.svg" alt="view" />
              <p>Часть программы</p>
            </div>
            <div>
              <img
                src="../src/assets/dblk.svg"
                alt="srtf"
                width="20px"
                height="20px"
              />
              <p>Сертификат Cursor</p>
            </div>
          </div>
        </div>
        <div className={styles.Course__container_video}></div>
      </div>
    </section>
  );
}
