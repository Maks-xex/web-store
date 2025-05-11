import React from "react";

import { ProductItem } from "./ProductItem";

import { IProduct } from "../types";

interface ProductListProps<T extends IProduct> {
  products: T[];
  renderAction: (product: T) => React.ReactNode;
}

export const ProductList = <T extends IProduct>({
  products,
  renderAction,
}: ProductListProps<T>) => (
  <ul>
    {products.map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        renderAction={renderAction}
      />
    ))}
  </ul>
);
