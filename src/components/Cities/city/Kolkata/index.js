import React from "react";
import "./style.css";
import kolkataImage from "./kolkata.webp";

function Kolkata() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img
              src={kolkataImage}
              alt="kolkata-image"
              className="kolkataImage"
            />
            <h4>Kolkata Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://docs.google.com/spreadsheets/d/1zW3eMTBj-5E8Al6_khVR28ftzzdLMveB2bYF5IoZ7IY/edit#gid=417053161">
                  <h3>▷Kolkata COVID Help.</h3>
                </a>
                <p>
                  Crowdsourced spreadsheet with information on oxygen, plasma,
                  Remdesivir, hospitals, consultations, ambulances, meals and
                  RT-PCR.
                </p>
              </li>

              <li class="list-group-item dash">
                <a href="https://docs.google.com/spreadsheets/d/1dy1DYjGb15bijab4vVAUyrdtw14va32NgWJqlo_2rcU/htmlview#gid=0">
                  <h3>▷Kolkata COVID Resouces (Verified)</h3>
                </a>
                <p>
                  Verified database with information on oxygen cylinders,
                  ambulances, blood/plasma donation, food delivery,
                  teleconsultation and RT-PCR test.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kolkata;
