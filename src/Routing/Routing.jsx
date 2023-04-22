import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetail" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default Routing;
