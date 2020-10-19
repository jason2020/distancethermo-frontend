import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import QRCodeDisplay from "./components/QRCodeDisplay/QRCodeDisplay";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/code">View My QR Code</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/code">
            <QRCodeDisplay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
