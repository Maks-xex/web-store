import products from "../products/products.json";

export type IProduct = {
  id: number;
  name: string;
  price: number;
};

export const getProducts = (): IProduct[] => {
  return products.map((product) => ({
    ...product,
    price: product.price.main + product.price.fractional / 100,
  }));
};
