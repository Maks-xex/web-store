import React, { createContext, useContext, useState, ReactNode } from "react";
import { IProducts } from "../types";

export interface ICart extends IProducts {
  quantity: number;
}

interface CartContextType {
  cartItems: ICart[];
  addToCart: (product: IProducts) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICart[]>([]);

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

  const updateCartItemQuantity = (id: number, delta: number) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter(Boolean) as ICart[];

    setCartItems(updatedCart);

    const wasRemoved = !updatedCart.find((item) => item.id === id);
    if (wasRemoved) removeFromCart(id);
  };
  const incrementQuantity = (id: number) => {
    updateCartItemQuantity(id, 1);
  };

  const decrementQuantity = (id: number) => {
    updateCartItemQuantity(id, -1);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
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

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
