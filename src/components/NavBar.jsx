import React, { useState } from "react";
import PolygonIO from "../images/polygonio_white.svg";
import SettingsModal from "./SettingsModal"
const NavBar = () => {
  const [navbar, setNavbar] = useState("navbar-menu");
  const [burger, setBurger] = useState("navbar-burger burger");
  const [settingsModal, setSettingsModal] = useState(false);
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
    <>
    <SettingsModal settingsModal = {settingsModal} onClose={setSettingsModal}/>
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            href="https://polygon.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item"
          >
            <img
              className="navbar__logo"
              alt="polygon.io logo"
              src={PolygonIO}
            />
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
                <p className="navbar__about">
                  Being invested often leaves you feeling, well, invested. And
                  when the value of your invetments drop, it's easy to become
                  stressed. So this site allows you to view your assets while
                  also viewing a relaxing nature live feed of bears to calm you
                  through any bear markets.
                </p>
              </div>
            </div>
          </div>
          <div onClick={()=>setSettingsModal(!settingsModal)} className="navbar-end navbar__settings">
            <i className="fas fa-cog fa-lg"></i>
            <span className="navbar__settings__mobile"> Settings</span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
export default NavBar;
