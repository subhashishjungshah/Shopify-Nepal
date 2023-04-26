import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import ProductSearchPage from "../pages/ProductSearchPage";
import AddToCart from "../components/AddToCart/AddToCart";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_detail" element={<ProductDetailPage />} />
      <Route path="/loginorregister" element={<LoginRegisterPage />} />
      <Route path="/product_search" element={<ProductSearchPage />} />
      <Route path="/cart" element={<AddToCart />} />
    </Routes>
  );
};

export default Routing;
