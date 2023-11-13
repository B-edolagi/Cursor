import { FiArrowUpRight } from "react-icons/fi";
import styles from "./styles.module.css";
export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__container_top}>
          <div className={styles.Footer__container_title}>
            <div className={styles.Footer__container_inf}>
              <h2>
                Cursor <FiArrowUpRight />
              </h2>
              <p>Маркетплейс онлайн-курсов от префессионалов</p>
            </div>
            <div className={styles.Footer__time}>
              <h2> Телефон:</h2>
              <p>
                {" "}
                8 (029) 604-30-50<br></br>8 (025) 658-47-41
              </p>
            </div>
          </div>
          <div className={styles.Footer__container_rating}>
            <p className={styles.Footer_p}>
              Наш рейтинг <span>4.11 из 5 (на основании 5457 отзывов)</span>
            </p>
            <div>
              <img src="./src/assets/Star_full.svg" alt="star" />
              <img src="./src/assets/Star_full.svg" alt="star" />
              <img src="./src/assets/Star_full.svg" alt="star" />
              <img src="./src/assets/Star_full.svg" alt="star" />
              <img src="./src/assets/Star_half.svg" alt="star" />
            </div>
          </div>
        </div>
        <div className={styles.Footer__container_bottom}>
          <form action="#" className={styles.Form__bottom}>
            <label htmlFor="email">
              Подпишитесь, чтобы быть в курсе последних обновлений{" "}
            </label>
            <div className={styles.Form__bottom_title}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Введите свой email"
              />
              <button>Подписаться</button>
            </div>
          </form>
          <div>
            {[
              { src: "facebook.svg" },
              { src: "telegram-mono.svg" },
              { src: "Group.svg" },
              { src: "Group-1.svg" },
            ].map((item, index) => (
              <img src={`./src/assets/${item.src}`} alt="svg" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
