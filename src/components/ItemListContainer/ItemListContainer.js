import React from "react";
export const ItemListContainer = ({ id, name, price, description, stock }) => {
	const Add = ({ state }) => {
		console.log(`${state} Items Added`);
	};
	const ItemCount = ({ stock, initial, onAdd }) => {
		const [counter, setCounter] = React.useState(initial);

		React.useEffect((initial) => {
			setCounter(initial);
			return () => {
				setCounter(initial);
			};
		}, []);
		const inc = () => {
			if ({ stock } >= counter) {
				let increase = counter;
				increase++;
				setCounter(increase);
			}
		};
		const dec = () => {
			if (counter >= 0) {
				let decrease = counter;
				decrease--;
				setCounter(decrease);
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
	return (
		<div>
			<p>id:{id} </p>
			<p>name:{name}</p>
			<p>price:{price}</p>
			<p>description:{description} </p>
			<p>stock: {stock} </p>
			<ItemCount initial={1} />
		</div>
	);
};
