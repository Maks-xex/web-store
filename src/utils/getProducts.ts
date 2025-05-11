import products from "../products/products.json";

import { IProduct } from "../types";

export const getProducts = (): IProduct[] => {
  return products.map((product) => ({
    ...product,
    price: product.price.main + product.price.fractional / 100,
  }));
};
