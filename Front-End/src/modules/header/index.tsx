import { Cursor, Login, More, Register } from "../../components/buttons";
// import Catalog from "../../components/catalog";
import { Search } from "../../components/search";
import styles from "./styles.module.css";
import { FiArrowUpRight } from "react-icons/fi";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_wrap}>
        <div className={styles.Logo_catalog}>
          <h1 className={styles.Cursor}>
            Cursor <FiArrowUpRight />
          </h1>
          {/* <Catalog /> */}
        </div>
        <Search />
        <div className={styles.Buttons}>
          <Login />
          <Register />
        </div>
      </div>
    </header>
  );
}
export default Header;
