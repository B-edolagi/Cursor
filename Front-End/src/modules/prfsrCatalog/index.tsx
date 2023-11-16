import { CiSearch } from "react-icons/ci";
import styles from "./styles.module.css";
import { CiHeart } from "react-icons/ci";
export default function PrfsrCatalog() {
  const arr = [
    {
      course:
        "Веб-дизайн в Figma с нуля до результата! Основы UX/UI Web Design",
      professor: "Илья Гвардиан",
      cost: "69 BYN",
      starSvg: "../src/assets/stardark.svg",
      starTitle: "5",
      endSvg: "../src/assets/usesmall.svg",
      endTitle: "2.2K",
      timeSvg: "../src/assets/Watch.svg",
      timeTitle: "14ч",
      srtfc: "../src/assets/dblk.svg",
    },
  ];
  const blocks = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className={styles.Container}>
      <div className={styles.Container__wrap}>
        <div className={styles.Container__wrap_title}>
          <h2>{arr[0].course}</h2>
          <p> {arr[0].professor}</p>
        </div>
        <div className={styles.Container__wrap_img}>
          {/* <div className={styles.Want}>Хочу пройти</div> */}
          <img src="../src/assets/img(test).png" alt="image" />
          <button>
            <CiHeart />
          </button>
        </div>
      </div>
      <div className={styles.Rating}>
        <div className={styles.Rating__flex}>
          <div className={styles.Rating__flex_title}>
            <img src={arr[0].starSvg} alt="star" height="12px" width="12px" />
            <p> {arr[0].starTitle}</p>
          </div>
          <div className={styles.Rating__flex_title}>
            {" "}
            <img src={arr[0].endSvg} alt="people" height="12px" width="12px" />
            <p> {arr[0].endTitle}</p>
          </div>
          <div className={styles.Rating__flex_title}>
            {" "}
            <img src={arr[0].timeSvg} alt="end" height="12px" width="12px" />
            <p> {arr[0].timeTitle}</p>
          </div>
          <img src={arr[0].srtfc} alt="srtfc" height="12px" width="12px" />
        </div>
        <h3>{arr[0].cost}</h3>
      </div>
    </div>
  ));

  return (
    <section className={styles.Prfsr__Catalog}>
      <div className={styles.Prfsr__Catalog_wrap}>
        <div className={styles.Search}>
          <CiSearch className={styles.Icon} />
          <input
            type="search"
            placeholder="Название курса или ID"
            className={styles.Search_main}
          />
        </div>
        <div className={styles.Wrap__main}>{blocks}</div>
      </div>
    </section>
  );
}
