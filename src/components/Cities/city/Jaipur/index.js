import React from "react";
import "./style.css";
import jaiImage from "./jaipur.webp";

function Jaipur() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={jaiImage} alt="jaipur-image" className="Image" />
          <h4>Jaipur Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://covidinfo.rajasthan.gov.in/Covid19BedsStatusJaipur.aspx">
              <h3>▷Jaipur Hospital Bed Status.</h3>
            </a>
            <p>
              Contains number of available general beds, oxygen beds, ICU beds
              without ventilators and ICU beds with ventilators across Jaipur
              hospitals, with contact numbers.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Jaipur;
