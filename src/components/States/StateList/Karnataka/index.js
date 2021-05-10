import React from "react";
import karImage from "./karnatak.png";
import "./style.css";

function Karnataka() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img src={karImage} alt="karnataka-image" className="karImage" />
            <h4>Karnataka COVID Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://script.google.com/macros/s/AKfycbyHGh-AisJVBuqfZ4pfSqu001AE6JetStqpLL2xg74m-Wgdd5Ogh6yGVKG6gYuqnn1D0g/exec">
                  <h3>▷COVID Resources Directory by Karnataka Government</h3>
                </a>
                <p>
                  Contains information for COVID helplines, test centers, oxygen
                  suppliers, food services and ambulance services. <br />{" "}
                  Source:{" "}
                  <a href="https://twitter.com/prajwalmanipal/status/1386310024134160385">
                    Twitter
                  </a>
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://covid19.karnataka.gov.in/page/Helpline/en">
                  <h3>▷Helplines - COVID-19 Information Portal</h3>
                </a>
                <p>
                  Contains a list of Karnataka district-wise COVID19 Control
                  Room numbers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Karnataka;
