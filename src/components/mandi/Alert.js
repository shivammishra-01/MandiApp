import React from "react";
import first from "../img/1st img.jpg";
import second from "../img/2nd.jpg";
import third from "../img/3rd.jpg";

function Alert(props) {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={second} className="d-block w-100 h-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={third} className="d-block w-100 h-50" alt="..." />
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

      
    </>
  );
}

export default Alert;
