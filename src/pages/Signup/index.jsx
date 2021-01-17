import { Component } from "react";
import authenticateUrl from "../../apiCalls/ApiCalls";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import styles from "./index.module.css";

class Signup extends Component {
  state = {
    signedUp: false,
    submit: false,
  };
  signupUser = (event) => {
    this.setState({ submit: true });
    event.preventDefault();
    let bodyObject = {
      email: event.target.email.value,
      userName: event.target.userName.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };
    fetch(authenticateUrl + "users/signup", {
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
          this.setState({ signedUp: true });
        } else {
          this.setState({ signedUp: false });
        }
        if (data.status === "Successful") {
          alert("Signup Successful");
        } else {
          alert(`Signup Failed : ${data.message}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.submit === true ? (
          <Loading />
        ) : (
          <div>
            <Header page={"signup"} />
            <div className={styles["signup-container"]}>
              <h1>Signup Page</h1>
              <form onSubmit={this.signupUser} autoComplete="off">
                <div className={styles["input-container"]}>
                  <input
                    className={styles["input-field"]}
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                  <input
                    className={styles["input-field"]}
                    type="text"
                    name="userName"
                    placeholder="Enter User's Name"
                    required
                  />
                  <input
                    className={styles["input-field"]}
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                  <input
                    className={styles["input-field"]}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className={styles["button-container"]}>
                  <button className={styles["button"]} type="submit" value="login">
                    Sign Up
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
    );
  }
}

export default Signup;
