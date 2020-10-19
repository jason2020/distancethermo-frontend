import React from "react";
import styled, { css } from 'styled-components'

import api from "../../api";

const TextField = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: royalblue;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: royalblue;
    color: white;
  `}
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
  background: papayawhip;
  height: 30vh;
`

const Form = styled.form`
   width: 100%;
`;

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  validateForm = () => {
    console.log(this.state.email, this.state.password);
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
  };

  render() {
    return (
        <Container>
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            <TextField
              autoFocus
              type="email"
              value={this.state.email}
              onChange={(e) => this.setEmail(e.target.value)}
              label="Email"
            />
            <TextField
              value={this.state.password}
              onChange={(e) => this.setPassword(e.target.value)}
              type="password"
              label="Password"
            />
            <Button
              disabled={!this.validateForm()}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
    );
  }
}
