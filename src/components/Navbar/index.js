import React from "react";
import "./style.css";
import logo from "./logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function Navbar() {
  return (
    <>
      <div class="nav1">
        <input type="checkbox" id="nav-check" />

        <div class="nav-header">
          <div class="nav-title">
            <NavLink to="/">
              <p
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  margin: "0",
                  padding: "0",
                }}
              >
                COVID Sahayog
                <img src={logo} alt="logo" style={{ marginTop: "4px" }} />
              </p>
            </NavLink>
          </div>
        </div>

        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <NavLink to="/cities" activeClassName="current" exact>
            <li style={{ listStyleType: "none" }}> Cities</li>
          </NavLink>
          <NavLink to="/states" activeClassName="current" exact>
            <li style={{ listStyleType: "none" }}> States</li>
          </NavLink>
          <NavLink to="/selfcare" activeClassName="current" exact>
            <li style={{ listStyleType: "none" }}> Self Care</li>
          </NavLink>

          <NavLink to="/contribute">Contribute</NavLink>
          <Link to={{ pathname: "https://www.google.com" }} target="_blank">
            {" "}
            About{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
