import ProductMediaProps from './ProductMediaProps';

export default interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  media: ProductMediaProps[];
}
