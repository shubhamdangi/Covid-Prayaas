import React from "react";
import "./style.css";
import harImage from "./haryana.png";

function Haryana() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={harImage} alt="haryana-image" className="haryanaImage" />
          <h4>Haryana Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://coronaharyana.in/">
              <h3>▷Haryana COVID-19 Website</h3>
            </a>
            <p>
              Centralized COVID19 information for Haryana. Contains information
              about hospitals, care centers, testing labs and collection
              centers. <br /> <br /> Provides bed availability details across
              Haryana and Gurugram.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Haryana;
