import React from "react";
import "./style.css";
import mpImage from "./mp.png";

function MP() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={mpImage} alt="mp-image" className="mpImage" />
          <h4>Madhya Pradesh COVID Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://covidmp.com/">
              <h3>▷M.P. COVID-19 Info</h3>
            </a>
            <p>
              Volunteer led initiative to curate live information on beds and
              plasma availability, updated every 15 minutes. <br /> <br />{" "}
              Contains hospital name, phone number, address, and availability of
              beds with/without oxygen, and with/without ventilators.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MP;
