import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";
type RegisterModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Здесь вы можете обработать введенные данные регистрации и выполнить необходимую логику
    console.log(`Логин: ${username}, Пароль: ${password}`);
    // Закрываем модальное окно
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Регистрация"
      className={styles.Register__modal}
    >
      <h2 className={styles.Register__modal_h2}>Регистрация</h2>
      <form className={styles.Register__modal_form}>
        <label htmlFor="username">Логин:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Зарегистрироваться
        </button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
