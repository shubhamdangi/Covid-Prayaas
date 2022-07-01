import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cities, States, Self, ScrollTop, Public } from "./components";

import {
  Ahmedabad,
  Bangalore,
  Bhopal,
  Gandhinagar,
  Gurugram,
  Hyderabad,
  Indore,
  Jaipur,
  Kolkata,
  Mumbai,
  Pune,
  Ranchi,
} from "./components/Cities/city";
import {
  Ap,
  Delhi,
  Goa,
  Haryana,
  Karnataka,
  Kerala,
  MP,
  Rajasthan,
  Telangana,
  Wb,
} from "./components/States/StateList";
import Tamil from "./components/States/StateList/TN";
import Footer from "./components/Footer";
import Contribute from "./components/Contribute";
import About from "./components/About";
import ReactGA from "react-ga";
import { useEffect } from "react";
import Scroll from "./components/Scroll";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-178759939-5");

    ReactGA.pageview("/");
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="routi">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cities">
              {" "}
              <Cities />
            </Route>
            <Route exact path="/states">
              <States />
            </Route>
            <Route exact path="/selfcare">
              <Self />{" "}
            </Route>
            <Route exact path="https://www.google.com"></Route>
            <Route exact path="/cities/bhopal">
              <Bhopal />{" "}
            </Route>
            <Route exact path="/cities/ahmedabad">
              <Ahmedabad />
            </Route>
            <Route exact path="/cities/bangalore">
              <Bangalore />{" "}
            </Route>
            <Route exact path="/cities/gandhinagar">
              <Gandhinagar />
            </Route>
            <Route exact path="/cities/gurugram">
              <Gurugram />{" "}
            </Route>
            <Route exact path="/cities/hyderabad">
              <Hyderabad />{" "}
            </Route>
            <Route exact path="/cities/jaipur">
              <Jaipur />{" "}
            </Route>
            <Route exact path="/cities/kolkata">
              <Kolkata />{" "}
            </Route>
            <Route exact path="/cities/mumbai">
              <Mumbai />
            </Route>
            <Route exact path="/cities/pune">
              <Pune />{" "}
            </Route>
            <Route exact path="/cities/indore">
              <Indore />{" "}
            </Route>
            <Route exact path="/cities/ranchi">
              <Ranchi />{" "}
            </Route>
            <Route exact path="/states/ap">
              <Ap />{" "}
            </Route>
            <Route exact path="/states/delhi">
              <Delhi />{" "}
            </Route>
            <Route exact path="/states/haryana">
              <Haryana />{" "}
            </Route>
            <Route exact path="/states/goa">
              <Goa />{" "}
            </Route>
            <Route exact path="/states/karnataka">
              <Karnataka />{" "}
            </Route>
            <Route exact path="/states/kerala">
              <Kerala />{" "}
            </Route>
            <Route exact path="/states/mp">
              <MP />{" "}
            </Route>
            <Route exact path="/states/rajasthan">
              <Rajasthan />{" "}
            </Route>
            <Route exact path="/states/tn">
              <Tamil />{" "}
            </Route>

            <Route exact path="/states/telangana">
              <Telangana />{" "}
            </Route>
            <Route exact path="/states/wb">
              <Wb />{" "}
            </Route>
            <Route exact path="/contribute">
              <Contribute />{" "}
            </Route>
            <Route exact path="/about">
              <About />{" "}
            </Route>
            <Route exact path="/public">
              <Public />{" "}
            </Route>
          </Switch>
        </div>
        <br />
        <Footer />
        <ScrollTop />
      </Router>
      <Scroll showBelow={550} />
    </div>
  );
}

export default App;
