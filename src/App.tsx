import React from "react";

import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";

import { CartProvider } from "./context/CartContext";

import { ProductsPage } from "./pages/ProductsPage";
import { SummaryPage } from "./pages/SummaryPage";
import { Cart } from "./pages/CartPage";

export const App: React.FC = () => {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </CartProvider>
  );
};
