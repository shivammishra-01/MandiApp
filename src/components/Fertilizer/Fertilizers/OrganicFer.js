// App.jsx

import React, { useState, useEffect } from "react";
import { listFertilizer } from "../../services/fertilizerServices";
// import "../Buffaloproduct/Animalss.css";
// import Buffalo from "../img/Crops.jpeg";

function OrganicFer() {
  // start
  const [fertilizer, setFertilizer] = useState([]);

  useEffect(() => {
    listFertilizer()
      .then((response) => {
        console.log(response.data);
        setFertilizer(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // ends

  const [showLeft, setShowLeft] = useState(false);

  function toggleFilters() {
    setShowLeft(!showLeft);
  }

  function filterProducts() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      let showCard = true;
      checkboxes.forEach((checkbox) => {
        if (
          checkbox.checked &&
          card.dataset[checkbox.name] !== checkbox.value
        ) {
          showCard = false;
        }
      });
      if (showCard) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function clearFilters() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    filterProducts();
  }

  return (
    <div>
      {" "}
      <div className="topnavv">
        {" "}
        {/* Use the same class name as in your HTML */}
        <a className="active" href="#home">
          MANDI.COM - Your Livestock Fertilizers Marketplace
        </a>
        <div className="search-coontainer">
          {" "}
          {/* Use the same class name as in your HTML */}
          <form action="/action_page.php">
            <input type="text" placeholder="Search for fertilizer" name="search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="producttt">
        <button className="menu-button" onClick={toggleFilters}>
          Filter
        </button>
        <div className={`container ${showLeft ? "show-left" : ""}`}>
          <div className="left" id="filterOptions">
            <h2 style={{ color: "#333" }}>Filters</h2>
            <h3 style={{ color: "#555" }}>Urea</h3>
            <label>
              <input
                type="checkbox"
                name="category"
                value="electronics"
                className="filter-checkbox"
              />
              Npk
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="category"
                value="clothing"
                className="filter-checkbox"
              />
             TSP
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="category"
                value="books"
                className="filter-checkbox"
              />
              Manure
            </label>
            <br />

            <h3 style={{ color: "#555" }}>Potash</h3>
            <label>
              <input
                type="checkbox"
                name="clothing"
                value="Buffalo"
                className="filter-checkbox"
              />
              Rock phospate
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="samsung"
                className="filter-checkbox"
              />
              Zinc Sulphate
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                className="filter-checkbox"
              />
              N.P. (Mixture)
            </label>
            <br />


            {/* <h3 style={{ color: "#555" }}>Goat</h3> */}
            {/* <label>
              <input
                type="checkbox"
                name="brand"
                value="apple"
                className="filter-checkbox"
              />
              Barbari
            </label> */}
            <br />
            {/* <label>
              <input
                type="checkbox"
                name="brand"
                value="samsung"
                className="filter-checkbox"
              />
              Tellicherry
            </label> */}
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                className="filter-checkbox"
              />
              {/* Sirohi */}
            </label>
            <br />

            <button
              style={{ backgroundColor: "#007bff" }}
              onClick={filterProducts}
            >
              Apply Filters
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
          <div className="right">
            {" "}
          
            {/* cards */}
            {/* <div className="crop-container"> */}
              {fertilizer.map((fertilizers) => (
                <div
                  key={fertilizers.id}
                  className="product-card"
                  data-category="clothing"
                  data-brand={fertilizers.brand}
                >
                  <img
                    src={`http://localhost:8080/fertilizer/${fertilizers.image}`}
                    alt="Product"
                    className="custom-product-image"
                  />
                  <div className="custom-product-info">
                    <h4 className="custom-product-title">{fertilizers.name}</h4>
                    <p className="custom-product-description">
                      <strong>Quantity:</strong> {fertilizers.qnt} kg
                    </p>
                    <p className="custom-product-description">
                      <strong>Price:</strong> Rs {fertilizers.price}
                    </p>

                    <p className="custom-product-description">
                      <strong>type:</strong> {fertilizers.type}
                    </p>

                    <p className="custom-product-description">
                      <strong>State:</strong> {fertilizers.state}
                    </p>


                    <button className="custom-add-to-cart-btn">
                      Buy/Book Now
                    </button>
                  </div>
                </div>
              ))}
            {/* </div> */}
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <span>Page 2 of 286</span>
          <buttonz>PREVIOUS</buttonz>
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i + 1}>{i + 1}</button>
          ))}
          <button>NEXT</button>
        </div>
      </div>
    </div>
  );
}

export default OrganicFer;
