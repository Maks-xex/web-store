import { ReactNode } from "react";
import { IProduct } from "../types";
import { getProducts } from "../utils/getProducts";

interface ProductItemProps<T extends IProduct> {
  product: T;
  renderAction: (product: T) => ReactNode;
}
const allProducts = getProducts();

const getProductById = (id: number) => allProducts.find((p) => p.id === id);

export const ProductItem = <T extends IProduct>({
  product,
  renderAction,
}: ProductItemProps<T>) => {
  const products = getProductById(product.id);
  return (
    <li className="border p-2 m-2">
      <h3>{product.name}</h3>
      <p>Cena: {`${products?.price}`} PLN</p>
      {renderAction(product)}
    </li>
  );
};
