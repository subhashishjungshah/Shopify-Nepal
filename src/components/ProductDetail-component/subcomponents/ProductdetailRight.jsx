import React from "react";
import "./ProductdetailRight.css";
import Form from "react-bootstrap/Form";
const ProductdetailRight = () => {
  return (
    <div className="product__detail__right__container">
      <p className="text-muted product__model">
        BRAND: NEW ERA MODEL 13083919-L
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
      <div className="row ">
        <div className="col-sm-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button">
                -
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              value="0"
              id="count"
              disabled
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="price__tag">
        Rs. 275 <strike className="text-muted real__price">Rs. 500</strike>{" "}
        <span className="discounted__price">-45%</span>
      </p>
      <div className="button__container">
        <button className="btn btn-danger ">ADD TO CART</button>
        <button className="btn btn-primary ">BUY NOW</button>
      </div>
    </div>
  );
};

export default ProductdetailRight;
