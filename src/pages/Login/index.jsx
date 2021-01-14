import { Component } from "react";
import authenticateUrl from "../../apiCalls/ApiCalls";
import Home from "../Home";
import Loading from "../../components/Loading";

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
          <Home />
        ) : (
          <div>
            {this.state.submit === true ? (
              <Loading />
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
        )}
      </div>
    );
  }
}

export default Login;
