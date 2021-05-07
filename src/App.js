import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cities from "./components/Cities";
import States from "./components/States";
import Self from "./components/Self";
import List from "./components/Cities/List";

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
              <List />
            </Route>
            <Route exact path="/states">
              <States />
            </Route>
            <Route exact path="/selfcare">
              <Self />{" "}
            </Route>
            <Route exact path="https://www.google.com"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
