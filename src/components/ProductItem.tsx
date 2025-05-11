import React from "react";
import { IProducts } from "../types";

interface ProductItemProps<T extends IProducts> {
  product: T;
  renderAction: (product: T) => React.ReactNode;
}

export const ProductItem = <T extends IProducts>({
  product,
  renderAction,
}: ProductItemProps<T>) => (
  <li className="border p-2 m-2">
    <h3>{product.name}</h3>
    <p>Cena: {`${product.price.main}.${product.price.fractional}`} PLN</p>
    {renderAction && renderAction(product)}
  </li>
);
