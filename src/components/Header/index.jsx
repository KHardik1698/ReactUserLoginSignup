import { Link } from "react-router-dom";
import HeaderLogo from "../../images/logo-black.png";
import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles["header-container"]}>
      <img className={styles["header-logo"]} src={HeaderLogo} alt="Header Icon" />
      <ul>
        <Link className={styles["nav-link"]} to="/blogs">
          <li className={styles["nav-item"]}>Home</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
