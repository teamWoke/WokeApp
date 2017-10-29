import React, { Component } from "react";
import axios from "axios";
import "../App.css";

// login component
// this will render when the user auth mode is set to login
class Login extends Component {
  constructor() {
    super();
    // set default state
    this.state = {
      // we have 2 inputs that we will be changing
      inputs: {
        email: "",
        password: ""
      }
    };
  }

  // method to log in
  login(e) {
    e.preventDefault(); // prevent default form action
    // send request to make sure the email and password are correct
    axios.post(`${this.props.url}/login`, this.state.inputs).then(res => {
      // set the user based off of the response
      this.props.setUser(res.data);
    });
  }

  // method to change an input
  changeInput(e, input) {
    const val = e.target.value;
    this.setState(prev => {
      // sets the state for that input to the value
      prev.inputs[input] = val;
      return prev;
    });
  }

  render() {
    return (
      <div className="StartContainer">
        <div className="StartContainerNav">
          <p className="WokeSmallText">Woke</p>
        </div>

        <div className="StartContainerMini">
          <p className="LogInText">Welcome Back!</p>
          <form onSubmit={this.login.bind(this)}>
            <input
              value={this.state.inputs.email}
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              onChange={e => this.changeInput(e, "email")}
            />
            <input
              value={this.state.inputs.password}
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              onChange={e => this.changeInput(e, "password")}
            />
            <button type="submit">Login</button>
            <button onClick={this.props.toggleMode}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;