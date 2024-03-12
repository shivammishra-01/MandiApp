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
                  to="/Contact"
                >
                  <i className="fa-brands fa-servicestack"></i> Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Contact"
                >
                  <i className="fa-solid fa-cart-shopping"></i> Product
                </Link>
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
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {FarmerData().result}
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
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
