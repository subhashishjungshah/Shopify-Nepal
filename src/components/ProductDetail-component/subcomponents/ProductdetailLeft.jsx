import React from "react";
import "./ProductdetailLeft.css";
import Carousel from "react-bootstrap/Carousel";
const ProductdetailLeft = () => {
  return (
    <Carousel variant="dark" className="product__detail__left__container">
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-contain product_detail_img"
          src="https://www.virginmegastore.qa/medias/8445264685-main.jpg-Preview?context=bWFzdGVyfHJvb3R8MTg1MzV8aW1hZ2UvanBlZ3xoZmEvaDMxLzk2MzQ2NTUzNzEyOTQvODQ0NTI2NDY4NV9fbWFpbi5qcGdfUHJldmlld3w4MGIyZTNhNWNjMzk3NDZkNTk4OTIwZjM3MjEzZmY5ZjA3MGJhNzg2NDY5NWU5ODkxYmNlMmNlNjgxODY2ZjVk"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-contain product_detail_img"
          src="https://www.virginmegastore.qa/medias/8445264685-main.jpg-Preview?context=bWFzdGVyfHJvb3R8MTg1MzV8aW1hZ2UvanBlZ3xoZmEvaDMxLzk2MzQ2NTUzNzEyOTQvODQ0NTI2NDY4NV9fbWFpbi5qcGdfUHJldmlld3w4MGIyZTNhNWNjMzk3NDZkNTk4OTIwZjM3MjEzZmY5ZjA3MGJhNzg2NDY5NWU5ODkxYmNlMmNlNjgxODY2ZjVk"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductdetailLeft;
