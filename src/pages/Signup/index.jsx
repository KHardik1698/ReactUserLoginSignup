import { Component } from "react";
import authenticateUrl from "../../apiCalls/ApiCalls";

class Signup extends Component {
  state = {
    signedUp: false,
  };
  signupUser = (event) => {
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
        if (data.data) {
          this.setState({ signedUp: true });
          alert(data.status);
        } else {
          this.setState({ signedUp: false });
          alert(data.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>Signup Page</h1>
        <form onSubmit={this.signupUser}>
          <div>
            <input type="email" name="email" placeholder="Enter Email" required />
            <input type="text" name="userName" placeholder="Enter User's Name" required />
            <input type="password" name="password" placeholder="Enter Password" required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          </div>
          <div>
            <button type="submit" value="login">
              Sign Up
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

export default Signup;
