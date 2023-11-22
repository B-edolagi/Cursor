import React, { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AuthModal from "../AuthModal";
import BuyModal from "../BuyModal";

interface ButtonProps {
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

interface AuthButtonProps extends ButtonProps {
  children: ReactNode;
  className: any;
  defaultValue: number;
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openAuthModal}
        type="button"
        disabled={props.disabled}
        className={styles[props.className]}
      >
        {props.children}
      </button>
      <AuthModal
        isOpen={isAuthModalOpen}
        onRequestClose={closeAuthModal}
        defaultValue={props.defaultValue}
      />
    </>
  );
};

export function Login(props: ButtonProps) {
  return (
    <AuthButton {...props} className="Login" defaultValue={0}>
      Войти
    </AuthButton>
  );
}

export function Register(props: ButtonProps) {
  return (
    <AuthButton {...props} className="Register" defaultValue={1}>
      Регистрация
    </AuthButton>
  );
}

export function Cursor(props: ButtonProps) {
  return (
    <AuthButton {...props} className="Cursor" defaultValue={1}>
      Присоединиться к Cursor
    </AuthButton>
  );
}

export function More(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={styles.More}
    >
      Подробнее
    </button>
  );
}

export function Next(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={styles.Next}
    >
      <BsArrowLeft />
    </button>
  );
}

export function Next1(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={styles.Next}
    >
      <BsArrowRight />
    </button>
  );
}

export function Buy(props: ButtonProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openAuthModal}
        type="button"
        disabled={props.disabled}
        className={styles.Buy}
      >
        Купить
      </button>
      <BuyModal
        isOpen={isAuthModalOpen}
        onRequestClose={closeAuthModal}
        defaultValue={0}
      />
    </>
  );
}

export function TryFree(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={styles.TryFree}
    >
      Попробовать бесплатно
    </button>
  );
}

export function Favourites(props: ButtonProps) {
  const [text, setText] = useState("Хочу пройти");
  const [img, setIMG] = useState("../src/assets/heart_unfill.svg");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [color, setColor] = useState("#171A53");
  const toggleFav = () => {
    if (text === "Хочу пройти") {
      setText("В списке желаний");
      setIMG("../src/assets/hear_fill.svg");
      setBackgroundColor("#171A53");
      setColor("#FFF");
    } else {
      setText("Хочу пройти");
      setIMG("../src/assets/heart_unfill.svg");
      setBackgroundColor("#ffffff");
      setColor("#171A53");
    }
  };
  return (
    <button
      onClick={toggleFav}
      type="button"
      disabled={props.disabled}
      className={styles.Fav}
      style={{ backgroundColor, color }}
    >
      <img src={img} alt="heart" /> {text}
    </button>
  );
}
