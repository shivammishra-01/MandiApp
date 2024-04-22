import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import "../App.css";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
// import profile from "./All.gif";
// import { FarmerData } from "../../Farmer/Auth";

const AdminSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin/AdminDashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admin/UpdateProfile",
      name: "Update Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/UpdatePassword",
      name: "Update Password",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },

    {
      path: "/admin/AboutUpdate",
      name: "AboutUpdate",
      icon: <FaRegChartBar />,
    },

    {
      path: "/admin/FarmerList",
      name: "FarmerList",
      icon: <FaRegChartBar />,
    },
    

    {
      path: "/admin/ContactList",
      name: "Contact List",
      icon: <FaCommentAlt />,
    },
    {
      path: "/admin/Farmerproduct",
      name: "Farmer product List",
      icon: <FaShoppingBag />,
    },

  ];
  return (
    <div className="">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img src="" alt="Avatar" class="avatar" />
            {/* {FarmerData().name} */}
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="activee"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AdminSidebar;
