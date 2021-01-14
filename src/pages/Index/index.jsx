import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Landing Page</h1>
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

export default Index;
