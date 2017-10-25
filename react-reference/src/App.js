import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AuthenticationShell from './components/authenticationShell';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
        path='/'
        render={props=>(
        	<AuthenticationShell {...props}/>
        	)}
        />
      </BrowserRouter>
    );
  }
}

export default App;
