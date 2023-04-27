import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import ProductSearchPage from "../pages/ProductSearchPage";
import AddToCart from "../components/AddToCart/AddToCart";
import Wishlist from "../components/Wishlist/Wishlist";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_detail" element={<ProductDetailPage />} />
      <Route path="/loginorregister" element={<LoginRegisterPage />} />
      <Route path="/product_search" element={<ProductSearchPage />} />
      <Route path="/cart" element={<AddToCart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  );
};

export default Routing;
