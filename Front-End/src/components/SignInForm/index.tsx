import React, { useState } from "react";
import styles from "./styles.module.css";

type SignUpFormProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};
type FormData = {
  username: string;
  password: string;
  email: string;
};

// ...

const SignUpForm: React.FC<SignUpFormProps> = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleLogin = () => {
    console.log(`Логин: ${formData.username}, Пароль: ${formData.password}`);
  };

  return (
    <div className={styles.Register__modal}>
      <form className={styles.Register__modal_form}>
        <div className={styles.Form__top}>
          {["email"].map((field) => (
            <React.Fragment key={field}>
              <label htmlFor={field}>
                {field === "username" ? "Имя пользователя" : "E-mail"}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field as keyof FormData]}
                placeholder={
                  field === "username" ? "Имя и фамилия" : "Ваш e-mail"
                }
                className={styles.Form__input}
                onChange={handleChange}
              />
            </React.Fragment>
          ))}
        </div>
        <div className={styles.Form__bottom}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Ваш пароль"
            className={styles.Form__input}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Войти
        </button>
        <a href="#">Восстановить пароль</a>
      </form>
      <div className={styles.Register__modal_bottom}>
        {["vk", "google-plus", "github"].map((icon) => (
          <a key={icon} href="#">
            <img src={`./src/assets/${icon}-svgrepo-com.svg`} alt={icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SignUpForm;
