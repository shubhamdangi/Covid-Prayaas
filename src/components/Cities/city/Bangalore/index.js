import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import bangaloreimg from "./bangalore.webp";

function Bangalore() {
  return (
    <>
      <div className="dash">
        <div className="Head">
          <img src={bangaloreimg} alt="ahmedabad-image" className="Image" />
          <h4>Bangalore Resources.</h4>
          <hr />
        </div>

        <ul class="list-group list-group-flush ">
          <li class="list-group-item dash">
            <Link
              to={{ pathname: "https://bbmpgov.com/chbms/" }}
              target="blank"
            >
              <h3>▷BBMP Covid-19 Hospital Bed Status Dashboard.</h3>
            </Link>
            <p>
              This BBMP dashboard displays live numbers of Government Quota
              COVID-19 beds available in various government hospitals & medical
              colleges, Private hospitals & medical colleges, and government
              COVID Care Centers.
            </p>
          </li>

          <li class="list-group-item dash">
            <Link
              to={{ pathname: "https://covidhelplinebangalore.com/" }}
              target="blank"
            >
              {/* <span className="headi"> */}{" "}
              <h3>▷COVID Helpline Bangalore.</h3>
              {/* </span> */}
            </Link>
            <p>
              A website with a goldmine of information for resources in
              Bengaluru.
              <br />
              <span style={{ fontWeight: "600" }}>Quick links: </span>
              <br />
              <Link
                to={{
                  pathname:
                    "https://covidhelplinebangalore.com/covid-19-hospital-bed-request/",
                }}
                target="blank"
              >
                <p> ⦿ Hospital Bed Request</p>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://covidhelplinebangalore.com/free-oxygen-cylinders/",
                }}
                target="blank"
              >
                <p> ⦿ Free Oxygen Cylinders</p>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://covidhelplinebangalore.com/ambulance-service-for-covid-patients/",
                }}
                target="blank"
              >
                <p> ⦿ Ambulance Services</p>
              </Link>
            </p>
          </li>

          <li class="list-group-item  dash">
            <Link
              to={{ pathname: "https://discord.gg/AhYB3KWfq2" }}
              target="blank"
            >
              <h3>▷COVID Fighters India Discord Server.</h3>
            </Link>
            <p>Join the #bangalore City channel and post your queries.</p>
          </li>

          <li class="list-group-item  dash">
            <Link
              to={{ pathname: "https://covidbengaluru.com/" }}
              target="blank"
            >
              <h3>▷Bengaluru COVID Informatoin Dashboard.</h3>
            </Link>
            <p>
              Live information on beds and plasma availability, updated every 15
              minutes. <br />
              Contains hospital name, phone number, address, and availability of
              beds with/without oxygen, and with/without ventilators.
            </p>
          </li>

          <li class="list-group-item  dash">
            <Link
              to={{
                pathname:
                  "https://script.google.com/macros/s/AKfycbyHGh-AisJVBuqfZ4pfSqu001AE6JetStqpLL2xg74m-Wgdd5Ogh6yGVKG6gYuqnn1D0g/exec",
              }}
              target="blank"
            >
              <h3>▷Covid Resources Directory.</h3>
            </Link>
            <p>
              A live directory crowdsourced by many NGOs and volunteers, and
              coordinated by Karnataka Government.
              <br />
              Contains information on COVID helplines, test centers, oxygen
              cylinder,concentrator & medicine suppliers, food services,
              ambulance,sanitizations, burial & crematorium services.
            </p>
          </li>

          <li class="list-group-item  dash">
            <Link
              to={{
                pathname:
                  "https://docs.google.com/document/d/10Akg8ioLMOQAS0w99BCFUG9zG9jLCdAGMo5meOEKDnY/edit",
              }}
              activeStyle={{ color: "red" }}
              target="blank"
            >
              <h3>▷List of Consolidated Resources in Bangalore.</h3>
            </Link>
            <p>
              <br />
              <span style={{ fontWeight: "600" }}>Quick links: </span>
              <br />
              <Link
                to={{
                  pathname:
                    "https://docs.google.com/document/d/10Akg8ioLMOQAS0w99BCFUG9zG9jLCdAGMo5meOEKDnY/edit#heading=h.3uopzbd7iz5d",
                }}
                target="blank"
              >
                <p> ⦿ Hospital Beds</p>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://docs.google.com/document/d/10Akg8ioLMOQAS0w99BCFUG9zG9jLCdAGMo5meOEKDnY/edit#heading=h.x72t661bmpxk",
                }}
                target="blank"
              >
                <p> ⦿ Remdesivir</p>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://docs.google.com/document/d/10Akg8ioLMOQAS0w99BCFUG9zG9jLCdAGMo5meOEKDnY/edit#heading=h.7tdeu8ucb439",
                }}
                target="blank"
              >
                <p> ⦿ Food Supplies</p>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://docs.google.com/document/d/10Akg8ioLMOQAS0w99BCFUG9zG9jLCdAGMo5meOEKDnY/edit#heading=h.hzihztnft296",
                }}
                target="blank"
              >
                <p> ⦿ Blood Plasma</p>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://docs.google.com/document/d/10Akg8ioLMOQAS0w99BCFUG9zG9jLCdAGMo5meOEKDnY/edit#heading=h.vaiqv18tqq71",
                }}
                target="blank"
              >
                <p> ⦿ RT-PCR Testing</p>
              </Link>
            </p>
          </li>

          <li class="list-group-item  dash">
            <Link
              to={{ pathname: "https://covid19-twitter.in/" }}
              target="blank"
            >
              <h3>▷COVID-19 Twitter Search</h3>
            </Link>
            <p>
              This tool generates a link to find relevant tweets on Twitter’s
              live feed for current information on resources.
              <br />
              <span style={{ fontWeight: "600" }}>
                Quick links for Bengaluru:{" "}
              </span>
              <br />
              <Link
                to={{
                  pathname:
                    "https://twitter.com/search?f=live&q=verified%20bangalore%20%28bed%20OR%20beds%20OR%20oxygen%20OR%20ventilator%20OR%20ventilators%29%20-%22not%20verified%22%20-%22unverified%22%20-%22needed%22%20-%22required%22&src=typed_query",
                }}
                target="blank"
              >
                <p> ⦿ Beds, Oxygen and Ventilators</p>
              </Link>
            </p>
          </li>

          <li class="list-group-item dash">
            <Link
              to={{
                pathname:
                  " https://twitter.com/Captain_Mani72/status/1388283982186356737",
              }}
              target="blank"
            >
              <h3>▷NammaTeam Telegram Volunteer Group</h3>
            </Link>
            <p>
              Phone number (Telegram only): 8073377597 <br /> A team of
              volunteers called #NammaTeam assists you in getting help from the
              govt and also provides direct help wherever possible. It's FREE
              and 24x7. Text on Telegram Messenger to reach them.
            </p>
          </li>

          <li class="list-group-item dash">
            <h3>▷Mercy Mission COVID-19 Hotlines</h3>
            <p>
              Mercy Mission is a group of 20+ NGO's working in different parts
              of Bangalore.{" "}
              <a href="https://twitter.com/mercymission1">(Twitter link)</a>{" "}
              <br /> ⦾ <b>Mercy Ambulance :</b> 7676881882 (ambulances services
              to and from hospitals) <br />⦾ <b>Mercy Oxygen :</b> 08047191133
              (medical oxygen for emergency and COVID19 post hospitalization
              therapy) <br />⦾ <b>Mercy Booth :</b> 8660856709 for testing,
              hospitalization support for needy)
              <br /> ⦾ <b>Mercy Plasma :</b> 08047191133, Press 2 (plasma
              support for COVID-19 patients)
              <br /> ⦾ <b>Mercy Angels :</b> 08047191134 (dignified last journey
              to burial/cremation Grounds)
            </p>
          </li>
          <li class="list-group-item dash">
            <h3>▷Useful Twitter Accounts</h3>
            <p>
              <a href="https://twitter.com/WeAreBangalore"> WeAreBangalore: </a>{" "}
              WeAreBangalore: Seek and provide COVID-related assistance for the
              Bengaluru community
              <br />
              <a href="https://twitter.com/peakbengaluru">Peakbangalore: </a>
              Retweets COVID resources requests.
            </p>
          </li>
          <li class="list-group-item dash">
            <h3>▷Useful Instagram Accounts</h3>
            <p>
              <a href="https://www.instagram.com/stvorg/guide/bangalore-covid-19-resources/18167434549189471/">
                Bangalore COVID Resources:{" "}
              </a>{" "}
              Here's a comprehensive guide containing a list of resources for
              all requirements that one might have while testing positive for
              COVID 19. For more information or queries, please reach out to us
              via DM!
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Bangalore;
