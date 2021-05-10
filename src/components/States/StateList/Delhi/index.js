import React from "react";
import "./style.css";
import delhiImage from "./delhi.jpg";

function Delhi() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img src={delhiImage} alt="delhi-image" className="delhiImage" />
            <h4>Delhi Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://coronabeds.jantasamvad.org/">
                  <h3>▷COVID Dashboard</h3>
                </a>
                <p>
                  Live dashboard of Occupied and Vacant COVID19 Beds and ICU
                  Beds available. Data reported by Nodal Officers of each
                  Dedicated COVID-19 Hospital.
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://coviddelhi.com/">
                  <h3>▷COVID Delhi Info</h3>
                </a>
                <p>
                  Live dashboard with COVID19 bed availability and plasma
                  availability. Created by volunteers (team@icrnet.org).
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://covid-19-hospital-data.el.r.appspot.com/">
                  <h3>▷COVID Hospital Data</h3>
                </a>
                <p>
                  This tool enables you to view availability of beds,
                  ventilators and other critical Covid infrastructure on a map
                  so you can find one close to you. <br /> <br /> Twitter:{" "}
                  <a href="https://twitter.com/covid_map_india">
                    @covid_map_india
                  </a>
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://twitter.com/khalsaaid_india/status/1385550136412045312/photo/1">
                  <h3>▷Khalsa Aid Free Oxygen Concentrators</h3>
                </a>
                <p>
                  Providing Oxygen Concentrators to COVID-19 Patients <br />
                  <br /> WhatsApp: 9115609005
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://hemkuntfoundation.com/oxygen-cylinder/">
                  <h3>
                    ▷Free Oxygen Cylinders for COVID patients (Hemkunt
                    Foundation)
                  </h3>
                </a>
                <p>24/7 helpline: +91-8700013641</p>
              </li>

              <li class="list-group-item dash">
                <a href="https://indianhelpline.com/DELHI-HELPLINE-NUMBERS/">
                  <h3>▷Delhi Helpline Numbers</h3>
                </a>
                <p>
                  Contains helplines for COVID19 assistance, ambulances, blood
                  banks and more.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delhi;
