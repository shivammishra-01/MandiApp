import React from "react";

const aniCard = () => {
  return (
    <div>
      <div class="container">
        <h2 class="mt-4">Filter DIV Elements</h2>

        <div id="myBtnContainer">
          <button
            class="btn btn-primary active"
            onclick="filterSelection('all')"
          >
            {" "}
            Show all
          </button>
          <button class="btn btn-primary" onclick="filterSelection('cars')">
            {" "}
            Cars
          </button>
          <button class="btn btn-primary" onclick="filterSelection('animals')">
            {" "}
            Animals
          </button>
          <button class="btn btn-primary" onclick="filterSelection('fruits')">
            {" "}
            Fruits
          </button>
          <button class="btn btn-primary" onclick="filterSelection('colors')">
            {" "}
            Colors
          </button>
        </div>

        <div class="container">
          <div class="filterDiv cars">BMW</div>
          <div class="filterDiv colors fruits">Orange</div>
          <div class="filterDiv cars">Volvo</div>
          <div class="filterDiv colors">Red</div>
          <div class="filterDiv cars">Ford</div>
          <div class="filterDiv colors">Blue</div>
          <div class="filterDiv animals">Cat</div>
          <div class="filterDiv animals">Dog</div>
          <div class="filterDiv fruits">Melon</div>
          <div class="filterDiv fruits animals">Kiwi</div>
          <div class="filterDiv fruits">Banana</div>
          <div class="filterDiv fruits">Lemon</div>
          <div class="filterDiv animals">Cow</div>
        </div>
      </div>
    </div>
  );
};

export default aniCard;
