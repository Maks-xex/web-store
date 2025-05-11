import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { IProducts } from "../types";

export interface ICartItem extends IProducts {
  quantity: number;
}

interface ICartContext {
  cartItems: ICartItem[];
  total: number;
  addToCart: (product: IProducts) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartContext = createContext<ICartContext | null>(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = (product: IProducts) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const decrementQuantity = (id: number) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove && itemToRemove.quantity === 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };

  const total = cartItems.reduce(
    (sum, item) =>
      sum + (item.price.main + item.price.fractional / 100) * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
