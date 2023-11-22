import React, { useState } from "react";
import styles from "./styles.module.css";

type SignUpFormProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

// ...

const BuyUrSelfForm: React.FC<SignUpFormProps> = () => {
  const [isPromocodeVisible, setPromocodeVisible] = useState(false);

  const togglePromocode = () => {
    setPromocodeVisible(!isPromocodeVisible);
  };
  return (
    <div className={styles.Register__modal}>
      <form className={styles.Register__modal_form}>
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
    </div>
  );
};

export default BuyUrSelfForm;
