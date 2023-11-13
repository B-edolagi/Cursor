import { PropsWithChildren, useState } from "react";
import styles from "./styles.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import AuthModal from "../AuthModal";
export interface ButtonProps {
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function Login(props: PropsWithChildren<ButtonProps>) {
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
        className={styles.Login}
      >
        Войти
      </button>
      <AuthModal isOpen={isAuthModalOpen} onRequestClose={closeAuthModal} />
    </>
  );
}
export function Register(props: PropsWithChildren<ButtonProps>) {
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
        className={styles.Register}
      >
        Регистрация
      </button>
      <AuthModal isOpen={isAuthModalOpen} onRequestClose={closeAuthModal} />
    </>
  );
}
export function Cursor(props: PropsWithChildren<ButtonProps>) {
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
        className={styles.Cursor}
      >
        Присоедениться к Cursor
      </button>
      <AuthModal isOpen={isAuthModalOpen} onRequestClose={closeAuthModal} />
    </>
  );
}
export function More(props: PropsWithChildren<ButtonProps>) {
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
export function Next(props: PropsWithChildren<ButtonProps>) {
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

export function Next1(props: PropsWithChildren<ButtonProps>) {
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
