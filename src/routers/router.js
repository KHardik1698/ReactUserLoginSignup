import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
