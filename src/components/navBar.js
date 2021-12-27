import React from "react";
import logo from "./images/helmet.png";

export const NavBar = () => {
	return (
		<nav className="header_nav">
			<div>
				<img src={logo} alt="logo" />
				<p>Spartan Hard Store</p>
			</div>
			<ul>
				<li>Notebooks</li>
				<li>Teclados</li>
				<li>Mouse</li>
			</ul>
			<button>Log In</button>
		</nav>
	);
};
export default NavBar;
