import React from "react";
import "./style.css";
import indoreImage from "./indore.jpg";

function Indore() {
  return (
    <>
      <div className="pagedata">
        <div className="dash">
          <div className="Head">
            <img src={indoreImage} alt="indore-image" className="indoreImage" />
            <h4>Indore Resources.</h4>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://indore.nic.in/en/events/">
                  <h3>▷Important Notices regarding COVID-19</h3>
                </a>
              </li>

              <li class="list-group-item dash">
                <a href="https://indore.nic.in/%e0%a4%98%e0%a4%9f%e0%a4%a8%e0%a4%be%e0%a4%95%e0%a5%8d%e0%a4%b0%e0%a4%ae/">
                  <h3>▷Important Notices regarding COVID-19 (हिन्दी)</h3>
                </a>
              </li>

              <li class="list-group-item dash">
                <a href="http://imcindore.mp.gov.in/?page_id=1671">
                  <h3>▷Indore important contact numbers</h3>
                </a>
                <p>
                  INDORE MUNICIPAL CORPORATION ( M.P ONLY ) – 0731-253 5555
                  <br />
                  CORONA ( COVID 19 ) HELPLINE : 011-23978046 OR 1075
                  <br />
                  M.P. COVID 19 HELPLINE : 104 , 1075 , 0755-2704201, 2441419,
                  4926892
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Indore;
