import styles from "./styles.module.css";

type SignUpFormProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const PasswordRecoveryForm: React.FC<SignUpFormProps> = () => {
  return (
    <div className={styles.Main}>
      <h2>Забыли свой пароль?</h2>
      <form action="#" className={styles.Main__form}>
        <label htmlFor="email">
          Введите свой e-mail адрес, и мы отправим вам письмо со ссылкой для
          сброса пароля.
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Введите свой email"
        />
        <button>Восстановить</button>
      </form>
    </div>
  );
};
export default PasswordRecoveryForm;
