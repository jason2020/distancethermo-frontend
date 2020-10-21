import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
// import styled, { css } from "styled-components";

import api from "../../api";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  setEmail = (email) => {
    this.setState({ email });
  };

  setPassword = (password) => {
    this.setState({ password });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password_plain: this.state.password,
    };
    console.log(user);
    api.post(`/login`, user).then((res) => {
      console.log(res.data);
      localStorage.setItem("userid", res.data._id);
    });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  autoFocus
                  value={this.state.email}
                  onChange={(e) => this.setEmail(e.target.value)}
                  label="Email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={this.state.password}
                  onChange={(e) => this.setPassword(e.target.value)}
                  label="Password"
                  placeholder="Password"
                />
              </div>
            </div>

            <br />
            <button
              className="button"
              disabled={!this.validateForm()}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
