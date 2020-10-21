import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import api from "../../api";

// const TextField = styled.input`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid royalblue;
//   color: royalblue;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${(props) =>
//     props.primary &&
//     css`
//       background: royalblue;
//       color: white;
//     `}
// `;

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${(props) =>
//     props.primary &&
//     css`
//       background: palevioletred;
//       color: white;
//     `}
// `;

// const Container = styled.div`
//   text-align: center;
//   background: papayawhip;
//   height: 30vh;
// `;

// const Form = styled.form`
//   width: 100%;
// `;

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
    api.post(`/signup`, { user });
  };

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
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

            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={this.state.fname}
                  onChange={(e) => this.setfname(e.target.value)}
                  label="First Name"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Last name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={this.state.lname}
                  onChange={(e) => this.setlname(e.target.value)}
                  label="Last Name"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input
                  type="tel"
                  className="input"
                  value={this.state.phoneNum}
                  onChange={(e) => this.setphoneNum(e.target.value)}
                  label="Phone Number"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={this.state.address}
                  onChange={(e) => this.setaddress(e.target.value)}
                  label="Address"
                  placeholder="Address"
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
