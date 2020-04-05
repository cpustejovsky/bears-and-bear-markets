import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Display from "./Display";
import Settings from "./Settings";
import Footer from "./Footer";
import history from "../history";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router history={history}>
          <NavBar />
          <>
            <Switch>
              <Route path="/" exact component={Display} />
              <Route path="/settings" exact component={Settings} />
            </Switch>
          </>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
