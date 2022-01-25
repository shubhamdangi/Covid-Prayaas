import React from "react";
import "./style.css";
import support from "./support.png";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";

function Contribute() {
  let history = useHistory();

  return (
    <div className="gform">
      <br /> <br /> <br />
      <div
        className="back"
        style={{ textAlign: "left", padding: "0 0 0 20px" }}
      >
        <Button onClick={() => history.goBack()}>
          <ArrowBackIosIcon /> Go Back
        </Button>
      </div>
      <img src={support} alt="support" style={{ width: "100px" }} />
      <h2>Contribute a Resource</h2>
      <div className="pc">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScCVb44pWKwtrjkOa_cct1-S0fOtzS4hFWfQggvs05m1d6DjA/viewform?embedded=true"
          width="750"
          height="1310"
          scrolling="no"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <div className="mobile">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScCVb44pWKwtrjkOa_cct1-S0fOtzS4hFWfQggvs05m1d6DjA/viewform?embedded=true"
          width="350"
          height="1410"
          scrolling="no"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Contribute;
