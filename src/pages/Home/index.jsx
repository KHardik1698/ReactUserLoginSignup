import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./index.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles["container"]}>
        <Header page={"home"} />
        <div className={styles["home-container"]}>
          <h1>Home Page</h1>
          <p>Login Successful, Welcome {this.props.email}</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
