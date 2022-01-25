import React from "react";
import "./style.css";
import bannerImage from "./bannerImage2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import flagImage from "./flag4.png";
import mobile from "./mobile.png";
import rol from "../Navbar/roli8.gif";

function Feed() {
  return (
    <>
      <div className="feedpage">
        <div className="banner">
          <div class="container-fluid">
            <div class="row" style={{ alignItems: "center" }}>
              <div class="col-lg-6 tag1">
                <h1 class="heading head">
                  A comprehensive collection of COVID-19 resources across India.
                </h1>
                <h1 class="heading head-m">
                  A comprehensive collection of COVID-19 resources across India.
                </h1>
                <br />
                <p
                  style={{
                    padding: " 10px 10px 30px 10px",
                    marginLeft: "-4px",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Disclaimer: </span>I've
                  manually curated the content, But due to the nature and
                  paucity of the information, All resources are{" "}
                  <span style={{ fontWeight: "600" }}>not</span> personally
                  verified. Please use caution and perform due diligence before
                  using them.
                  <br />
                  <br />
                  <span style={{ fontWeight: "600" }}>Last Updated: </span>
                  20/06/2021 · 01:05 AM
                </p>
              </div>
              <div class="col-lg-6 ml-auto">
                <img class="pic" src={bannerImage} alt="pc" />
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="dash">
          <div className="Head">
            <hr />
            <h3 style={{ margin: "0 6px 0 5px" }}>
              <img
                src={rol}
                alt="rol gif"
                style={{ width: "22px", margin: "-4px -6px 0 0" }}
                className="dot2"
              />
              <span style={{ color: "#222831" }}>
                &nbsp;Select <span style={{ fontWeight: "bold" }}>Cities</span>{" "}
                and <span style={{ fontWeight: "bold" }}>States</span> to find
                specific resources.
              </span>
            </h3>

            <hr />
            <br />
            {/* <hr /> */}
            <img src={flagImage} alt="India-image" className="flagImage" />
            <h1>National Resources</h1>
            <hr />
          </div>
          <div className="contents">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item dash">
                <a href="https://covidwin.in/">
                  <h3>▷Covid Win</h3>
                </a>
                <p>
                  Crowdsourced COVID-19 resources including Oxygen, Hospital
                  Beds, Remdesivir, Plasma/Blood, Food, Ambulance, Testing and
                  Emergency services. <br /> Can be searched by state and city.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidkhoj.in/">
                  <h3>▷Covid-Khoj</h3>
                </a>
                <p>
                  Crowdsourced contact numbers for resources such as beds,
                  oxygen, plasma and more across India and different cities.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidrelief.glideapp.io/">
                  <h3>▷CovRelief</h3>
                </a>
                <p>
                  This is a non-profile app for live tracking of hospital beds.
                  All information is taken from respective government websites{" "}
                  <br /> Twitter:{" "}
                  <a href="https://twitter.com/CovRelief">Link</a>
                  <br /> Facebook group (COVID Survivor Force India):{" "}
                  <a href="https://www.facebook.com/groups/369926160667196/?ref=share">
                    Link
                  </a>
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://coronaresources.web.app/">
                  <h3>▷Corona Resources</h3>
                </a>
                <p>
                  {" "}
                  Dashboard that surfaces information for Injections, Hospital
                  Beds, Oxygen Cylinders and Plasma. Can be categorized by
                  “India” or specific states.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covid19-twitter.in/">
                  <h3>▷Twitter Search for COVID Resources</h3>
                </a>
                <p>
                  This tool generates a link to find relevant tweets on
                  Twitter’s live feed for current information on resources such
                  as beds, oxygen, etc in various cities of India.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://discord.gg/AhYB3KWfq2">
                  <h3>▷COVID Fighters (India) Discord Server</h3>
                </a>
                <p>
                  A public community with channels for: <br />
                  <br /> ⦾ Basic Resources: Home food delivery, Advice from
                  doctors, etc
                  <br /> ⦾ Cities: Delhi, Lucknow, Bengaluru, etc
                  <br /> ⦾ States: Maharashtra, Karnataka, West Bengal, etc
                  <br /> ⦾ Resources: Oxygen cylinders, Ventilators, Ambulance,
                  etc
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://bookmyslot.life/">
                  <h3>▷BookMySlot</h3>
                </a>
                <p>
                  {" "}
                  A simple desktop app for automatic vaccination appointment
                  booking.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://under45.in/telegram.php">
                  <h3>▷Telegram Alerts for Vaccination Slots</h3>
                </a>
                <p>
                  {" "}
                  This tool provides telegram alerts for vaccination slots in
                  your city for under the age of 45 people.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidfightclub.org/">
                  <h3>▷COVID Fight Club </h3>
                </a>
                <p>
                  Crowdsourced resources to fight COVID across India. Find
                  oxygen, plasma, medicines, hospital beds and more.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://docs.google.com/document/d/16WeMKah7RXoB1gnqa9YXVTuWM4TR6hY9Qys48Pf8mCc/edit">
                  <h3>▷All India COVID-19 Helpline </h3>
                </a>
                <p>
                  This document includes a list of contacts, websites and
                  organizations to access hospital beds, medication, plasma
                  donors, oxygen cylinders and meal deliveries across India, and
                  in Indian states of Madhya Pradesh, Chattisgarh, Lucknow,
                  Allahabad, Kanpur and Varanasi.{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://docs.google.com/spreadsheets/d/1usFTYcZbvn7e4_YK0lxcPhDO_CSvwdkeSfbdYAbi4jg/edit#gid=0">
                  <h3>▷Covid Official Resources </h3>
                </a>
                <p>
                  Crowdsourced spreadsheet with the following information:
                  Helpline numbers, Support apps/groups, Resource/Social pages,
                  Testing centers and Quarantine locations.{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://drive.google.com/file/d/1UNSO4KhhrfL45FGg5NNwq6N5HFkeQEcC/view">
                  <h3>▷Medical Oxygen Suppliers for Home Use </h3>
                </a>
                <p>
                  PDF file by aiigma (All India Industrial Gases Manufacturers’
                  Association) listing Medical Oxygen Suppliers for Home Use
                  across India, sorted by states.{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidindiasupport.com/">
                  <h3>▷COVID-19 India Handbook </h3>
                </a>
                <p>
                  Crowdsourced library of regional resources, support groups and
                  COVID-19 related data.{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://life.coronasafe.network/">
                  <h3>
                    ▷LIFE: Verified Crowd Sourced Emergency Services Directory{" "}
                  </h3>
                </a>
                <p>
                  Search by city or state to find availability of oxygen,
                  medicine, hospital, ambulance, helpline and plasma.{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidplasma.online/">
                  <h3>▷COVID-19 Plasma therapy resources </h3>
                </a>
                <p>
                  Comprehensive portal for everything plasma related. Contains
                  plasma resources for Pan India and State, and COVID19
                  medicines.{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidmealsforindia.com/">
                  <h3>▷Covid Meals for India </h3>
                </a>
                <p>
                  Website with details of meal providers across India,
                  categorized by state and city.{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <h3>▷Useful Twitter Accounts </h3>
                <p>
                  {" "}
                  <a href="https://twitter.com/COVID19_INDIA">@COVID19_INDIA</a>
                  : Provides links for resources and assists people to locate
                  resources.
                  <br /> Twitter megathread with resources:
                  <a href="https://twitter.com/tanejamainhoon/status/1385855931276136449">
                    Link
                  </a>{" "}
                </p>
              </li>
              <li class="list-group-item dash">
                <h3>▷Useful Instagram Accounts </h3>
                <p>
                  {" "}
                  <a href="https://www.instagram.com/covid_resources/">
                    @covid_resources
                  </a>
                  ,{" "}
                  <a href="https://www.instagram.com/covid19help2021/">
                    @covid19help2021
                  </a>
                  ,{" "}
                  <a href="https://www.instagram.com/covid19helpindia/">
                    @covid19helpindia
                  </a>
                  , <a href="https://www.instagram.com/dhoondh/"> dhoondh</a>(A
                  not-for-profit initiative that connects COVID patients to
                  plasma donors across India),{" "}
                  <a href="https://www.instagram.com/covidaidresources/">
                    @covidaidresources
                  </a>
                  ,{" "}
                  <a href="https://www.instagram.com/covid19help.in/">
                    covid19help.in
                  </a>
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://www.reddit.com/r/india/comments/mtfegz/collated_resources_for_covid19_beds_plasma_oxygen/">
                  <h3>▷Reddit Collated Resources for COVID19 </h3>
                </a>
                <p>
                  Reddit megathread with resources across India, and different
                  states and cities.{" "}
                </p>
              </li>
              <div className="Head">
                <br />
                <img src={mobile} alt="mobile" />
                <h4>Useful Mobile Apps</h4>
              </div>{" "}
              <hr />
              <li class="list-group-item dash">
                <a href="https://indiacovidresources.in/ ">
                  <h3>▷COVID Resources </h3>
                </a>
                <p>
                  Up-to-date availability and contact info of pan-India
                  crowdsourced Covid resources.
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidtools.in/ ">
                  <h3>▷COVID Tools </h3>
                </a>
                <p>
                  Covid relief resources like Hospital Beds, Oxygen, Remdesivir,
                  etc. aggregated from multiple sources
                </p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covidresource.glideapp.io/">
                  <h3>▷SOS COVID Resources </h3>
                </a>
                <p>Nation-wide crowdsourced info about COVID Resources.</p>
              </li>
              <li class="list-group-item dash">
                <a href="https://covid19sos.glideapp.io/ ">
                  <h3>▷COVID-19 Emergency Tracker </h3>
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
