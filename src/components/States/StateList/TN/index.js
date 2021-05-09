import React from "react";
import tnImage from "./tamil.png";
import "./style.css";

function Tamil() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={tnImage} alt="tn-image" className="tnImage2" />
          <h4>Tamil Nadu COVID Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://stopcorona.tn.gov.in/beds.php">
              <h3>▷Hospital wise Bed Status</h3>
            </a>
            <p>
              Private hospitals: Live dashboard of available beds for COVID
              cases, oxygen supported beds, non-oxygen beds, ICU beds and
              ventilators across Tamil Nadu, with hospital names and phone
              numbers.
              <br /> <br /> Created by Health &Welfare Department, Government of
              Tamil Nadu{" "}
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://tncovidbeds.tnega.org/">
              <h3>▷Tami Nadu COVID Beds</h3>
            </a>
            <p>
              A dashboard of bed availability in government and private COVID
              hospitals, health centers and care centers.
              <br /> <br /> Created by the Tamil Nadu e-Governance Agency
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://covidtnadu.com/">
              <h3>▷Tamil Nadu COVID Info</h3>
            </a>
            <p>
              Volunteer led initiative to curate live information on beds and
              plasma availability, updated every 15 minutes.
              <br /> <br /> Contains hospital name, phone number, address, and
              availability of beds with/without oxygen, and with/without
              ventilators.
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://stopcorona.tn.gov.in/wp-content/uploads/2021/04/Lab-List.pdf">
              <h3>▷Tamil Nadu Testing Laboratories</h3>
            </a>
            <p>PDF file containing a list of testing labs across Tamil Nadu.</p>
          </li>

          <li class="list-group-item dash">
            <a href="https://twitter.com/NHM_TN">
              <h3>▷National Health Mission Tamil Nadu (Twitter)</h3>
            </a>
            <p>
              Official twitter handle of National Health Mission, Tamil Nadu.
              Stay Connected for news & information on COVID-19 & Govt health
              initiatives in Tamil Nadu.{" "}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Tamil;
