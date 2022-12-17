import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Footer from "../components/Footer";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import ProductView from "../pages/ProductView";
import Category from "../pages/Category";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/offers" element={<Category />} />
        <Route path="/category/:cat" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
