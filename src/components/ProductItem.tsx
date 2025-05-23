import { ReactNode } from "react";
import { IProduct } from "../types";

interface ProductItemProps<T extends IProduct> {
  product: T;
  renderAction: (product: T) => ReactNode;
}

export const ProductItem = <T extends IProduct>({
  product,
  renderAction,
}: ProductItemProps<T>) => {
  return (
    <li className="border p-2 m-2">
      <h3>{product.name}</h3>
      <p>Cena: {`${product.price}`} PLN</p>
      {renderAction(product)}
    </li>
  );
};
