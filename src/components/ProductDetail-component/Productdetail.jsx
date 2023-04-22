import React from "react";
import "./Productdetail.css";
import ProductdetailLeft from "./subcomponents/ProductdetailLeft";
import ProductdetailRight from "./subcomponents/ProductdetailRight";
const Productdetail = () => {
  return (
    <div className="product__detail__container">
      <ProductdetailLeft />
      <ProductdetailRight />
    </div>
  );
};

export default Productdetail;
