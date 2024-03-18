// App.jsx

import React, { useState } from "react";
import "./Cowproduct.css";
import murrah from "../img/shivam.png";
import Buffalo from "../img/buffalo.jpg";

function Animalss() {
  const [showLeft, setShowLeft] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(286 / 9); // Assuming you have 286 pages with 9 products per page

  function toggleFilters() {
    setShowLeft(!showLeft);
  }

  function filterProducts() {
    // Your filtering logic
  }

  function clearFilters() {
    // Your clearing logic
  }

  function nextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  return (
    <div className="producttt">
      <button className="menu-button" onClick={toggleFilters}>
        Filter
      </button>
      <div className={`container ${showLeft ? "show-left" : ""}`}>
        {/* Your filter options */}
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
              value="Murrah"
              className="filter-checkbox"
            />
            Murrah
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
          <button style={{ backgroundColor: "#ff5722" }} onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
      <div className="right">
        {/* Your product cards */}
        <div
          className="product-card"
          data-category="clothing"
          data-brand="Murrah"
        >
          <img src={Buffalo} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={Buffalo} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={Buffalo} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={Buffalo} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={Buffalo} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        <div
          className="product-card"
          data-category="electronics"
          data-brand="apple"
        >
          <img src={murrah} alt="Product" className="custom-product-image" />
          <div className="custom-product-info">
            <h4 className="custom-product-title">Product Name</h4>
            <p className="custom-product-description">
              <strong>Place:</strong>Name
            </p>
            <p className="custom-product-description">
              <strong>Quality:</strong> 10L/Day
            </p>
            <p className="custom-product-description">
              <strong>Price:</strong>₹ 90,000
            </p>
            <p className="custom-product-description">
              <strong>Age:</strong> 5year(s)
            </p>
            <button className="custom-add-to-cart-btn">Buy/Books Now</button>
          </div>
        </div>
        {Array.from({ length: currentPage * 9 }, (_, i) => (
          <div
            key={i}
            className="product-card"
            data-category="clothing"
            data-brand="Murrah"
            onClick={i === currentPage * 9 - 1 ? nextPage : null}
          >
            <img src={Buffalo} alt="Product" className="custom-product-image" />
            <div className="custom-product-info">
              <h4 className="custom-product-title">Product Name</h4>
              <p className="custom-product-description">
                <strong>Place:</strong>Name
              </p>
              <p className="custom-product-description">
                <strong>Quality:</strong> 10L/Day
              </p>
              <p className="custom-product-description">
                <strong>Price:</strong>₹ 90,000
              </p>
              <p className="custom-product-description">
                <strong>Age:</strong> 5year(s)
              </p>
              <button className="custom-add-to-cart-btn">Buy/Books Now</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {currentPage > 1 && (
          <button className="prev-button" onClick={prevPage}>
            PREVIOUS
          </button>
        )}
        {currentPage < totalPages && (
          <button className="next-button" onClick={nextPage}>
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}

export default Animalss;
