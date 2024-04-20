import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/AnimalCard.css";
import { Link } from "react-router-dom";
import murrah from "../img/buffalo.jpg";
import axios from "axios";

const Buffalocard = () => {
  const [Buffalos, setBuffalos] = useState([]);
  const Buffalosdata = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/animaltopname/Buffalos"
    );
    console.log(res);
    setBuffalos(res.data);
  };
  useEffect(() => {
    Buffalosdata();
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
          Newly Added Buffalos Livestock
        </h1>
        <h2 className="view_all">
          <i class="fas fa-eye"></i>
          <Link
            to="/Animals/Buffalo/Product"
            style={{ textDecoration: "none", color: "#4caf50" }}
          >
            view All
          </Link>
        </h2>
      </div>
      <Slider {...settings}>
        {Buffalos &&
          Buffalos.map((element, index) => {
            return (
              <div className="custom-product-card" key={index}>
                <img
                  src={murrah}
                  alt="Product"
                  className="custom-product-image"
                />
                <div className="custom-product-info">
                  <h6 className="custom-product-title">{element.name}</h6>
                  <p className="custom-product-description">
                    <strong>Breed:</strong>
                    {element.breed}
                  </p>
                  <p className="custom-product-description">
                    <strong>Qua:</strong> 10L/Day
                  </p>
                  <p className="custom-product-description">
                    <span className="nowrap">
                      <strong>Price:</strong>₹ {element.price}
                    </span>
                  </p>
                  <p className="custom-product-description">
                    <span className="nowrap">
                      <strong>Quntity:</strong> {element.qnt}
                    </span>
                  </p>

                  <button className="custom-add-to-cart-btn">
                    Buy/Book Now
                  </button>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Buffalocard;
