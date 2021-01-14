import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Home Page</h1>
        <p>Login Successful</p>
        <Link to="/">
          <p>Main Page</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/signup">
          <p>Signup</p>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default Home;
