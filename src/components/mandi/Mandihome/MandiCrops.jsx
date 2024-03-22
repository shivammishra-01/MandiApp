import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/MandiCard.css";
import { Link } from "react-router-dom";
import murrah from "../img/Crops.jpeg";
import wheat from "../img/wheat.jpg";
import pulses from "../img/pulses.jpg";
// import mustard from "../img/mustard.png";

const MandiCrops = () => {
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
          These Types Crops Are Availables
        </h1>
        <h2 className="view_all">
          <i class="fas fa-eye"></i>
          <Link
            to="/Crops"
            style={{ textDecoration: "none", color: "#4caf50" }}
          >
            view All
          </Link>
        </h2>
      </div>
      <Slider {...settings}>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>Paddy</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={pulses} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Pulses</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={wheat} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Wheat</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h4 className="custom-product-title">Product Name</h4> */}
            <p className="custom-product-description">
              <strong>Mustard</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <p className="custom-product-description">
              <strong>Maize</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <p className="custom-product-description">
              <strong>Millets</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <p className="custom-product-description">
              <strong>Oilseeds</strong>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MandiCrops;
