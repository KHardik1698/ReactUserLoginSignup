import { Component } from "react";
import { Link } from "react-router-dom";
// import styles from "../styles/NotFound.module.css";

class NotFound extends Component {
  render() {
    return (
      <h1>Not Found Component</h1>
      // <div className={styles["not-found-container"]}>
      //   <img
      //     className={styles["not-found-image"]}
      //     src="https://image.freepik.com/free-vector/404-error-page-found_41910-364.jpg"
      //     alt="Page Not Found"
      //   />
      //   <Link className={styles["back-button"]} to="/">
      //     <button>Go to Home</button>
      //   </Link>
      // </div>
    );
  }
}

export default NotFound;
