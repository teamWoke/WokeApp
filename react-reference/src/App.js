import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AuthenticationShell from './components/authenticationShell';
import "./App.css";

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
