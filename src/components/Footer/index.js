import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="icon" style={{ padding: "0 10px 0 10px" }}>
          {/* <a href="https://www.facebook.com/shubhamdangi.sd">
            <i class="icons fab fa-facebook fa-lg"></i>
          </a> */}

          <a href="https://twitter.com/ishubhamdangi">
            <i class=" icons fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/ishubhamdangi/">
            <i class="icons fab fa-linkedin-in fa-lg"></i>
          </a>

          <a href="https://github.com/shubhamdangi">
            <i class="icons fab fa-github fa-lg"></i>
          </a>

          {/* <a href="mailto:cybergeek.shubham404@gmail.com">
            <i class="icons fas fa-envelope fa-lg #4ca1a3"></i>
          </a> */}
        </div>
        <p
          style={{
            color: "#5C5C60",
            fontWeight: "600",
            paddingLeft: "0",
            marginLeft: "0",
          }}
        >
          Curated with{" "}
          <span style={{ width: "10px", height: "10px" }}>
            <i class="fas fa-heart"></i>
          </span>{" "}
          by Shubham Dangi <br />{" "}
        </p>
        <p className="footlink">
          <Link to="/contribute">
            <u> Contribute</u>
          </Link>{" "}
          {""}· {""}
          {""}
          <Link to="/about">
            <u>About </u>
          </Link>
        </p>
        <br />
      </div>
    </>
  );
}

export default Footer;
