import React from "react";
import './ProductCard.css'

const ProductCard = ({ image, title, description }) => {
  return (
    <>
      <div className="productCard_container">
        <div className="productCard_img_container">
          <img src={image} alt="product" />
        </div>
        <p className="product_title">{title}</p>
        <p className="product_description">{description}</p>
        <div className="row">
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <p className="product_price">Rs. <span>1200/-</span> </p>
          </div> 
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <p className="product_icon">
              <span>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
              <span>
                <i class="fa-solid fa-heart"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
