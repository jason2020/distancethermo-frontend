import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import QRCodeDisplay from "./components/QRCodeDisplay/QRCodeDisplay";

const history = createBrowserHistory();

function App() {
  const [isActive, setisActive] = React.useState(false);

  return (
    <Router history={history}>
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              {/* <img
                src="https://bulma.io/images/bulma-logo.png"
                width={112}
                height={28}
              /> */}
            </a>
            <a
              role="button"
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => {
                setisActive(!isActive);
              }}
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <a className="navbar-item">
                <Link to="/code">View My Code</Link>
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/signup" className="button is-primary">
                    Sign up
                  </Link>
                  <Link to="/login" className="button is-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/code" component={QRCodeDisplay}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
