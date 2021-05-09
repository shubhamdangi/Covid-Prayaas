import React from "react";
import apImage from "./ap.png";
import "./style.css";

function Andhra() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={apImage} alt="ap-image" className="apImage" />
          <h4>Andhra Pradesh Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://covidaps.com/">
              <h3>▷Andhra Pradesh COVID-19 Dashboard.</h3>
            </a>
            <p>
              Volunteer curated live information on beds and plasma
              availability, updated every 15 minutes. <br /> <br /> Contains
              hospital name, phone number, address, and availability of beds
              with/without oxygen, and with/without ventilators.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Andhra;
