import React from "react";
import Anislider from "../AnimalsHome/Anislider";
// import Animalss from "../AnimalsHome/Animalss.jsx";
import AnimalNav from "../AnimalsHome/AnimalNav";
import AnimalCard from "../AnimalsHome/AnimalCard.jsx";
import Buffalocard from "../AnimalsHome/Buffalocard.jsx";
import Goatcard from "./Goatcard.jsx";
const Animals = () => {
  return (
    <div>
      <AnimalNav />
      <Anislider />
      <AnimalCard />
      <Buffalocard />
      <Goatcard />
      {/* <Animalss /> */}
    </div>
  );
};

export default Animals;
