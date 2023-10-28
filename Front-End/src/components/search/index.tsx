import { CiSearch } from "react-icons/ci";
import style from "./styles.module.css";
export function Search() {
  return (
    <div className={style.Search}>
      <p id="p">
        <CiSearch />
      </p>
      <input
        type="search"
        placeholder="Поиск онлайн-курса, автора курса"
        className={style.Search_main}
      />
    </div>
  );
}
