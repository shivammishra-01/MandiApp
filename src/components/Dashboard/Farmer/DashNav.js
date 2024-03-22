import React from "react";
// import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import "./DashboardNavbar.css";

function DashNav() {
  return (
    <Router>
      <div className="dashboard">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default DashNav;
