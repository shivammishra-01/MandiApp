import React from "react";
import cow from "../img/cows1.jpg";
import goat from "../img/goat.jpg";
import buff from "../img/buff.jpg";
import sc1 from "../img/anime_cow.gif";
import sc2 from "../img/anime_buffallo.gif";
import sc3 from "../img/anime_goat.gif";
import sc4 from "../img/anime_sheep.gif";
import sc5 from "../img/All.gif";
import "./css/Animals.css";

const anislider = () => {
  
  return (
    <div>
      <center>
        <h1>🎀 𝒲𝑒𝓁𝒸☯𝓂𝑒 𝓉❀ 𝒜𝓃𝒾𝓂𝒶𝓁 𝒫𝒶𝑔𝑒𝓈 🎀</h1>
      </center>
      <div className="container">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={cow} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
            <div className="carousel-item">
              <img src={goat} className="d-block w-100 h-50" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
            <div className="carousel-item">
              <img src={buff} className="d-block w-100 h-50" alt="..." />
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
        {/* smallcard */}
        <div className="row">
          <div className="column">
            <div className="smallcard">
              <img src={sc5} alt="John" />
              <h6>
                <button>All</button>
              </h6>
            </div>
          </div>
          <div className="column">
            <div className="smallcard">
              <img src={sc1} alt="John" />
              <h6>
                <button>Cow</button>
              </h6>
            </div>
          </div>

          <div className="column">
            <div className="smallcard">
              <img src={sc2} alt="John" />
              <h6>
                <button>Buffallo</button>
              </h6>
            </div>
          </div>

          <div className="column">
            <div className="smallcard">
              <img src={sc3} alt="John" />
              <h6>
                <button>Goat</button>
              </h6>
            </div>
          </div>

          <div className="column">
            <div className="smallcard">
              <img src={sc4} alt="John" />
              <h6>
                <button>Sheep</button>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default anislider;
