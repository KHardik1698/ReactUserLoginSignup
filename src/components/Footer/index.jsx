import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./index.module.css";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <h1 className={styles["copyright"]}>Developed by Hardik &copy; RE/CS</h1>
      <div className={styles["icons-container"]}>
        <FaFacebookSquare className={styles["icon"]} size="7vh" color="black" />
        <FaTwitterSquare className={styles["icon"]} size="7vh" color="black" />
        <FaInstagramSquare className={styles["icon"]} size="7vh" color="black" />
        <FaGithubSquare className={styles["icon"]} size="7vh" color="black" />
        <FaLinkedin className={styles["icon"]} size="7vh" color="black" />
      </div>
    </div>
  );
}

export default Footer;
