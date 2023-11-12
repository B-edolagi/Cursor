import { PropsWithChildren, useState } from "react";
import styles from "./styles.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
// import LoginModal from "../modal_login";
import RegisterModal from "../modal_reg";
export interface ButtonProps {
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function Login(props: PropsWithChildren<ButtonProps>) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <>
      <button
        onClick={openLoginModal}
        type="button"
        disabled={props.disabled}
        className={styles.Login}
      >
        Войти
      </button>
      {/* <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} /> */}
    </>
  );
}
export function Register(props: PropsWithChildren<ButtonProps>) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openRegisterModal}
        type="button"
        disabled={props.disabled}
        className={styles.Register}
      >
        Регистрация
      </button>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
      />
    </>
  );
}
export function Cursor(props: PropsWithChildren<ButtonProps>) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <>
      <button
        onClick={openRegisterModal}
        type="button"
        disabled={props.disabled}
        className={styles.Cursor}
      >
        Присоедениться к Cursor
      </button>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
      />
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
