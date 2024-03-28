import React from "react";
import Cropslider from "./Cropslider";
import CropNav from "./CropNav";
import Foodcrops from "./Foodcrops";
import Plantationcrops from "./Plantationcrops";
import Cashcrops from "./Cashcrops";

const Crops = () => {
  return (
    <div>
      <CropNav />
      <Cropslider />
      <Foodcrops />
      <Plantationcrops />
      <Cashcrops/>
    </div>
  );
};

export default Crops;
