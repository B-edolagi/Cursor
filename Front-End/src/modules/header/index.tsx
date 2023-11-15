import { Link, useNavigate } from "react-router-dom";
import { Cursor, Login, More, Register } from "../../components/buttons";
// import Catalog from "../../components/catalog";
import { Search } from "../../components/search";
import styles from "./styles.module.css";
import { FiArrowUpRight } from "react-icons/fi";

function Header() {
  const navigate = useNavigate(); // Create a navigate function

  const handleCursorClick = () => {
    // Use navigate function to navigate to the desired path
    navigate("/");
  };

  return (
    <header className={styles.Header}>
      <div className={styles.Header_wrap}>
        <div className={styles.Logo_catalog}>
          <h2 className={styles.Cursor} onClick={handleCursorClick}>
            Cursor <FiArrowUpRight />
          </h2>
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
