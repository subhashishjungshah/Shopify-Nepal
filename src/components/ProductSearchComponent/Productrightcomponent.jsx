import React from "react";
import "./productsearchcss/Productrightcomponent.css";
import Form from "react-bootstrap/Form";
import ProductCard from "../Card/ProductCard/ProductCard";
import earphone from "../../assets/earphone.webp";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Smallscreenbuttonnav from "./productsearchsubcomponents/Smallscreenbuttonnav";
const productrightcomponent = () => {
  return (
    <div className="product__right__component">
      <div className="secound__bar__wrapper">
        <p className="search__result__stats" style={{ margin: "0px" }}>
          358 Products found
        </p>
        <div className="sort__by__wrapper">
          <p className="sort__by__text">SORT BY:</p>
          <Form.Select
            aria-label="Default select example"
            className="form__select"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div className="search__card__wrapper row">
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <ProductCard
            title="Earphone"
            image={earphone}
            description="This is earphone that every one must wear."
          />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <ProductCard
            title="Earphone"
            image={earphone}
            description="This is earphone that every one must wear."
          />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <ProductCard
            title="Earphone"
            image={earphone}
            description="This is earphone that every one must wear."
          />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <ProductCard
            title="Earphone"
            image={earphone}
            description="This is earphone that every one must wear."
          />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <ProductCard
            title="Earphone"
            image={earphone}
            description="This is earphone that every one must wear."
          />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <ProductCard
            title="Earphone"
            image={earphone}
            description="This is earphone that every one must wear."
          />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <ProductCard
            title="Earphone"
            image={earphone}
            description="This is earphone that every one must wear."
          />
        </div>
      </div>
      <div className="pagination__wrapper">
        <Stack spacing={2}>
          <Pagination count={10} size="large" color="primary" />
        </Stack>
      </div>
      <Smallscreenbuttonnav />
    </div>
  );
};

export default productrightcomponent;
