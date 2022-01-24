import React from "react";
import "./style.css";
import logo from "./logo.png";
import { NavLink, Link } from "react-router-dom";
import rol from "./rolo1.gif";

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
                COVID Prayaas
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
          <img
            src={rol}
            alt="rol gif"
            style={{ width: "22px", margin: "-4px -6px 0 0" }}
            className="dot"
          />
          <NavLink to="/cities" activeClassName="current">
            <li style={{ listStyleType: "none" }}> Cities</li>
          </NavLink>
          <NavLink to="/states" activeClassName="current">
            <li style={{ listStyleType: "none" }}> States</li>
          </NavLink>
          <NavLink to="/selfcare" activeClassName="current">
            <li style={{ listStyleType: "none" }}> Self Care</li>
          </NavLink>

          <NavLink to="/contribute" activeClassName="current">
            <li style={{ listStyleType: "none" }}> Contribute</li>
          </NavLink>

          {/* <Link
            to={{ pathname: "https://www.covid19india.org" }}
            target="blank"
          >
            {" "}
            Statistics{" "}
          </Link> */}

          <Link
            to={{ pathname: "https://selfregistration.cowin.gov.in/" }}
            target="blank"
          >
            {" "}
            Register for Vaccination{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
