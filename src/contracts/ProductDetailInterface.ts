import ProductImageInterface from './ProductImageInterface';
import ProductInterface from './ProductInterface';
import ProductSpecificationInterface from './ProductSpecificationInterface';
import ProductVideoInterface from './ProductVideoInterface';

export default interface ProductDetailInterface extends ProductInterface {
  description: string;
  images: ProductImageInterface[];
  videos: ProductVideoInterface[];
  specifications: ProductSpecificationInterface[];
}
