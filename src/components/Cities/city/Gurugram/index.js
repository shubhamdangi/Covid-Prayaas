import React from "react";
import "./style.css";
import GuruImage from "./gurugram.jpg";

function Gurugram() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={GuruImage} alt="gurugram-image" className="gurugramImage" />
          <h4>Gurugram Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://covidggn.com/Default">
              <h3>▷GC3 (Gurugram Covid Combat Companion)</h3>
            </a>
            <p>
              Comprehensive website with the following: <br />
              <br />
              ⦾ Register for a hospital bed (for Gurugram residents only) <br />
              ⦾ COVID-19 hospitals: Address, contact number and availability of
              oxygen beds, ICU beds and ventilator beds. <br />
              ⦾ COVID Care Centers: Address, rate and contact numbers
              <br /> ⦾ Labs/Test Centers: Address <br />
              ⦾ List of free testing camps <br />⦾ Case statistics
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://gurugram.gov.in/ncovidcoronavirus-19-help-desk/">
              <h3>▷COVID-19 Help Desk</h3>
            </a>
            <p>
              District Gurugram’s help desk for COVID19. Contains information
              such as helpline numbers, paid quarantine facilities and more.
            </p>
          </li>

          <li class="list-group-item dash">
            <h3>▷Free Zoom consultation with doctors</h3>

            <p>
              “District Administration Gurugram is inviting you to a scheduled
              Zoom meeting to interact with the Medical team.
              <br /> Join online 11 am - 1 pm daily.”
              <br /> <br /> Zoom Meeting ID: 819 7816 9398
              <br /> Passcode: 318187
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Gurugram;
