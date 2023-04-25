import React from "react";
import "./ProductdetailRight.css";
import Form from "react-bootstrap/Form";
const ProductdetailRight = () => {
  return (
    <div className="product__detail__right__container">
      <p className="text-muted product__model">
        <span className="product_title_span1">BRAND :</span>
        <span className="product_title_span2">NEW ERA</span>
        <span className="product_title_span1">MODEL :</span>
        <span className="product_title_span2">13083919-L</span>
      </p>
      <p className="product__tile">
        New Era NBA Miami Heat Back Body Print Men's T-Shirt - Black
      </p>
      <p className="product__description text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam eos
        suscipit magnam doloremque reprehenderit autem? Corrupti commodi
        laudantium saepe distinctio voluptatem eveniet est omnis dolorem
        perspiciatis. Molestiae, veritatis dicta.
      </p>
      <Form.Select className="size__select" aria-label="Default select example">
        <option>Select Your preferred Size </option>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">lARGE</option>
      </Form.Select>
     <div className="d-flex">
      <div className="price_tag">
        Rs. <span>1200</span>/-
      </div>
      <div className="product_quantity_btn d-flex">
        <button className="quantity_btn">-</button>
        <p className="product_quantity">0</p>
        <button className="quantity_btn">+</button>
      </div>
     </div>
      <div className="button__container">
        <button className="btn btn-danger cart-btn sticky-add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductdetailRight;
