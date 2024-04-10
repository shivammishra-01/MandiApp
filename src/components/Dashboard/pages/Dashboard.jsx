import React from "react";
import Sidebar from "../components/Sidebar";
import "./pages.css";

const Dashboard = () => {
  return (
    <div className="dash-main">
      <Sidebar />
      <h1>Dashboard page</h1>
    </div>
  );
};

export default Dashboard;
