import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Bhopal } from "./city";
function Cities() {
  return (
    <div className="cityLinks">
      <ul class="list-group list-group-flush cities">
        <li class="list-group-item">
          <Link to="/cities/bhopal">Bhopal</Link>
        </li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
}

export default Cities;
