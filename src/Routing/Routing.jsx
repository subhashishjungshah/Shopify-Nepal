import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_detail" element={<ProductDetailPage />} />
      <Route path="/loginorregister" element={<LoginRegisterPage />} />
    </Routes>
  );
};

export default Routing;
