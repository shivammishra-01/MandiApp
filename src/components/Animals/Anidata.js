import React from "react";
import AniCard from "./AniCard.js";

const Anidata = {
  buttons: [
    { filter: "all", label: "Show all" },
    { filter: "cars", label: "Cars" },
    { filter: "animals", label: "Animals" },
    { filter: "fruits", label: "Fruits" },
    { filter: "colors", label: "Colors" },
  ],
  elements: [
    { filter: "cars", content: "BMW" },
    { filter: "colors fruits", content: "Orange" },
    // Add other filterDiv elements as needed
  ],
};

const App = () => {
  return (
    <div>
      <h2>Filter DIV Elements</h2>
      <AniCard data={Anidata} />
    </div>
  );
};

export default Anidata;
