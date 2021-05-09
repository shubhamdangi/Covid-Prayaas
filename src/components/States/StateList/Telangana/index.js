import React from "react";
import telImage from "./telangana.png";
import "./style.css";

function Telangana() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img
            src={telImage}
            alt="telangana-image"
            className="telanganaImage1"
          />
          <h4>Telangana COVID Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="http://164.100.112.24/SpringMVC/Hospital_Beds_Statistic_Bulletin_citizen.htm">
              <h3>▷Hospital Bed Status</h3>
            </a>
            <p>
              Live dashboard of regular beds, oxygen beds and ICU beds across
              government hospitals and private hospitals. Clicking on
              “Government Hospitals” or “Private Hospitals” expands the
              dashboard to hospital details such as district, name and phone
              number.
              <br /> <br /> Created by Department of Health, Medical & Family
              Welfare, Government of Telangana.
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://covidtelangana.com/">
              <h3>▷Telangana COVID Info Dashboard</h3>
            </a>
            <p>
              Volunteer led initiative to curate live information on beds and
              plasma availability, updated every 15 minutes.
              <br /> <br /> Contains hospital name, phone number, address, and
              availability of beds with/without oxygen, and with/without
              ventilators.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Telangana;
