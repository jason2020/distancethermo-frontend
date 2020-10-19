import React from "react";

import api from "../../api";

export default class Login extends React.Component {
  state = {};

  processLogin = () => {
    api.get("/login");
  };

  render() {
    return (
      <>
        <input type="text" />
        <button onClick={this.processLogin}>Login</button>
      </>
    );
  }
}
