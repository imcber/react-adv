import { ProductCard as ProductCarHOC } from './ProductCard';

import { ProductsButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductsButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCarHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductsButtons,
});

export default ProductCard;
