import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cities from "./index";
import { Bhopal } from "./city";

function List() {
  return (
    <Router>
      {/* <Cities /> */}
      <div>
        <Link to="/cities/bhopal" target="blank">
          Bhopal1
        </Link>
      </div>
    </Router>
  );
}

export default List;
