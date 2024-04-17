import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./Pages.css";
const FarmerList = () => {
  return (
    <div className="dash-main">
      <AdminSidebar />
      {/* <UserListPage /> */}
      <h1>Farmer List</h1>
    </div>
  );
};

export default FarmerList;
