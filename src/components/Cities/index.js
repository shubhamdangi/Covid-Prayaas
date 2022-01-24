import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Citymap from "./city-map.png";
function Cities() {
  useEffect(() => {
    document.title = "Covid Prayaas | Cities";
  }, []);

  return (
    <div className="citypage">
      <img
        src={Citymap}
        alt="city-map"
        style={{ width: "23vh", padding: "11px 0 10px 0" }}
      />
      <h5>Select your city</h5>
      <hr />
      <div className="cityLinks">
        <ul class="list-group list-group-flush cities">
          <li class="list-group-item">
            <Link to="/cities/ahmedabad">Ahmedabad</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/bangalore">Bangalore</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/bhopal">Bhopal</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/gandhinagar">Gandhinagar</Link>
          </li>
          <li class="list-group-item">
            {" "}
            <Link to="/cities/gurugram">Gurugram</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/hyderabad">Hyderabad</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/indore">Indore</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/jaipur">Jaipur</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/kolkata">Kolkata</Link>
          </li>
          <li class="list-group-item">
            {" "}
            <Link to="/cities/mumbai">Mumbai</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/pune">Pune</Link>
          </li>

          <li class="list-group-item">
            {" "}
            <Link to="/cities/ranchi">Ranchi</Link>
          </li>
        </ul>
        <br />
        <p style={{ textAlign: "center" }}>more Cities coming soon..</p>
      </div>
    </div>
  );
}

export default Cities;
