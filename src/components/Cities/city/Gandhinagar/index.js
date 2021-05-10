import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import GImage from "./gandhinagar.jpg";

function Gandhinagar() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img
              src={GImage}
              alt="gandhinagar-image"
              className="gandhinagarImage"
            />
            <h4>Gandhinagar Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://covidgandhinagar.com/">
                  <h3>▷Gandhinagar COVID Info.</h3>
                </a>
                <p>
                  Volunteer led initiative to curate live information on beds
                  and plasma availability, updated every 15 minutes. <br />
                  Contains hospital name, phone number, address, and
                  availability of beds with/without oxygen, and with/without
                  ventilators.
                </p>
                <br />
                <br />
                <br />
                <p>more resources coming soon..</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gandhinagar;
