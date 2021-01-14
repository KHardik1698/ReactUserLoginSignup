import { Component } from "react";
import authenticateUrl from "../../apiCalls/ApiCalls";
import Home from "../Home";

class Login extends Component {
  state = {
    loggedIn: false,
  };
  loginUser = (event) => {
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
        console.log(data);
        if (data.data) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
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
          <Home />
        ) : (
          <div>
            <h1>Login Page</h1>
            <form onSubmit={this.loginUser}>
              <div>
                <input type="text" name="email" placeholder="Enter Email" required />
                <input type="password" name="password" placeholder="Enter Password" required />
              </div>
              <div>
                <button type="submit" value="login">
                  Login
                </button>
                <button type="reset" value="reset">
                  Clear
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
