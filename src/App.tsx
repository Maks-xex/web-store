import React from "react";

import { Outlet, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";

import { CartProvider } from "./context/CartContext";

import { ProductsPage } from "./pages/ProductsPage";
import { SummaryPage } from "./pages/SummaryPage";
import { Cart } from "./pages/CartPage";

const Root: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<ProductsPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="summary" element={<SummaryPage />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </CartProvider>
  );
};
