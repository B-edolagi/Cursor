import { Cursor, Login, More, Register } from "../buttons";
import Catalog from "../catalog";
import { Search } from "../search";
import styles from "./styles.module.css";
function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo_catalog}>
        <h1>Cursor</h1>
        <Catalog />
      </div>
      <Search />
      <div className={styles.Buttons}>
        <Login />
        <Register />
      </div>
    </header>
  );
}
export default Header;
