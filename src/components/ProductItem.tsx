import React from "react";
import { IProduct } from "../types";

interface ProductItemProps<T extends IProduct> {
  product: T;
  renderAction: (product: T) => React.ReactNode;
}

export const ProductItem = <T extends IProduct>({
  product,
  renderAction,
}: ProductItemProps<T>) => (
  <li className="border p-2 m-2">
    <h3>{product.name}</h3>
    <p>Cena: {`${product.price.main}.${product.price.fractional}`} PLN</p>
    {renderAction(product)}
  </li>
);
