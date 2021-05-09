import React from "react";
import "./style.css";
import ranchiImage from "./ranchi.jpg";

function Ranchi() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={ranchiImage} alt="ranchi-image" className="Image2" />
          <h4>Ranchi COVID Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <a href="https://www.jharkhand.gov.in/Home/Covid19Dashboard">
              <h3>▷Jharkhand COVID-19 Dashboard</h3>
            </a>
            <p>
              COVID Dashboard on the official website of the state containing
              COVID Helpline and other useful information.
            </p>
          </li>

          <li class="list-group-item dash">
            <a href="https://ranchi.nic.in/covid/">
              <h3>▷Ranchi COVID Info</h3>
            </a>
            <p>
              Contains Helpline numbers in the district and other useful info.
            </p>
          </li>
          <li class="list-group-item dash">
            <a href="https://ranchi.nic.in/hi/%e0%a4%95%e0%a5%8b%e0%a4%b0%e0%a5%8b%e0%a4%a8%e0%a4%be-%e0%a4%b5%e0%a4%be%e0%a4%af%e0%a4%b0%e0%a4%b8-%e0%a4%b8%e0%a5%82%e0%a4%9a%e0%a4%a8%e0%a4%be/">
              <h3>▷Ranchi COVID Info (हिन्दी)</h3>
            </a>
            <p>
              कोरोना वायरस सूचना - Contains Helpline numbers in the district and
              other useful info.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Ranchi;
