import { Cursor, Login, More, Register } from "../buttons";
import { Search } from "../search";
import styles from "./styles.module.css";
function Header() {
  return (
    <div className={styles.Header}>
      <Login />
      <Register />
      <More />
      <Cursor />
      <Search />
    </div>
  );
}
export default Header;
