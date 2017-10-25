import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthenticationShell from './components/authenticationShell';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthenticationShell />
      </BrowserRouter>
    );
  }
}

export default App;
