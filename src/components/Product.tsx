import React, { FC } from 'react';

export interface IProduct {
  name: string;
  description: string;
  price: number;
}

const Product: FC<IProduct> = () => {
  return <div>Product</div>;
};

export default Product;
