import { Cursor } from "../../components/buttons";
import styles from "./styles.module.css";
export function MainScreen() {
  return (
    <section className={styles.MainScreen}>
      <div className={styles.Title}>
        <div className={styles.TitleInformation}>
          <h2 className={styles.TitleH2}>
            Маркетплейс онлайн-курсов от профессионалов
          </h2>
          <p className={styles.TitleP}>
            Широкий выбор образовательных программ по маркетингу, дизайну,
            программированию, разработке игр, управлению и в других сферах
          </p>
        </div>
        <Cursor />
      </div>
      <img
        src="../src/assets/1.png"
        alt="MainScrenn"
        width="573px"
        height="422px"
      />
    </section>
  );
}
