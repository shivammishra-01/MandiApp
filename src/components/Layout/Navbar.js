import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import { FarmerData, isLoggedIn } from "../Farmer/Auth";

export default function Navbar() {
  useEffect(() => {
    isLoggedIn();
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              className="img-fluid"
              alt=""
              style={{ height: "60px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <strong>
                    <i className="fa-solid fa-shop"></i> Mandi
                  </strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/About"
                >
                  <i className="fa-solid fa-eject"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Service"
                >
                  <i className="fa-brands fa-servicestack"></i> Service
                </Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-cart-shopping"></i> Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Crops">
                      <center>
                        {/* <i className="fa-solid fa-wheat-awn"></i> */}
                        𝐂𝐫𝐨𝐩𝐬
                      </center>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Animals">
                      <center>
                        {/* <i className="fa-solid fa-cow"></i> */}
                        𝐀𝐧𝐢𝐦𝐚𝐥𝐬
                      </center>
                    </Link>
                    <Link className="dropdown-item" to="/Fertilizer">
                      <center>
                        {" "}
                        <i className="fa-sharp fa-thin fa-bag-seedling"></i>
                        𝐟𝐞𝐫𝐭𝐢𝐥𝐢𝐳𝐞𝐫𝐬
                      </center>
                    </Link>
                  </li>
                  {/* Add more dropdown items as needed */}
                </ul>
              </li>
              {isLoggedIn() ? (
                ""
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Login"
                    >
                      <i className="fa-solid fa-user-plus "></i> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Signup"
                    >
                      <i className="fa-solid fa-right-to-bracket "></i> SignUp
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn() ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {FarmerData().result}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/Profile">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
