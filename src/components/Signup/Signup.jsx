import React from "react";
import styled, { css } from "styled-components";
import axios from "axios";

import api from "../../api";

const TextField = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: royalblue;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
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

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
  background: papayawhip;
  height: 30vh;
`;

const Form = styled.form`
  width: 100%;
`;

export default class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    fname: "",
    lname: "",
    phoneNum: "",
    address: "",
  };

  validateForm = () => {
    console.log(this.state);
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  setEmail = (email) => {
    this.setState({ email });
  };

  setPassword = (password) => {
    this.setState({ password });
  };

  setfname = (fname) => {
    this.setState({ fname });
  };

  setlname = (lname) => {
    this.setState({ lname });
  };

  setphoneNum = (phoneNum) => {
    this.setState({ phoneNum });
  };

  setaddress = (address) => {
    this.setState({ address });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password_plain: this.state.password,
    };
    axios.post(`http://localhost:3000/api/signup`, { user });
  };

  render() {
    return (
      <Container>
        <h1>Sign Up</h1>
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
          <TextField
            autoFocus
            type="text"
            value={this.state.fname}
            onChange={(e) => this.setfname(e.target.value)}
            label="First Name"
          />
          <TextField
            autoFocus
            type="text"
            value={this.state.lname}
            onChange={(e) => this.setlname(e.target.value)}
            label="Last Name"
          />
          <TextField
            autoFocus
            type="tel"
            value={this.state.phoneNum}
            onChange={(e) => this.setphoneNum(e.target.value)}
            label="Phone Number"
          />
          <TextField
            autoFocus
            type="text"
            value={this.state.address}
            onChange={(e) => this.setaddress(e.target.value)}
            label="Address"
          />
          <Button disabled={!this.validateForm()} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
