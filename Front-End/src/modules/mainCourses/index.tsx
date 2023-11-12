import styles from "./styles.module.css";

export default function MainCourses() {
  return (
    <section className={styles.MainCourses}>
      <div className={styles.MainCourses_wrap}>
        <h2 className={styles.WrapH2}>Размещают курсы на Cursor</h2>
        <div className={styles.WrapImages}>
          <img
            src="./src/assets/samsung.png"
            alt="samsung"
            width="144px"
            height="82px"
            className={styles.Img}
          />
          <img
            src="./src/assets/vk.png"
            alt="samsung"
            width="144px"
            height="82px"
            className={styles.Img}
          />
          <img
            src="./src/assets/yandex.png"
            alt="samsung"
            width="144px"
            height="82px"
            className={styles.Img}
          />
          <img
            src="./src/assets/csc.png"
            alt="samsung"
            width="144px"
            height="82px"
            className={styles.Img}
          />
          <img
            src="./src/assets/bioinf.png"
            alt="samsung"
            width="144px"
            height="82px"
            className={styles.Img}
          />
          <img
            src="./src/assets/rudn.png"
            alt="samsung"
            width="144px"
            height="82px"
            className={styles.Img}
          />
        </div>
      </div>
    </section>
  );
}
