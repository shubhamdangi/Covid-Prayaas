import React from "react";
import "./style.css";
import mumImage from "./mumbai.jpg";

function Mumbai() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img src={mumImage} alt="mumbai-image" className="mumbaiImage" />
            <h4>Mumbai Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://www.facebook.com/humansofbombay/photos/a.253147214894263/1681387712070199/">
                  <h3>▷Free Zerodha Emergency Ambulance Services.</h3>
                </a>
                <p>
                  ⦾ Ambulance with oxygen Services <br />
                  ⦾ All over Mumbai service <br />
                  ⦾ 24/7 Service <br />⦾ Toll Free: 18001209974
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://www.instagram.com/p/CN2LUDnl-SH/?utm_source=ig_embed">
                  <h3>▷Hospital Bed Availability</h3>
                </a>
                <p>
                  COVID-19 Hospital Bed Availability, Ambulance, Ward War Room
                  Helpline
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://linktr.ee/covid_directory_mumbai">
                  <h3>▷Covid Seva Champions</h3>
                </a>
                <p>
                  Volunteer based initiative to get all COVID resources in one
                  place. Conducted via Whatsapp groups.
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://nmmchealthfacilities.com/HospitalInfo/showhospitalist">
                  <h3>▷Navi Mumbai Bed Availability.</h3>
                </a>
                <p>
                  Dashboard containing hospital details with number of available
                  ICU beds, isolation beds with/without oxygen and ventilators.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mumbai;
