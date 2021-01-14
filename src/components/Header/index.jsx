import { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../images/logo-black.png";
import styles from "./index.module.css";

class Header extends Component {
  state = {
    navigation: [],
  };
  componentDidMount = (event) => {
    let i = 0;
    if (this.props.match.path === "/" && i < 1) {
      i++;
      let navigation = [
        { link: "/login", name: "Login" },
        { link: "/signup", name: "Signup" },
      ];
      this.setState({ navigation: navigation });
    } else if (this.props.match.path === "/login" && i < 1) {
      i++;
      let navigation = [
        { link: "/", name: "Home" },
        { link: "/signup", name: "Signup" },
      ];
      this.setState({ navigation: navigation });
    } else if (this.props.match.path === "/signup" && i < 1) {
      i++;
      let navigation = [
        { link: "/", name: "Home" },
        { link: "/login", name: "Login" },
      ];
      this.setState({ navigation: navigation });
    } else if (this.props.match.path === "/home" && i < 1) {
      i++;
      let navigation = [
        { link: "/login", name: "Home" },
        { link: "/", name: "Logout" },
      ];
      this.setState({ navigation: navigation });
    }
  };
  render() {
    return (
      <div className={styles["header-container"]}>
        <img className={styles["header-logo"]} src={HeaderLogo} alt="Header Icon" />
        {this.state.navigation.map((nav, i) => {
          return (
            <ul key={i}>
              <Link className={styles["nav-link"]} to={nav.link}>
                <li className={styles["nav-item"]}>{nav.name}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Header;
