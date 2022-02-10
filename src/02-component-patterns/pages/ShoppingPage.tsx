import { ProductCard, ProductImage, ProductsButtons, ProductTitle } from '../components';

const product = {
	id: '1',
	title: 'Coffe Mug-1',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle title='quiobo' />
					<ProductsButtons />
				</ProductCard>
			</div>
		</div>
	);
};
