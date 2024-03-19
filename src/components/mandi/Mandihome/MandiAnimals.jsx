import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/MandiCard.css";
import { Link } from "react-router-dom";
import murrah from "../img/card2 (2).jpg";
// import cows from "../img/anime_cow.gif"

const MandiAnimals = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(), // Adjust slidesToShow dynamically
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to calculate the number of slides to show based on screen width
  function calculateSlidesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 3;
    } else if (screenWidth >= 600) {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <div>
      <div className="header">
        <h1 className="sec_title">
          <i class="fas fa-hourglass-half">
            {/* <i class="fas fa-caret-right"></i> */}
          </i>
          These Types Animals Are Availables
        </h1>
        <h2 className="view_all">
          <i class="fas fa-eye"></i>
          <Link
            to="/Animals "
            style={{ textDecoration: "none", color: "#4caf50" }}
          >
            view All
          </Link>
        </h2>
      </div>
      <Slider {...settings}>
        <div className="custom-product-card">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
          </div>
        </div>
        <div className="custom-product-card">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
          </div>
        </div>
        <div className="custom-product-card">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
          </div>
        </div>
        <div className="custom-product-card">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
          </div>
        </div>
        <div className="custom-product-card">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
          </div>
        </div>
        <div className="custom-product-card">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
          </div>
        </div>
        <div className="custom-product-card">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MandiAnimals;
