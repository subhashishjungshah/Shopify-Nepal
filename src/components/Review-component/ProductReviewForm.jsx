import React from "react";
import "./ProductReviewForm.css";
const ProductReviewForm = () => {
  return (
    <div className="product__review__container">
      <p className="form__title">Add your Valuable Reviews!</p>

      <form action="" className="product__review__form">
        <label htmlFor="cars">Give a Rating:</label>

        <select id="cars">
          <option value="volvo">⭐</option>
          <option value="saab">⭐⭐</option>
          <option value="opel">⭐⭐⭐</option>
          <option value="audi">⭐⭐⭐⭐</option>
          <option value="audi">⭐⭐⭐⭐⭐</option>
        </select>
        <textarea
          className="review__textarea"
          placeholder="Enter your thoughts for this product"
        ></textarea>
        <button className="review__submit__btn">Submit</button>
      </form>
    </div>
  );
};

export default ProductReviewForm;
