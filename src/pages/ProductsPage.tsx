import { ProductList } from "../components/ProductList";

import { useCartContext } from "../context/CartContext";

import { getProducts } from "../utils/getProducts";

import { IProduct } from "../types";

const products = getProducts();

export const ProductsPage = () => {
  const { addToCart } = useCartContext();
  return (
    <div className="flex justify-center">
      <ProductList<IProduct>
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
