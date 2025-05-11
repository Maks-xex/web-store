import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const SummaryPage = () => {
  const { cartItems, total } = useCartContext();
  const handleOrder = () => {
    const orderData = {
      items: cartItems,
      total,
    };
    localStorage.setItem("order", JSON.stringify(orderData));
    window.location.href = "/confirmation.html";
  };

  return (
    <div className="mt-2 mx-auto w-fit">
      <h1>Podsumowanie Zamówienia</h1>
      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x{" "}
                {(item.price.main + item.price.fractional / 100).toFixed(2)} PLN
                ={" "}
                {(
                  (item.price.main + item.price.fractional / 100) *
                  item.quantity
                ).toFixed(2)}{" "}
                PLN
              </li>
            ))}
          </ul>
          <h3>Łączna kwota: {total.toFixed(2)} PLN</h3>
        </>
      )}
      <div className="flex flex-row items-center gap-1 mt-3">
        <button
          className="bg-green-500 hover:bg-green-700 rounded px-4 py-2"
          onClick={handleOrder}
        >
          Złóż Zamówienie
        </button>
        <br />
        <Link to="/cart">
          <button className="bg-red-500 hover:bg-red-700 rounded px-4 py-2">
            Wróć do koszyka
          </button>
        </Link>
      </div>
    </div>
  );
};
