import React from "react";

export const Add = ({ state }) => {
	console.log(`${state} Items Added`);
};

export const ItemCount = ({ stock, initial, onAdd }) => {
	const [counter, setCounter] = React.useState(initial);

	React.useEffect((initial) => {
		setCounter(initial);
		return () => {
			setCounter(initial);
		};
	}, []);
	const inc = () => {
		if ({ stock } >= { counter }) {
			let increase = counter++;
			setCounter(increase);
		}
	};
	const dec = () => {
		if ({ counter } >= 0) {
			let decrease = counter--;
			setCounter(decrease);
		}
	};

	return (
		<div>
			<button onClick={inc}>+</button>
			<span>{counter}</span>
			<button onClick={dec}>-</button>
			<button onClick={onAdd}>Add to Cart</button>
		</div>
	);
};
