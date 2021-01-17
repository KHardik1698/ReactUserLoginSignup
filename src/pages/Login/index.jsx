import { Component } from "react";
import authenticateUrl from "../../apiCalls/ApiCalls";
import Home from "../Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import styles from "./index.module.css";

class Login extends Component {
  state = {
    loggedIn: false,
    submit: false,
  };
  loginUser = (event) => {
    this.setState({ submit: true });
    event.preventDefault();
    let bodyObject = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    fetch(authenticateUrl + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(bodyObject),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ submit: false });
        if (data.data) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
        if (data.status === "Successful") {
          alert("Login Successful");
        } else {
          alert(`Login Failed : ${data.message}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.loggedIn === true ? (
          <Home {...this.props} />
        ) : (
          <div>
            {this.state.submit === true ? (
              <Loading />
            ) : (
              <div className={styles["container"]}>
                <Header page={"login"} />
                <div className={styles["login-container"]}>
                  <h1>User Login</h1>
                  <form onSubmit={this.loginUser}>
                    <div className={styles["input-container"]}>
                      <input
                        className={styles["input-field"]}
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        required
                        // autoComplete="off"
                      />
                      <input
                        className={styles["input-field"]}
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                      />
                    </div>
                    <div className={styles["button-container"]}>
                      <button className={styles["button"]} type="submit" value="login">
                        Login
                      </button>
                      <button className={styles["button"]} type="reset" value="reset">
                        Clear
                      </button>
                    </div>
                  </form>
                </div>
                <Footer />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Login;
