import React from "react";
import "./style.css";
import bannerImage from "./bannerImage.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Feed() {
  return (
    <>
      <div className="banner">
        <div class="container-fluid">
          <div class="row" style={{ alignItems: "center" }}>
            <div class="col-lg-6 tag">
              <h1 class="heading head">
                A curated comprehensive list of{" "}
                <span className="covid">COVID-19</span> resources across India.
              </h1>
              <br />
              <p style={{ padding: " 10px 0 40px 0" }}>
                <span style={{ fontWeight: "600" }}>Note: </span>I've manually
                curated the content, But due to the nature and quantity of the
                information, All resources are not personally verified. Please
                use caution and perform due diligence before using them.
                <br />
                <br />
                <span style={{ fontWeight: "600" }}>Last Updated: </span>
                07/05/2021·12:22 PM
              </p>
            </div>
            <div class="col-lg-6 ml-auto">
              <img class="pic" src={bannerImage} alt="pc" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
