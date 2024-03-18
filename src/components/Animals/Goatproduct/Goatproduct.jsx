import React, { useState } from "react";
import "../Buffaloproduct/Animalss.css";

import murrah from "../img/shivam.png";
import Buffalo from "../img/buffalo.jpg";

function Goatproduct() {
  const [showLeft, setShowLeft] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function toggleFilters() {
    setShowLeft(!showLeft);
  }

  function filterProducts() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      let showCard = true;

      // Filter by category
      checkboxes.forEach((checkbox) => {
        if (
          checkbox.checked &&
          card.dataset[checkbox.name] !== checkbox.value
        ) {
          showCard = false;
        }
      });

      // Filter by price
      const cardPrice = parseFloat(
        card.querySelector(".custom-product-price").innerText.replace("₹", "")
      );
      if (
        (minPrice && cardPrice < minPrice) ||
        (maxPrice && cardPrice > maxPrice)
      ) {
        showCard = false;
      }

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
    setMinPrice("");
    setMaxPrice("");
    filterProducts();
  }

  return (
    <div className="producttt">
      <button className="menu-button" onClick={toggleFilters}>
        Filter
      </button>
      <div className={`container ${showLeft ? "show-left" : ""}`}>
        <div className="left" id="filterOptions">
          <h2 style={{ color: "#333" }}>Filters</h2>
          <h3 style={{ color: "#555" }}>Cows</h3>
          {/* Existing category checkboxes */}
          <br />

          <h3 style={{ color: "#555" }}>Buffalo</h3>
          {/* Existing category checkboxes */}
          <br />

          <h3 style={{ color: "#555" }}>Goat</h3>
          {/* Existing category checkboxes */}
          <br />

          <h3 style={{ color: "#555" }}>Price Range</h3>
          <label>
            Min Price:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(parseFloat(e.target.value))}
            />
          </label>
          <br />
          <label>
            Max Price:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
            />
          </label>
          <br />

          <button
            style={{ backgroundColor: "#007bff" }}
            onClick={filterProducts}
          >
            Apply Filters
          </button>
          <button style={{ backgroundColor: "#ff5722" }} onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
        <div className="right">{/* Product cards */}</div>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <span>Page 2 of 286</span>
        <buttonz>PREVIOUS</buttonz>
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i + 1}>{i + 1}</button>
        ))}
        <button onClick={filterProducts}>Button</button>{" "}
        {/* Connect Button to apply filters */}
        <button>NEXT</button>
      </div>
    </div>
  );
}

export default Goatproduct;
