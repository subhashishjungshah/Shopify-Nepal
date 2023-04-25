import React from "react";
import "./productsearchcss/Productleftcomponent.css";
import Customizedaccordin from "./productsearchsubcomponents/Customizedaccordin";
const Productleftcomponent = () => {
  return (
    <div className="productleftcomponent__wrapper">
      <Customizedaccordin title={"CATEGORY"} />
      <Customizedaccordin title={"BRAND"} />
      <Customizedaccordin title={"SIZE"} />
    </div>
  );
};

export default Productleftcomponent;
