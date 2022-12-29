import ProductImageInterface from './ProductImageInterface';
import ProductInterface from './ProductInterface';
import ProductSpecificationInterface from './ProductSpecificationInterface';

export default interface ProductDetailInterface extends ProductInterface {
  description: string;
  images: ProductImageInterface[];
  specifications: ProductSpecificationInterface[];
}
