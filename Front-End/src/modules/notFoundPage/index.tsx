import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
export default function NotFound() {
  const navigate = useNavigate(); // Create a navigate function

  const handleCursorClick = () => {
    // Use navigate function to navigate to the desired path
    navigate("/");
  };

  return (
    <div className={styles.NotFound}>
      <h2>
        Error 404. The page you're looking for can't be found.
        <p>
          Go to <a onClick={handleCursorClick}>Home</a>
        </p>
      </h2>
    </div>
  );
}
