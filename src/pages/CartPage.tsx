import React from "react";

import { ICart, useCartContext } from "../context/CartContext";
import { ProductList } from "../components/ProductList";
import { Link } from "react-router-dom";

export const Cart: React.FC = () => {
  const {
    total,
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCartContext();
  return (
    <div className="flex justify-center items-center flex-col">
      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty</p>
      ) : (
        <>
          <ProductList<ICart>
            products={cartItems}
            renderAction={(product) => (
              <>
                <div className="flex gap-1 ">
                  <p>Ilosc:</p>
                  <button
                    className="border px-2"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </button>
                  <input
                    className="justify-items-center select-none outline-none"
                    style={{
                      width: `${product.quantity.toString().length}ch`,
                    }}
                    value={product.quantity}
                    readOnly
                  />
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="border px-2"
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold mt-2 py-2 px-4 rounded"
                  onClick={() => removeFromCart(product.id)}
                >
                  Usuń z koszyka
                </button>
              </>
            )}
          />
          <h3>Łącznie: {total.toFixed(2)} PLN</h3>
          <div className="flex flex-row gap-2 items-center mt-3">
            <Link
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              to="/"
            >
              Wróć do listy produktów
            </Link>
            <Link
              className="bg-green-500 hover:bg-green-700 text-white rounded font-bold py-2 px-4 "
              to="/summary"
            >
              Przejdź do podsumowania
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
