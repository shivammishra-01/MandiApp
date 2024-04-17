import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./Pages.css";

const AdminDashboard = () => {
  return (
    <div className="dash-main">
      <AdminSidebar />
      <h1>Dashboard page</h1>
    </div>
  );
};

export default AdminDashboard;
