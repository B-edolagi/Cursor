import { Cursor, Login, More, Register } from "../buttons";
import styles from "./styles.module.css";
function Header() {
  return (
    <div className={styles.Header}>
      <Login />
      <Register />
      <More />
      <Cursor />
    </div>
  );
}
export default Header;
