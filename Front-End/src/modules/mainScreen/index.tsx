import { Cursor } from "../../components/buttons";
import styles from "./styles.module.css";
export function MainScreen() {
  const text = [
    "Маркетплейс онлайн-курсов от профессионалов",
    "Широкий выбор образовательных программ по маркетингу, дизайну, программированию, разработке игр, управлению и в других сферах",
  ];
  const img = () => {
    return (
      <img
        src="../src/assets/1.png"
        alt="MainScrenn"
        width="573px"
        height="422px"
      />
    );
  };
  return (
    <section className={styles.MainScreen}>
      <div className={styles.Title}>
        <div className={styles.TitleInformation}>
          <h2 className={styles.TitleH2}>{text[0]}</h2>
          <p className={styles.TitleP}>{text[1]}</p>
        </div>
        <Cursor />
      </div>
      {img()}
    </section>
  );
}
