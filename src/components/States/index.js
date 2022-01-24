import React, { useEffect } from "react";
import map from "./india.png";
import "./style.css";
import { Link } from "react-router-dom";

function States() {
  useEffect(() => {
    document.title = "Covid Prayaas | States";
  }, []);

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
            <Link to="/states/ap">Andhra Pradesh</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/delhi">Delhi</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/haryana">Haryana</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/goa">Goa</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/karnataka">Karnataka</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/kerala">Kerala</Link>
          </li>
          <li class="list-group-item">
            {" "}
            <Link to="/states/mp">Madhya Pradesh</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/rajasthan">Rajasthan</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/tn">Tamil Nadu</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/telangana">Telangana</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/states/wb">West Bengal</Link>
          </li>
        </ul>
        <br />
        <p style={{ textAlign: "center" }}>more States coming soon..</p>
      </div>
    </div>
  );
}

export default States;
