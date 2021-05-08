import React from "react";
import bhopalImage from "./bhopal.png";
import "./style.css";
import { Link } from "react-router-dom";

function Bhopal() {
  return (
    <>
      <div className="bhopalHead">
        <img src={bhopalImage} alt="bhopal-image" className="bhopalImage" />
        <h4>Bhopal Resources.</h4>
        <hr />
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <Link to={{ pathname: "https://bhopalcovidbeds.in/" }} target="blank">
            <h3>▷Bed Availability Dashboard</h3>
          </Link>
          <p>
            Bed Availability in COVID Hospital. Contains information of number
            and details of Isolation Ward beds, Oxygen beds and ICU/HDU beds.
          </p>
        </li>
        <li class="list-group-item">
          <Link to={{ pathname: "https://bhopal.nic.in/en/" }} target="blank">
            <h3>▷Covid19- Important Information- District Bhopal (M.P.)</h3>
          </Link>
          <p>
            Information related to COVID Containment Areas, Lockdown orders,
            Directives and Guidelines, Helpline and related websites.
          </p>
        </li>
        <li class="list-group-item">
          <Link to={{ pathname: "https://bhopal.nic.in" }} target="blank">
            <h3>▷कोविड-19 महत्वपूर्ण जानकारी - जिला भोपाल</h3>
          </Link>
          <p>
            कोविड कन्टेनमेंट क्षेत्र, लॉक डाउन आदेश, निर्देश और दिशानिर्देश,
            हेल्प लाइन नंबर / वेब साइट
          </p>
        </li>
      </ul>
    </>
  );
}

export default Bhopal;
