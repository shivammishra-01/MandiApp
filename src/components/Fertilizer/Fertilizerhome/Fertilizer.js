import React from "react";
import Fertislider from "./Fertislider";
import Fertinav from "./Fertinav";
import Organicferti from "./Organicferti";
import Liquidferti from "./Liquidferti";
import Fertilizers from "./Fertilizers";

const Fertilizer = () => {
  return (
    <div>
      <Fertinav />
      <Fertislider />
      <Fertilizers />
      <Organicferti />
      <Liquidferti />
    </div>
  );
};

export default Fertilizer;
