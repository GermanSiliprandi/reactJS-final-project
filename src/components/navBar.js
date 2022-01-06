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
				<li>
					<a href="#">Notebooks</a>
				</li>
				<li>
					<a href="#">Teclados</a>
				</li>
				<li>
					<a href="#">Mouse</a>
				</li>
			</ul>
			<button>Log In</button>
		</nav>
	);
};
export default NavBar;
