import React from "react";
import "./style.css";
import puneImage from "./pune.jpg";

function Pune() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={puneImage} alt="pune-image" className="puneImage" />
          <h4>Pune Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://covidpune.com/">
              <h3>▷Pune COVID Info</h3>
            </a>
            <p>
              Central dashboard updated every 15 mins and contains:
              <br />
              <br /> ⦾ Hospital beds: Hospital details, number of beds with and
              without oxygen, number of ICU beds with and without ventilator
              <br /> ⦾ Plasma availability: Blood bank addresses, contact
              numbers, and availability of plasma per blood group
              <br /> ⦾ Rapid Antigen Test Centers
              <br /> ⦾ Ambulances
              <br /> ⦾ 24x7 Helpline
              <br /> ⦾ Remdesivir Information
              <br /> ⦾ Tiffin/Food
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://punecovid.glideapp.io/">
              <h3>▷Pune PCMC COVID-19</h3>
            </a>
            <p>Web & Phone App</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pune;
