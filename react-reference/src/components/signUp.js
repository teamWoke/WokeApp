import React, { Component } from "react";
import axios from "axios";
import "../App.css";

// component for sign up
// this will render if the mode in user auth is signup
class SignUp extends Component {
  constructor() {
    super();
    // set up initial state
    this.state = {
      // track inputs for form
      inputs: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }

  // method to sign up
  signUp(e) {
    e.preventDefault(); // prevent default form action
    // make request to server to create a new user
    axios.post(`${this.props.url}/users`, this.state.inputs).then(res => {
      // the response will be the user
      // set the user
      this.props.setUser(res.data);
    });
  }

  // method to change one of the inputs
  changeInput(e, input) {
    const val = e.target.value;
    this.setState(prev => {
      // set the input in the state to the value
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
          <p className="LogInText">Sign Up</p>
          <form onSubmit={this.signUp.bind(this)}>
            <input
              value={this.state.inputs.name}
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              onChange={e => this.changeInput(e, "name")}
            />
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
            <input
              value={this.state.inputs.password_confirmation}
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Confirm Password"
              type="password"
              onChange={e => this.changeInput(e, "password_confirmation")}
            />
            <button type="submit">Sign Up</button>
            <button onClick={this.props.toggleMode}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;