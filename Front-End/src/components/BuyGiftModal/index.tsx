import React, { useState } from "react";
import styles from "./styles.module.css";

type SignUpFormProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

// ...

const BuyGiftForm: React.FC<SignUpFormProps> = () => {
  const [isPromocodeVisible, setPromocodeVisible] = useState(false);

  const togglePromocode = () => {
    setPromocodeVisible(!isPromocodeVisible);
  };

  return (
    <form action="" className={styles.Gift__form}>
      <div className={styles.Gift__form__wrap}>
        <div className={styles.Gift__form_wrap}>
          <div className={styles.Gift__form_email}>
            <label htmlFor="email">
              Email получателя <span>*</span>
            </label>
            <div className={styles.Email__flex}>
              <input type="email" name="email" id="email" />
              <span>Ссылка-приглашение в курс придёт на этот e-mail</span>
            </div>
          </div>
          <div className={styles.Gift__form_time}>
            <label htmlFor="date">Дата отправки</label>
            <div className={styles.Email__flex}>
              <input
                type="date"
                name="date"
                id="date"
                min="2024-01-01"
                max="2028-01-01"
              />
              <span>Если не задать, отправим сразу после оплаты</span>
            </div>
          </div>
          <div className={styles.Gift__form_text}>
            <label htmlFor="text">Поздравление</label>
            <div className={styles.Email__flex}>
              <textarea name="Text1"></textarea>
              <span>Добавьте приятных слов к подарку</span>
            </div>
          </div>
        </div>
        <div className={styles.Form__top}>
          <div className={styles.Form__top_links}>
            <div className={styles.Form__email}>
              <label htmlFor="email">Ваш e-mail</label>
              <span>example@gmail.com</span>
            </div>
            <div className={styles.Form__cost}>
              <label htmlFor="">Стоимость</label>
              <span>69 BYN</span>
            </div>
          </div>
          <form className={styles.Promocode}>
            <label onClick={togglePromocode}>
              У меня есть промокод{" "}
              <img src="../src/assets/arrow_down.svg" alt="arrow" />
            </label>

            <div
              className={`${styles.Promocode__div} ${
                isPromocodeVisible ? styles.visible : ""
              }`}
            >
              <input type="text" placeholder="Промокод на скидку" />
              <button>Применить</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.Form__bottom}>
        <button>Оплатить</button>
        <div className={styles.Form__bottom_links}>
          <a href="#">Как оплатить курс в рассрочку?</a>
          <a href="#">Отплатить от компании</a>
          <a href="#">Как оплатить курс в рассрочку?</a>
        </div>
        <p>
          Оплачивая доступ к этому курсу, вы соглашаетесь с условиями
          <a href="#"> пользовательского соглашения</a>. Если у вас возникли
          проблемы с оплатой или не пришло письмо с подарком,{" "}
          <a href="#">напишите нам</a> на help@course.org.
        </p>
      </div>
    </form>
  );
};
export default BuyGiftForm;
