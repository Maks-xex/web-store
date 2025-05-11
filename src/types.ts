export interface IProduct {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
}
