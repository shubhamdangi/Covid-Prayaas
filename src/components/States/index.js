import React from "react";
import map from "./india.png";
import "./style.css";
import { Link } from "react-router-dom";

function States() {
  return (
    <div className="statepage">
      <img
        src={map}
        alt="city-map"
        style={{ width: "30vh", padding: "10px 0 0px 0" }}
      />
      <h5>Select State Below </h5>
      <hr />
      <div className="cityLinks">
        <ul class="list-group list-group-flush states">
          <li class="list-group-item">
            <Link to="/states/ap" target="blank">
              Andhra Pradesh
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/delhi" target="blank">
              Delhi
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/haryana" target="blank">
              Haryana
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/goa" target="blank">
              Goa
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/karnataka" target="blank">
              Karnataka
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/kerala" target="blank">
              Kerala
            </Link>
          </li>
          <li class="list-group-item">
            {" "}
            <Link to="/states/mp" target="blank">
              Madhya Pradesh
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/rajasthan" target="blank">
              Rajasthan
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/tn" target="blank">
              Tamil Nadu
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/telangana" target="blank">
              Telangana
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/wb" target="blank">
              West Bengal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default States;
