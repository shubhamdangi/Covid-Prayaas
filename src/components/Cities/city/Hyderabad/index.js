import React from "react";
import "./style.css";
import HydImage from "./hyderabad.webp";

function Hyderabad() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img
              src={HydImage}
              alt="hyderabad-image"
              className="hyderabadImage"
            />
            <h4>Hyderabad Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://hydcovidresources.com/">
                  <h3>▷Hyderabad COVID Resources.</h3>
                </a>
                <p>
                  A web/phone application: “We're building this app for the most
                  extensive collection of resources for fighting COVID in
                  Hyderabad. Powered by Soapbox by Medha Kadri. If you have
                  resources you want us to add, fill this form:
                  https://t.co/rtOG0Dsm16”
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://linktr.ee/hydcovid">
                  <h3>▷Covid Resources</h3>
                </a>
                <p>Helplines for Hyderabad and information about scams.</p>
              </li>

              <li class="list-group-item dash">
                <a href="http://covidinfo.streetcause.org/home.html">
                  <h3>▷Project Aasha by StreetCause</h3>
                </a>
                <p>
                  Local NGO providing COVID19 related help for plasma/blood
                  requirements and donation, oxygen cylinders, doctor
                  consultation, meal services, and vaccinations.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hyderabad;
