import { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../images/logo-black.png";
import styles from "./index.module.css";

class Header extends Component {
  state = {
    navigation: [],
  };
  componentDidMount = (event) => {
    let componentDidMountCount = 0;
    while (componentDidMountCount < 1) {
      if (this.props.page === "index") {
        componentDidMountCount++;
        let navigation = [
          { link: "/login", name: "Login" },
          { link: "/signup", name: "Signup" },
        ];
        this.setState({ navigation: navigation });
      } else if (this.props.page === "login") {
        componentDidMountCount++;
        let navigation = [
          { link: "/", name: "Home" },
          { link: "/signup", name: "Signup" },
        ];
        this.setState({ navigation: navigation });
      } else if (this.props.page === "signup") {
        componentDidMountCount++;
        let navigation = [
          { link: "/", name: "Home" },
          { link: "/login", name: "Login" },
        ];
        this.setState({ navigation: navigation });
      } else if (this.props.page === "home") {
        componentDidMountCount++;
        let navigation = [
          { link: "/login", name: "Home" },
          { link: "/", name: "Logout" },
        ];
        this.setState({ navigation: navigation });
      }
    }
  };
  render() {
    return (
      <div className={styles["header-container"]}>
        <img className={styles["header-logo"]} src={HeaderLogo} alt="Header Icon" />
        <ul>
          {this.state.navigation.map((nav, i) => {
            return (
              <div key={i}>
                <Link className={styles["nav-link"]} to={nav.link}>
                  <li className={styles["nav-item"]}>{nav.name}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
