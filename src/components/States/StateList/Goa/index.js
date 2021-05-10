import React from "react";
import "./style.css";
import goaImage from "./goa.webp";

function Goa() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img src={goaImage} alt="goa-image" className="goaImage" />
            <h4>Goa Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://covidcaregoa.in/">
                  <h3>▷COVID Resource Website foa Goa</h3>
                </a>
                <p>
                  Centralized website for Goa COVID19 resources such as care
                  centers, oxygen suppliers, covid test centers, pharmacies,
                  plasma help, vaccination centers, cooked food, pet sitters,
                  emergency requirement, quarantine centers, ambulances and
                  tele-consultation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Goa;
