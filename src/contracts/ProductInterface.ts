import ProductImageInterface from './ProductImageInterface';
import ProductSpecificationInterface from './ProductSpecificationInterface';

export default interface ProductInterface {
  id: number;
  name: string;
  short_description: string;
  price: number;
  image: string;
}
