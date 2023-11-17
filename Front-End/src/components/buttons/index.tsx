import React, { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AuthModal from "../AuthModal";

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
