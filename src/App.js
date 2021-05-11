import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cities from "./components/Cities";
import States from "./components/States";
import Self from "./components/Self";
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

function App() {
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
          </Switch>
        </div>
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
