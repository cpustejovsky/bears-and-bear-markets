import React, { useState, useEffect } from "react";
import PolygonIO from "../images/polygonio.svg";
const NavBar = () => {
  const [navbar, setNavbar] = useState("navbar-menu");
  const [burger, setBurger] = useState("navbar-burger burger");

  const openMobileNav = () => {
    if (burger === "navbar-burger burger") {
      console.log("open!");
      setBurger("navbar-burger burger is-active");
      setNavbar("navbar-menu is-active");
    } else {
      console.log("close");
      setBurger("navbar-burger burger");
      setNavbar("navbar-menu");
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="https://polygon.io/" target="_blank" rel="noopener noreferrer">
          <img className="navbar-item" src={PolygonIO} width="40" height="28" />
        </a>
        <a className="navbar-item" href="/">
          Bears and Bear Markets
        </a>

        <a
          onClick={() => openMobileNav()}
          role="button"
          className={burger}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={navbar}>
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
};
export default NavBar;
