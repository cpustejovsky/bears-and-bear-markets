import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Display from "./Display";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <Display />
        <Footer />
      </div>
    );
  }
}

export default App;
