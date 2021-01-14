import { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/signup">
          <p>Signup</p>
        </Link>
      </div>
    );
  }
}

export default Index;
