import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
export interface ButtonProps {
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function Login(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={styles.Login}
    >
      Войти
    </button>
  );
}
export function Register(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={styles.Register}
    >
      Регистрация
    </button>
  );
}
export function Cursor(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={styles.Cursor}
    >
      Присоедениться к Cursor
    </button>
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
