import React from "react";
import Productdetail from "../components/ProductDetail-component/Productdetail";
import DescriptionReview from "../components/Review-component/DescriptionReview";

const ProductDetailPage = () => {
  return (
    <div className="container">
      <Productdetail />
      <DescriptionReview />
    </div>
  );
};

export default ProductDetailPage;
