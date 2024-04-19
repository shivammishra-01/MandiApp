// App.jsx

import React, { useState, useEffect } from "react";
import "../Buffaloproduct/Animalss.css";
import { listAnimal } from "../../services/animalServices";
// import Buffalo from "../img/Crops.jpeg";

function Cowproduct() {
  // start
  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    listAnimal()
      .then((response) => {
        console.log(response.data);
        setAnimal(response.data);
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
          MANDI.COM - Your Livestock Marketplace
        </a>
        <div className="search-coontainer">
          {" "}
          {/* Use the same class name as in your HTML */}
          <form action="/action_page.php">
            <input type="text" placeholder="Search for Animals" name="search" />
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
            <h3 style={{ color: "#555" }}>Cows</h3>
            <label>
              <input
                type="checkbox"
                name="category"
                value="electronics"
                className="filter-checkbox"
              />
              Jersey
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="category"
                value="clothing"
                className="filter-checkbox"
              />
              Shorthorn
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="category"
                value="books"
                className="filter-checkbox"
              />
              Red Sindhi
            </label>
            <br />

            <h3 style={{ color: "#555" }}>Buffalo</h3>
            <label>
              <input
                type="checkbox"
                name="clothing"
                value="Buffalo"
                className="filter-checkbox"
              />
              Buffalo
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="samsung"
                className="filter-checkbox"
              />
              Surti
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                className="filter-checkbox"
              />
              Jaffrabadi
            </label>
            <br />

            <h3 style={{ color: "#555" }}>Goat</h3>
            <label>
              <input
                type="checkbox"
                name="brand"
                value="apple"
                className="filter-checkbox"
              />
              Barbari
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="samsung"
                className="filter-checkbox"
              />
              Tellicherry
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                className="filter-checkbox"
              />
              Sirohi
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
              {animal.map((animals) => (
                <div
                  key={animals.id}
                  className="product-card"
                  data-category="clothing"
                  data-brand={animal.brand}
                >
                  <img
                    src={`http://localhost:8080/animal/${animals.image}`}
                    alt="Product"
                    className="custom-product-image"
                  />
                  <div className="custom-product-info">
                    <h4 className="custom-product-title">{animals.name}</h4>
                    <p className="custom-product-description">
                      <strong>Quantity:</strong> {animals.qnt} kg
                    </p>
                    <p className="custom-product-description">
                      <strong>Price:</strong> Rs {animals.price}
                    </p>

                    <p className="custom-product-description">
                      <strong>Breed:</strong> {animals.breed}
                    </p>

                    <p className="custom-product-description">
                      <strong>Age:</strong> {animals.age} years
                    </p>
                    <p className="custom-product-description">
                      <strong>Milk:</strong> {animals.milk} Kg
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

export default Cowproduct;
