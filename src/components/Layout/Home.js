import React from "react";

import Alert from "../mandi/Alert";
import MandiCrops from "../mandi/Mandihome/MandiCrops";
import MandiAnimals from "../mandi/Mandihome/MandiAnimals";
import Mandifertilizer from "../mandi/Mandihome/Mandifertilizer";
// import Card from "../mandi/Card";
const home = () => {
  return (
    <div>
      <Alert />
      <MandiCrops />
      <MandiAnimals />
      <Mandifertilizer />

      {/* <Card /> */}
    </div>
  );
};

export default home;
