import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3">
            <h6 className="text-uppercase fw-bold head">Mandi.com</h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2">
            <h6 className="text-uppercase fw-bold head">Products</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white para">
                  Crops mandi
                </a>
              </li>
              <li>
                <a href="#!" className="text-white para">
                  Animals mandi
                </a>
              </li>
              <li>
                <a href="#!" className="text-white para">
                  Fertilizers mandi
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2">
            <h6 className="text-uppercase fw-bold head">Useful links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white para">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#!" className="text-white para">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="#!" className="text-white para">
                  Shipping Rates
                </a>
              </li>
              <li>
                <a href="#!" className="text-white para">
                  Help
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3">
            <h6 className="text-uppercase fw-bold head">Contact</h6>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-home mr-3"></i> Darbhanga, Bihar, Bharat
              </li>
              <li>
                <i className="fas fa-envelope mr-3"></i> Farmer@mandi.com
              </li>
              <li>
                <i className="fas fa-phone mr-3"></i> +91 9142624636
              </li>
              <li>
                <i className="fas fa-print mr-3"></i> +91 7855016610
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="background">
        {/* Your SVG or background wave goes here */}
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(75, 150, 60, 0.2)" }}
      >
        © 2023 project:
        <a className="text-white" href="#" para>
          mandi.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
