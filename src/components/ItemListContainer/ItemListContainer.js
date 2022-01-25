import React from "react";
import { ItemCount } from "../Counter/ItemCount";
export const ItemListContainer = ({ id, name, price, description, stock }) => {
	const Add = (state) => {
		console.log(`${state} Items Added`);
	};

	return (
		<div>
			<p>id:{id} </p>
			<p>name:{name}</p>
			<p>price:{price}</p>
			<p>description:{description} </p>
			<p>stock: {stock} </p>
			<ItemCount stock={stock} initial={1} onAdd={Add} />
		</div>
	);
};
