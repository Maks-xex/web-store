import React from "react";

import { ProductList } from "../components/ProductList";

import products from "../products/products.json";
import { useCart } from "../context/CartContext";
import { IProducts } from "../types";

export const ProductsPage: React.FC = () => {
  const { addToCart } = useCart();
  return (
    <div className="flex justify-center">
      <ProductList<IProducts>
        products={products}
        renderAction={(product) => (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded"
            onClick={() => addToCart(product)}
          >
            Dodaj do koszyka
          </button>
        )}
      />
    </div>
  );
};
