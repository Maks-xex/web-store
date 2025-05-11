import React from "react";

import { ProductItem } from "./ProductItem";

import { IProducts } from "../types";

interface ProductListProps<T extends IProducts> {
  products: T[];
  renderAction: (product: T) => React.ReactNode;
}

export const ProductList = <T extends IProducts>({
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
