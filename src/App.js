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
  Jaipur,
  Kolkata,
  Mumbai,
} from "./components/Cities/city";

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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
