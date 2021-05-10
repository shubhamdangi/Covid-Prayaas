import React from "react";
import wbImage from "./wb.webp";
import "./style.css";

function Wb() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img src={wbImage} alt="wb-image" className="wbImage1" />
            <h4>West Bengal COVID Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://covidresourceswestbengal.carrd.co/">
                  <h3>▷West Bengal COVID Resources</h3>
                </a>
                <p>
                  Crowdsourced and updated information on: Beds + Ventilators,
                  Oxygen on Rent, Medicine, Plasma/Blood Donation, Ambulance,
                  COVID Testing, Home Care Facilities, Private Hospitals, Mental
                  Health Resources, Tele-medicine Services, Meals/Medicine
                  Delivery for Patients, Helplines and other resources.
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://covidwb.com/">
                  <h3>▷West Bengal COVID Info Dashboard</h3>
                </a>
                <p>
                  Volunteer led initiative to curate live information on beds
                  and plasma availability. Updated every 15 minutes.
                  <br /> <br /> Contains hospital name, phone number, address,
                  and availability of beds with/without oxygen, and with/without
                  ventilators.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wb;
