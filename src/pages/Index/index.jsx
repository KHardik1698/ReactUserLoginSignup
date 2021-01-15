import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./index.module.css";

class Index extends Component {
  render() {
    return (
      <div>
        <div className={styles["container"]}>
          <Header page={"index"} />
          <div className={styles["index-container"]}>
            <h1>Welcome to User Registration</h1>
            <p>Get registered with us to be able to use our exciting upcoming features !!!</p>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Index;
