import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Citymap from "./city-map.png";
function Cities() {
  return (
    <div className="citypage">
      <img
        src={Citymap}
        alt="city-map"
        style={{ width: "25vh", padding: "20px 0 10px 0" }}
      />
      <h5>Select your city</h5>
      <hr />
      <div className="cityLinks">
        <ul class="list-group list-group-flush cities">
          <li class="list-group-item">
            <Link to="/cities/ahmedabad" target="blank">
              Ahmedabad
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/bangalore" target="blank">
              Bangalore
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/bhopal" target="blank">
              Bhopal
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/gandhinagar" target="blank">
              Gandhinagar
            </Link>
          </li>
          <li class="list-group-item">
            {" "}
            <Link to="/cities/gurugram" target="blank">
              Gurugram
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/hyderabad" target="blank">
              Hyderabad
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/indore" target="blank">
              Indore
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/jaipur" target="blank">
              Jaipur
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/kolkata" target="blank">
              Kolkata
            </Link>
          </li>
          <li class="list-group-item">
            {" "}
            <Link to="/cities/mumbai" target="blank">
              Mumbai
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/pune" target="blank">
              Pune
            </Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/ranchi" target="blank">
              Ranchi
            </Link>
          </li>
        </ul>
        <br />
        <p style={{ textAlign: "center" }}>more Cities coming soon..</p>
      </div>
    </div>
  );
}

export default Cities;
