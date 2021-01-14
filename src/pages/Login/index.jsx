import { Component } from "react";

class Login extends Component {
  state = {
    loggedIn: false,
  };
  loginUser = (event) => {
    event.preventDefault();
  };
  render() {
    return (
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
    );
  }
}

export default Login;
