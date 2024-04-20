import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/CropCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import murrah from "../img/cotton.webp";
import { isLoggedIn } from "../../Farmer/Auth";

const Cashcrops = () => {
  const [plantationcrop, setPlantationcrop] = useState([]);
  const plantationcrops = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/croptopname/Plantationcrops",
      { headers: { "Content-Type": "application/json" } }
    );
    if (res.status === 200 && res.data.length !== 0) {
      setPlantationcrop(res.data);
    }
  };
  useEffect(() => {
    plantationcrops();
  }, []);
  const settings = {
    // dots: true,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
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
      return 5;
    } else if (screenWidth >= 845) {
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
          Newly Added Cashcrops Livestock
        </h1>
        <h2 className="view_all">
          <i class="fas fa-eye"></i>
          <Link
            to="/Crops/Cashcrops/Product"
            style={{ textDecoration: "none", color: "#4caf50" }}
          >
            view All
          </Link>
        </h2>
      </div>
      <Slider {...settings}>
        {plantationcrop &&
          plantationcrop.map((element, index) => {
            return (
              <div className="custom-product-card">
                <img
                  src={`http://localhost:8080/crops/${element.image}`}
                  alt="Product"
                  className="custom-product-image"
                />
                <div className="custom-product-info">
                  {/* <h6 className="custom-product-title">Product Name</h6> */}
                  <p className="custom-product-description">
                    <strong>{element.name}</strong>
                  </p>
                  <p className="custom-product-description">
                    <strong>Qnt:</strong> {element.qnt} kg
                  </p>
                  <p className="custom-product-description">
                    <span className="nowrap">
                      <strong>Price:</strong>
                      {element.price}/kg
                    </span>
                  </p>
                  <p className="custom-product-description">
                    <span className="nowrap">
                      <strong>Variety:</strong> {element.variety}
                    </span>
                  </p>

                  {isLoggedIn() ? (
                    <button className="custom-add-to-cart-btn">
                      Buy/Book Now
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Cashcrops;
