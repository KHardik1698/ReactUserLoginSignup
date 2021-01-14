import styles from "./index.module.css";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className={styles["header-container"]}>
      <Loader type="Oval" color="#00BFFF" height={"10vw"} width={"10vw"} />
    </div>
  );
}

export default Loading;
