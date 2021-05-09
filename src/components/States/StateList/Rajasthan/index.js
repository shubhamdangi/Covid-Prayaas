import React from "react";
import "./style.css";
import rajImage from "./rajasthan.webp";

function Rajasthan() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img
            src={rajImage}
            alt="rajasthan-image"
            className="rajasthanImage1"
          />
          <h4>Rajasthan COVID Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://covidinfo.rajasthan.gov.in/index.aspx">
              <h3>▷COVID-19 Info Rajasthan Govt.</h3>
            </a>
            <p>
              Official government website for COVID-19 resources in Rajasthan
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://covidinfo.rajasthan.gov.in/COVID19HOSPITALBEDSSTATUSSTATE.aspx">
              <h3>▷State Hospital Bed Status</h3>
            </a>
            <p>
              Contains number of available general beds, oxygen beds, ICU beds
              without ventilators and ICU beds with ventilators across Rajasthan
              districts, with district control room phone numbers.{" "}
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://covidinfo.rajasthan.gov.in/Covid-19hospital-wisebedposition-wholeRajasthan.aspx">
              <h3>▷Hospital wise Bed Status</h3>
            </a>
            <p>
              Contains number of available general beds, oxygen beds, ICU beds
              without ventilators and ICU beds with ventilators across
              individual Rajasthan hospitals, with hospital phone number and
              district control room phone number.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Rajasthan;
