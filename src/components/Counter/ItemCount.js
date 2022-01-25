import React from "react";
export const ItemCount = ({ stock, initial, onAdd }) => {
	const [counter, setCounter] = React.useState(initial);

	const inc = () => {
		if (stock > counter) {
			setCounter(counter + 1);
		}
	};
	const dec = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<div>
			<button onClick={inc}>+</button>
			<span>{counter}</span>
			<button onClick={dec}>-</button>
			<button onClick={() => onAdd(counter)}>Add to Cart</button>
		</div>
	);
};
