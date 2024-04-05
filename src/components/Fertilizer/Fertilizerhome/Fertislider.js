import React from "react";
import cow from "../img/fert1 (1).webp";
import fer2 from "../img/fer2.png";
import fer1 from "../img/Ferti.webp";

const Fertislider = () => {
  return (
    <div>
      <div className="containerr">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={fer1} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
            <div className="carousel-item">
              <img src={fer2} className="d-block w-100 h-50" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
            <div className="carousel-item">
              <img src={cow} className="d-block w-100 h-50" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block">
              {/* <h2>welcome to cows mandi</h2> */}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fertislider;
