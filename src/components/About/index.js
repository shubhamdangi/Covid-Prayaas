import React from "react";
import info from "./info.png";

function About() {
  return (
    <div
      className="aboutpage"
      style={{ textAlign: "center", padding: "10px 5vw 10px 5vw" }}
    >
      <br /> <br /> <br />{" "}
      <img
        src={info}
        alt="info-image"
        style={{ width: "150px", padding: "15px" }}
      />
      <p style={{ fontSize: "20px", marginLeft: "0" }}>
        Hello, i'm Shubham Dangi a web developer from Bangalore India, and I
        created <span style={{ fontWeight: "600" }}>COVID Sahayog</span> to help
        people access multiple resources related to COVID-19 at one place
        quickly and accurately.
      </p>
      <p style={{ fontSize: "20px", marginLeft: "0" }}>
        <span style={{ fontWeight: "600" }}>Disclaimer: </span> All of the
        information curated here is already publicly available and I Do Not own
        any of it. I've just tried to organize multiple resources in one place
        so people can easily access them. All of the information is Not 100%
        verified by me. <br /> <br />
        I've manually curated the content, But due to the nature and paucity of
        the information, All resources are not personally verified. Please use
        caution and perform due diligence before using them.
      </p>
    </div>
  );
}

export default About;
