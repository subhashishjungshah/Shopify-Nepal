import React from "react";
import Productdetail from "../components/ProductDetail-component/Productdetail";
import DescriptionReview from "../components/Review-component/DescriptionReview";
import ProductCard from "../components/Card/ProductCard/ProductCard";
import earphone from '../assets/earphone.webp'
import Title from "../components/Title/Title";

const ProductDetailPage = () => {
  return (
    <div className="container">
      <Productdetail />
      <Title title="Related Products" />
      <div className="m-4">
        <div className="row">
          <div className=" col-lg-3 col-md-4 col-sm-12">
            <ProductCard
              title="Earphone"
              image={earphone}
              description="This is earphone that every one must wear."
            />
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-12">
            <ProductCard
              title="Earphone"
              image={earphone}
              description="This is earphone that every one must wear."
            />
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-12">
            <ProductCard
              title="Earphone"
              image={earphone}
              description="This is earphone that every one must wear."
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <ProductCard
              title="Earphone"
              image={earphone}
              description="This is earphone that every one must wear."
            />
          </div>
        </div>
      </div>
      <DescriptionReview />
    </div>
  );
};

export default ProductDetailPage;
