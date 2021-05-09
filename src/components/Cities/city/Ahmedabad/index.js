import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ahmedabad from "./ahmedabad.jpg";

function Ahmedabad() {
  return (
    <>
      <div className="Head">
        <img src={ahmedabad} alt="ahmedabad-image" className="ahemdabadImage" />
        <h4>Ahmedabad Resources.</h4>
        <hr />
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <Link to={{ pathname: "https://covidamd.com/" }} target="blank">
            <h3>▷Ahmedabad COVID Info.</h3>
          </Link>
          <p>
            Volunteer led initiative to curate live information on beds and
            plasma availability, updated every 15 minutes.
            <br />
            Contains hospital name, phone number, address, and availability of
            beds with/without oxygen, and with/without ventilators.
          </p>
        </li>
        <li class="list-group-item">
          <Link
            to={{ pathname: "https://ahna.org.in/covid19.html" }}
            target="blank"
          >
            <h3>▷Private Hospitals Bed Availability</h3>
          </Link>
          <p>
            Constantly updated status of vacancy of private beds in AMC
            requisitioned private hospitals.
          </p>
        </li>
      </ul>
    </>
  );
}

export default Ahmedabad;
