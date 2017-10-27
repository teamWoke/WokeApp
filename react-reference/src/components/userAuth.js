import React, { Component } from 'react';
import Login from './logIn';
import Signup from './signUp';
import "../App.css";

class UserAuth extends Component {
  constructor(props){
    super(props);
    // set up state
    this.state = {
      mode: 'login' // keeps track of if the user is logging in or signing up
    }
  }

  toggleMode(e){ // toggle between the two modes
    e.preventDefault();
    this.setState(prev => { // the mode is what it is not
      prev.mode = prev.mode === "login" ? 'signup' : 'login';
      return prev
    })
  }

  render(){
    console.log('Login page rendering!');
    return this.state.mode === "login" ? (
      <Login {...this.props} toggleMode={this.toggleMode.bind(this)} />
    ) : (
      <Signup {...this.props} toggleMode={this.toggleMode.bind(this)} />
    )
  }
}
export default UserAuth;