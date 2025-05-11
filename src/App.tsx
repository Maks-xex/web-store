import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "./components/Navigation";

import { ProductsPage } from "./pages/ProductsPage";
import { Cart } from "./pages/CartPage";

import { CartProvider } from "./context/CartContext";
import { SummaryPage } from "./pages/SummaryPage";

export const App: React.FC = () => {
  return (
    <CartProvider>
      <Navigation />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </CartProvider>
  );
};
