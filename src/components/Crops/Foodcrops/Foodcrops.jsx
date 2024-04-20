import React, { useState, useEffect } from "react";
import "../css/FertProcuts.css";
import { listCrops } from "../../services/cropsService";
import Buffalo from "../img/Crops.jpeg";

function Foodcrops() {
  const [crops, setCrops] = useState([]);
  const [showLeft, setShowLeft] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    listCrops()
      .then((response) => {
        console.log(response.data);
        setCrops(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleFilters = () => {
    setShowLeft(!showLeft);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterProducts = () => {
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
  };

  const clearFilters = () => {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    filterProducts();
  };

  // Filter crops based on search query
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="topnavv">
        <a className="active" href="#home">
          MANDI.COM - Your Livestock Marketplace
        </a>
        <div className="search-coontainer">
          <input
            type="text"
            placeholder="Search for crops"
            name="search"
            id="crops"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="producttt">
        <button className="menu-button" onClick={toggleFilters}>
          Filter
        </button>
        <div className={`container ${showLeft ? "show-left" : ""}`}>
         {/*  */}

         <div className="left" id="filterOptions">

            <h2 style={{ color: "#333" }}>Filters</h2>
            <h3 style={{ color: "#555" }}>Paddy</h3>
            <label>
              <input
                type="checkbox"
                name="category"
                value="electronics"
                className="filter-checkbox"
              />
              Mini
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="category"
                value="clothing"
                className="filter-checkbox"
              />
              katrani
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="category"
                value="books"
                className="filter-checkbox"
              />
              sonchur
            </label>
            <br />

            <h3 style={{ color: "#555" }}>Rice</h3>
            <label>
              <input
                type="checkbox"
                name="clothing"
                value="Buffalo"
                className="filter-checkbox"
              />
              Basmati
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="samsung"
                className="filter-checkbox"
              />
              Arborio 
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                className="filter-checkbox"
              />
              Jasmine
            </label>
            <br />

            <h3 style={{ color: "#555" }}>Wheat</h3>
            <label>
              <input
                type="checkbox"
                name="brand"
                value="apple"
                className="filter-checkbox"
              />
              Sriram
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="samsung"
                className="filter-checkbox"
              />
              Spelt
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                className="filter-checkbox"
              />
              Emmer
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

         {/*  */}
          <div className="right">
            {filteredCrops.map((crop) => (
              <div
                key={crop.id}
                className="product-card"
                data-category="clothing"
                data-brand={crop.brand}
              >
                <img
                  src={`http://localhost:8080/crops/${crop.image}`}
                  alt="Product"
                  className="custom-product-image"
                />
                <div className="custom-product-info">
                  <h4 className="custom-product-title">{crop.name}</h4>
                  <p className="custom-product-description">
                    <strong>Quantity:</strong> {crop.qnt} kg
                  </p>
                  <p className="custom-product-description">
                    <strong>Price:</strong> Rs {crop.price}
                  </p>
                  <p className="custom-product-description">
                    <strong>Variety:</strong> {crop.variety}
                  </p>
                  <p className="custom-product-description">
                    <strong>State:</strong> {crop.state}
                  </p>
                  <button className="custom-add-to-cart-btn">
                    Buy/Book Now
                  </button>
                </div>
              </div>
            ))}
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

export default Foodcrops;
