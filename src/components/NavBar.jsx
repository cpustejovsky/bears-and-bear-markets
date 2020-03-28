import React, { useState, useEffect } from "react";
import PolygonIO from "../images/polygonio_white.svg";
import axios from "axios";
const NavBar = () => {
  const [navbar, setNavbar] = useState("navbar-menu");
  const [burger, setBurger] = useState("navbar-burger burger");
  const [marketStatus, setMarketStatus] = useState("");
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

  //TODO: check that this works
  const CheckMarketStatus = async () => {
    try {
      const response = await axios.get(
        `https://api.polygon.io/marketstatus/now?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setMarketStatus(response.data.market);
    } catch (error) {
      console.log(error);
      setMarketStatus("closed");
    }
  };
  const renderMarketStatus = () => {
    if (marketStatus === "open") {
      return (
        <p>
          Market: <span className="navbar__market__open">Open</span>
        </p>
      );
    } else if (marketStatus === "closed") {
      return (
        <p>
          Market: <span className="navbar__market__closed">Closed</span>
        </p>
      );
    } else if (marketStatus === "error") {
      return (
        <p>
          <strong>Market Times:</strong> 9:30AM to 4:30PM EST
        </p>
      );
    } else {
      console.log("API has changed; please update accordingly");
      return (
        <p>
          <strong>Market Times:</strong> 9:30AM to 4:30PM EST
        </p>
      );
    }
  };
  useEffect(() => {
    CheckMarketStatus();
  }, [marketStatus]);
  return (
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
          >
            <img
              className="navbar-item"
              alt="polygon.io logo"
              src={PolygonIO}
              width="40"
              height="28"
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
          <div className="navbar-end">
            <div className="navbar-item">{renderMarketStatus()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
