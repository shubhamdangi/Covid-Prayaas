import React from "react";
import keralaImage from "./kerala.jpg";
import "./style.css";

function Kerala() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img
              src={keralaImage}
              alt="kerala-image"
              className="keralaImage1"
            />
            <h4>Kerala COVID Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://covid19jagratha.kerala.nic.in/home/">
                  <h3>▷COVID-19 Jagaratha</h3>
                </a>
                <p>
                  SOS Ambulance Request:
                  <a href="https://covid19jagratha.kerala.nic.in/home/addcitizenAmbulanceRequest">
                    Link
                  </a>{" "}
                  <br /> Hospital Dashboard:{" "}
                  <a href="https://covid19jagratha.kerala.nic.in/home/addHospitalDashBoard">
                    Link
                  </a>{" "}
                  <br /> <br /> “Covid19jagratha is a comprehensive solution for
                  effective daily reporting/monitoring of the quarantine and
                  health status of the people under surveillance by Field Health
                  Workers like PHN/JHI/Asha (Ward RRT). This portal is designed
                  for disseminating information related to Covid 19 for public
                  and provisions for accessing emergency services for public.
                  This Covid19 information and management solution is
                  conceptualized and designed by District Administration
                  Kozhikode engaging District NIC and IT Mission teams.”
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kerala;
