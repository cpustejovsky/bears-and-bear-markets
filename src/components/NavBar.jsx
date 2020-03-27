import React, { Component } from "react";
import PolygonIO from "../images/polygonio.svg";
export default class NavBar extends Component {
  state = {
    burgerCSS: "navbar-burger burger",
    navbarMenuCSS: "navbar-menu"
  };

  openMobileNav() {
    if (String(this.state.burgerCSS) === "navbar-burger burger") {
      console.log("open!");
      this.setState({
        burgerCSS: "navbar-burger burger is-active",
        navbarMenuCSS: "navbar-menu is-active"
      });
    } else {
      console.log("close");
      this.setState({
        burgerCSS: "navbar-burger burger",
        navbarMenuCSS: "navbar-menu"
      });
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            href="https://polygon.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="navbar-item"
              src={PolygonIO}
              width="40"
              height="28"
            />
          </a>
          <a className="navbar-item" href="/">
            Bears and Bear Markets
          </a>

          <a
            onClick={() => this.openMobileNav()}
            role="button"
            className={this.state.burgerCSS}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={this.state.navbarMenuCSS}>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">About</a>

              <div className="navbar-dropdown">
                {/* TODO:add styling for max-width, border, box-shadow, and font-size */}
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  qui vero assumenda eum adipisci quidem aspernatur quos vel ab
                  aut! Et exercitationem consequuntur tempora libero quas ut
                  delectus, repellendus ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
