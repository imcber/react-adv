import { useEffect, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
	const [counter, setCounter] = useState(value);

	useEffect(() => {
		setCounter(value);
	}, [value]);

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

		onChange && onChange({ product, count: newValue });
	};

	return { counter, increaseBy };
};
