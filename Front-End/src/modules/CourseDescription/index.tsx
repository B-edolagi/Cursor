import { Favorite } from "@mui/icons-material";
import { Buy, Favourites, TryFree } from "../../components/buttons";
import styles from "./styles.module.css";
export default function CourseDescription() {
  const Learn = () => {
    const data = [
      "Изучите все инструменты Figma",
      "Изучите современные техники и приемы дизайна",
      "Научитесь азам работы в Photoshop",
      "Узнаете больше про профессии UX UI дизайнер",
      "Узнаете что такое web design на практике",
      "Научитесь работать с изображениями в Figma",
      "Научитесь подбирать правильные цвета для ваших сайтов",
      "Научитесь подбирать правильные шрифты для ваших сайтов",
      "Узнаете как работать с контрастом на веб страницах",
      "Научитесь сочетать элементы на веб страницах",
      "Узнаете что такое адаптивный дизайн",
      "Научитесь адаптировать под любое мобильное устройство, любой сайт",
      "Узнаете как анимировать макеты",
      "Изучите места где можно черпать вдохновение для своих работ",
      "Знаете где найти идеальное изображение, иконки и иллюстрации для ваших сайтов",
      "Вы поймете как договариваться с потенциальным заказчиком",
      "Вы узнаете как составлять бриф с потенциальным заказчиком",
      "Изучите базу по работе в Photoshop",
    ];
    return (
      <div className={styles.Learn}>
        <h2>Чему вы научитесь</h2>
        <div className={styles.Learn__title}>
          {data.map((item, index) => (
            <div className={styles.Learn__title_wrap} key={index}>
              <p>
                <img src="../src/assets/icon-check.svg" alt="check" />
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const Aside = () => {
    return (
      <aside className={styles.Aside}>
        <div className={styles.Aside__container}>
          <div className={styles.Aside__container_btns}>
            <h2>69 BYN</h2>
            <Buy />
            <TryFree />
            <Favourites />
          </div>
          <div className={styles.Aside__container_timing}>
            <div className={styles.Aside__container_buy}>
              <h3>Учиться можно сразу</h3>
              <div className={styles.Buy__container}>
                <div className={styles.Buy__container_flex}>
                  <img src="../src/assets/bag(small).svg" alt="bag" />
                  <p>Купить от компании</p>
                </div>
                <div className={styles.Buy__container_flex}>
                  <img src="../src/assets/gift-svgrepo-com.svg" alt="gift" />
                  <p>Купить в подарок</p>
                </div>
              </div>
            </div>
            <div className={styles.Time__container}>
              <span>В курс входят</span>
              <div className={styles.Time__container_wrap}>
                <p>
                  <span>112</span> часов
                </p>
                <p>
                  <span>13</span> часов <span>47</span> минут видео
                </p>
                <p>
                  <span>1</span> тест
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  };
  const Containers = () => {
    const arr = [
      {
        title: "Введение",
        inf: "Вступление",
        figma: "Скачиваем Figma и материалы для прохождения курса",
        call: "Оставайтесь со мной на связи",
      },
    ];
    const blocks = Array.from({ length: 12 }, (_, index) => (
      <div className={styles.Container__wrap}>
        <h3>{arr[0].title}</h3>
        <ul className={styles.Container__wrap_inf}>
          <li>{arr[0].inf}</li>
          <li>{arr[0].figma}</li>
          <li>{arr[0].call}</li>
        </ul>
      </div>
    ));
    return (
      <div className={styles.Container}>
        <div className={styles.Container__Card}>{blocks}</div>
      </div>
    );
  };
  const Reward = () => {
    return (
      <div className={styles.Reward}>
        <div className={styles.Reward__container}>
          <h3>Что вы получаете</h3>
          <ul className={styles.Reward__ul}>
            <li>Сертификат</li>
            <li>Практические навыки web design</li>
            <li>
              Ответы на вопросы возникшие в процессе прохождения курса в течении
              дня
            </li>
            <li>Навыки для старта работы на фрилансе</li>
            <li>Несколько современных проектов в портфолио</li>
          </ul>
        </div>
      </div>
    );
  };
  const Rating = () => {
    const arr = [
      {
        titile:
          "Огромная благодарность Дмитрию за прекрасный курс!Очень понятно, доступным языком изложены самые непростые темы. Быстрая обратная связь. Дмитрий, вы замечательный преподаватель! На очереди к изучению ваши курсы по Фотошопу и Адоб Иллюстатору )",
        user: "Анна Плужникова",
        time: "17 дней назад",
      },
    ];
    return (
      <div className={styles.Rating}>
        <div className={styles.Rating__flex}>
          <div className={styles.Rating__title}>
            <h2>Отзывы прошедших курс</h2>
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
          </div>
          <div className={styles.Rating__container}>
            {Array.from({ length: 5 }, (item, index) => (
              <div className={styles.Rating__container_wrap}>
                <div className={styles.Wrap__stars}>
                  {Array.from({ length: 5 }, () => (
                    <img
                      src="../src/assets/Star_full.svg"
                      alt="star"
                      width="15px"
                      height="15px"
                    />
                  ))}
                </div>
                <div className={styles.Wrap__title}>
                  <p>
                    Огромная благодарность Дмитрию за прекрасный курс! Очень
                    понятно, доступным языком изложены самые непростые темы.
                    Быстрая обратная связь. Дмитрий, вы замечательный
                    преподаватель! На очереди к изучению ваши курсы по Фотошопу
                    и Адоб Иллюстатору )
                  </p>
                  <div className={styles.Wrap__title_user}>
                    <a href="#">Анна Плужникова</a>
                    <span>17 дней назад</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button>
          Показать еще <img src="../src/assets/arrow_down.svg" alt="arrow" />
        </button>
      </div>
    );
  };
  return (
    <section className={styles.Description}>
      <div className={styles.Description__container}>
        {Aside()}
        {Learn()}
        {Containers()}
        {Reward()}
        {Rating()}
      </div>
    </section>
  );
}
