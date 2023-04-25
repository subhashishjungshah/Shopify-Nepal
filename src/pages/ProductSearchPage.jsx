import React from "react";
import "./pagescss/ProductSearchPage.css";
import Productleftcomponent from "../components/ProductSearchComponent/Productleftcomponent";
import Productrightcomponent from "../components/ProductSearchComponent/Productrightcomponent";
import Title from "../components/Title/Title";
const ProductSearchPage = () => {
  return (
    <>
      <Title title={"You searched for T shirt"} />
      <div className="product__detail__wrapper">
        <Productleftcomponent />
        <Productrightcomponent />
      </div>
    </>
  );
};

export default ProductSearchPage;
