import React from "react";
import cart from "../../images/cart.png";
export function CartWidget() {
	return (
		<div className="cartWidget">
			<img src={cart} alt="cart" />
			<p>0</p>
		</div>
	);
}
