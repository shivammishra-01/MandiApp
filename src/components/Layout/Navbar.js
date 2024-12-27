import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";
import { FarmerData, isLoggedIn } from "../Farmer/Auth";
import { AdminrData, isAdminLoggedIn } from "../Dashboard/Admin/AdminAuth";

export default function Navbar() {
  const navigate = useNavigate();
  const navbarRef = useRef(null); // Ref for the navbar collapse

  useEffect(() => {
    isLoggedIn();
    isAdminLoggedIn();
  }, []);

  const logout = (e) => {
    e.preventDefault();
    if (isLoggedIn()) localStorage.removeItem("farmer");
    else if (isAdminLoggedIn()) localStorage.removeItem("admin");
    navigate("/");
  };

  const handleNavLinkClick = () => {
    // Close the navbar collapse programmatically
    if (navbarRef.current) {
      const collapse = new window.bootstrap.Collapse(navbarRef.current);
      collapse.hide();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={navbarRef}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleNavLinkClick}
                >
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
                  onClick={handleNavLinkClick}
                >
                  <i className="fa-solid fa-eject"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Service"
                  onClick={handleNavLinkClick}
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
                    <Link
                      className="dropdown-item"
                      to="/Crops"
                      onClick={handleNavLinkClick}
                    >
                      <center>𝐂𝐫𝐨𝐩𝐬</center>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Animals"
                      onClick={handleNavLinkClick}
                    >
                      <center>𝐀𝐧𝐢𝐦𝐚𝐥𝐬</center>
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/Fertilizer"
                      onClick={handleNavLinkClick}
                    >
                      <center>
                        <i className="fa-sharp fa-thin fa-bag-seedling"></i>{" "}
                        𝐟𝐞𝐫𝐭𝐢𝐥𝐢𝐳𝐞𝐫𝐬
                      </center>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Contact"
                  onClick={handleNavLinkClick}
                >
                  <i className="fa-solid fa-address-book"></i> Contact
                </Link>
              </li>
              {isLoggedIn() || isAdminLoggedIn() ? (
                ""
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Login"
                      onClick={handleNavLinkClick}
                    >
                      <i className="fa-solid fa-user-plus"></i> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Signup"
                      onClick={handleNavLinkClick}
                    >
                      <i className="fa-solid fa-right-to-bracket"></i> SignUp
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn() || isAdminLoggedIn() ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {isLoggedIn() && FarmerData().name}
                    {isAdminLoggedIn() && AdminrData().name}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={
                          isLoggedIn()
                            ? "farmer/Sidebar"
                            : isAdminLoggedIn()
                            ? "admin/AdminSidebar"
                            : ""
                        }
                        onClick={handleNavLinkClick}
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={(e) => {
                          logout(e);
                          handleNavLinkClick();
                        }}
                      >
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
