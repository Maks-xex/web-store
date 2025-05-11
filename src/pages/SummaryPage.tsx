import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";

import { ProductList } from "../components/ProductList";

import { getProducts } from "../utils/getProducts";

import { ICartItem } from "../types";

export const SummaryPage = () => {
  const { cartItems, total } = useCartContext();
  const handleOrder = () => {
    const orderData = {
      items: cartItems,
      total,
    };
    localStorage.setItem("order", JSON.stringify(orderData));
    window.location.href = "confirmation.html";
  };
  const allProducts = getProducts();

  const getProductById = (id: number) => allProducts.find((p) => p.id === id);
  return (
    <div className="mt-2 mx-auto w-fit">
      <h2 className="font-bold uppercase">Podsumowanie Zamówienia</h2>
      <ProductList<ICartItem>
        products={cartItems}
        renderAction={(item) => {
          const product = getProductById(item.id);
          if (!product) return null;

          return (
            <div>
              <p>Ilość: {item.quantity} szt.</p>
              <p>Łącznie: {(product.price * item.quantity).toFixed(2)} PLN</p>
            </div>
          );
        }}
      />
      <h3>Łączna kwota: {total.toFixed(2)} PLN</h3>
      <div className="flex flex-row items-center gap-1 mt-3">
        <Link
          className="bg-red-500 hover:bg-red-700 rounded px-4 py-2"
          to="/cart"
        >
          Wróć do koszyka
        </Link>
        <button
          className="bg-green-500 hover:bg-green-700 rounded px-4 py-2"
          onClick={handleOrder}
        >
          Złóż Zamówienie
        </button>
        <br />
      </div>
    </div>
  );
};
