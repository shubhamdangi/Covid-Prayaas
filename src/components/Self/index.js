import React from "react";
import "./style.css";
import self from "./house.png";
function Self() {
  return (
    <>
      <div className="dash1">
        <div className="Head">
          <img src={self} alt="self-image" className="selfImage" />
          <h4>Self Care at Home</h4>
          <hr />
        </div>

        <div className="contents">
          <ul class="list-group list-group-flush ">
            <li class="list-group-item dash">
              <a href="https://www.indiacovidsos.org/home-care">
                <h3>▷Managing COVID at Home</h3>
              </a>
              <p>
                The infographic on this page provides concise practical advice
                for the management of COVID-19 in adults at home. <br />{" "}
                Download PDF file{" "}
                <a href="https://static1.squarespace.com/static/60829d3f2f262c265bb5f164/t/6085f01e79061c4ec4a49428/1619390495055/COVID_Homecare_V2_20210426.pdf">
                  here
                </a>
                .
              </p>
            </li>

            <li class="list-group-item dash">
              <h3>
                ⦿Tips for managing COVID-19 at Home in different Languages:
              </h3>
              <p>
                <span style={{ fontWeight: "600" }}>
                  Click the links below to view and download a high-resolution
                  PNG/PDF of the infographic of your chosen language.
                </span>
              </p>
              <p>
                ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-assamese ">
                  {" "}
                  Assamese
                </a>
                <br /> ⦾{" "}
                <a href=" https://www.indiacovidsos.org/home-care/covid-management-at-home-bhojpuri">
                  Bhojpuri{" "}
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-banglain ">
                  Bangla/বাংলা{" "}
                </a>
                <br /> ⦾{" "}
                <a href=" https://www.indiacovidsos.org/home-care/covid-management-at-home">
                  English
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-goankonkani ">
                  GoanKonkani{" "}
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-gujarati ">
                  {" "}
                  Gujarati/ગુજરાતી
                </a>
                <br /> ⦾{" "}
                <a href=" https://www.indiacovidsos.org/home-care/covid-management-at-home-hindi">
                  {" "}
                  Hindi/हिंदी
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-kannada ">
                  {" "}
                  Kannada/ಕನ್ನಡ
                </a>
                <br /> ⦾{" "}
                <a href="https://buffalo-grapefruit-7mkd.squarespace.com/home-care/covid-management-at-home-malayalam ">
                  {" "}
                  Malayalam/മലയാളം
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-manipuri ">
                  Manipuri
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-marathi ">
                  Marathi/मराठी
                </a>
                <br /> ⦾{" "}
                <a href=" https://www.indiacovidsos.org/home-care/covid-management-at-home-mizo">
                  Mizo
                </a>
                <br /> ⦾{" "}
                <a href="https://indiacovidsos.org/home-care/covid-management-at-home-nagamese ">
                  Nagamese
                </a>
                <br /> ⦾{" "}
                <a href="https://indiacovidsos.org/home-care/covid-management-at-home-odia ">
                  Odia/ଓଡିଆ
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-punjabi ">
                  Punjabi/ਪੰਜਾਬੀ{" "}
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-santhali ">
                  {" "}
                  Santali/ᱥᱟᱱᱛᱟᱲᱤ
                </a>
                <br /> ⦾{" "}
                <a href=" https://www.indiacovidsos.org/home-care/covid-management-at-home-tamil">
                  Tamil/தமிழ்{" "}
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-telugu ">
                  Telugu/తెలుగు
                </a>
                <br /> ⦾{" "}
                <a href="https://www.indiacovidsos.org/home-care/covid-management-at-home-urdu ">
                  Urdu/اردو
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Self;
