import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cities from ".";
import { Bhopal } from "./city";

function List() {
  return (
    <Router>
      {/* <Cities /> */}
      <div>
        <Switch>
          <Route exact path="/cities/bhopal">
            <Bhopal />
          </Route>
          <Route exact path="/cities">
            <Cities />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default List;
