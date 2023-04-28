import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import ProductSearchPage from "../pages/ProductSearchPage";
import AddToCart from "../components/AddToCart/AddToCart";
import Wishlist from "../components/Wishlist/Wishlist";
<<<<<<< HEAD
import CheckoutPage from "../pages/CheckoutPage";
=======
import CategoryPage from "../pages/CategoryPage/CategoryPage";
>>>>>>> 0eb792068db5a5da9061002ebe5ce480fb28597a
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_detail" element={<ProductDetailPage />} />
      <Route path="/loginorregister" element={<LoginRegisterPage />} />
      <Route path="/product_search" element={<ProductSearchPage />} />
      <Route path="/cart" element={<AddToCart />} />
      <Route path="/wishlist" element={<Wishlist />} />
<<<<<<< HEAD
      <Route path="/checkout" element={<CheckoutPage />} />
=======
      <Route path="/category" element={<CategoryPage />} />
>>>>>>> 0eb792068db5a5da9061002ebe5ce480fb28597a
    </Routes>
  );
};

export default Routing;
