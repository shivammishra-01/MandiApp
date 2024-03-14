import React from "react";

const aniCard = () => {
  return (
    <div>
      <div className="container">
        <h2 className="mt-4">Filter DIV Elements</h2>

        <div id="myBtnContainer">
          <button
            className="btn btn-primary active"
            onclick="filterSelection('all')"
          >
            {" "}
            Show all
          </button>
          <button className="btn btn-primary" onclick="filterSelection('cars')">
            {" "}
            Cars
          </button>
          <button className="btn btn-primary" onclick="filterSelection('animals')">
            {" "}
            Animals
          </button>
          <button className="btn btn-primary" onclick="filterSelection('fruits')">
            {" "}
            Fruits
          </button>
          <button className="btn btn-primary" onclick="filterSelection('colors')">
            {" "}
            Colors
          </button>
        </div>

        <div className="container">
          <div className="filterDiv cars">BMW</div>
          <div className="filterDiv colors fruits">Orange</div>
          <div className="filterDiv cars">Volvo</div>
          <div className="filterDiv colors">Red</div>
          <div className="filterDiv cars">Ford</div>
          <div className="filterDiv colors">Blue</div>
          <div className="filterDiv animals">Cat</div>
          <div className="filterDiv animals">Dog</div>
          <div className="filterDiv fruits">Melon</div>
          <div className="filterDiv fruits animals">Kiwi</div>
          <div className="filterDiv fruits">Banana</div>
          <div className="filterDiv fruits">Lemon</div>
          <div className="filterDiv animals">Cow</div>
        </div>
      </div>
    </div>
  );
};

export default aniCard;
