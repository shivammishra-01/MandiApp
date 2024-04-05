import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/MandiCard.css";
import { Link } from "react-router-dom";
import murrah from "../img/card3.jpg";
import urea from "../img/urea.jpg";
import Gro from "../img/Gro-fast.jpg";
import potash from "../img/potass.jpg";
import organic from "../img/organic.jpg";

const Mandifertilizer = () => {
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
          𝕋𝕙𝕖𝕤𝕖 𝕋𝕪𝕡𝕖𝕤 𝔽𝕖𝕣𝕥𝕚𝕝𝕚𝕫𝕖𝕣𝕤 𝔸𝕣𝕖 𝔸𝕧𝕒𝕚𝕝𝕒𝕓𝕝𝕖𝕤
        </h1>
        <h2 className="view_all">
          <i class="fas fa-eye"></i>
          <Link
            to="/Fertilizer"
            style={{ textDecoration: "none", color: "#4caf50" }}
          >
            view All
          </Link>
        </h2>
      </div>
      <Slider {...settings}>
        <div className="custom-product-cards">
          <img src={urea} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>Urea</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>Wheat:</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={potash} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>Potash</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>Place</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={Gro} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>Gr-Fasto</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>Place</strong>
            </p>
          </div>
        </div>
        <div className="custom-product-cards">
          <img src={organic} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            {/* <h6 className="custom-product-title">Product Name</h6> */}
            <p className="custom-product-description">
              <strong>organic</strong>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Mandifertilizer;
