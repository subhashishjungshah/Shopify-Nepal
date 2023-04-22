import React from "react";
import "./Description.css";
const Description = () => {
  return (
    <div className="product__description__container">
      <div className="description__title">
        <p className="">Product T-shirt Description</p>
      </div>

      <div className="product__features">
        <ul>
          <li>Material: Cotton</li>
          <li>Neck: Round Neck</li>
          <li>Sleeve: Half Sleeve</li>
          <li>Style : Plain</li>
          <li>Fit loose</li>
        </ul>
      </div>
      <div className="product_description_detail">
        <p>
          Micro USBs are used for various applications, from powering and
          charging smaller devices to transmitting data between them. They are
          often used as fast-charging cables connecting smartphones and other
          compact devices to chargers or electrical outlets, computer
          peripherals, external hard drives, etc.
        </p>
      </div>
      <div className="product__specification__section">
        <p className="product__specification__section__title">
          Specifications of Micro USB Charger
        </p>
        <p>
          {" "}
          <span className="specs__title">Brand</span>: No brand{" "}
        </p>
        <p>
          <span className="specs__title">SKU</span>: 104186025_NP-1025040152{" "}
        </p>
        <p>
          <span className="specs__title">What’s in the box</span>: Tshirt For
          Men{" "}
        </p>
      </div>
    </div>
  );
};

export default Description;
