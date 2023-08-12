/** @format */

import { NavLink } from "react-router-dom";
import "./NavBar.css";
import React from "react";

const activeButtonStyles = ({ isActive }) =>
	isActive
		? {
				color: "white",
				// padding: "24px",
				fontWeight: "600",
				fontSize: "24px"
		  }
		: { padding: "5px", fontWeight: "200", fontSize: "24px", color: "#999999" };

export const NavBar = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink to="/" style={activeButtonStyles}>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink to="/departments" style={activeButtonStyles}>
						Departments
					</NavLink>
				</li>
				<li>
					<NavLink to="/products" style={activeButtonStyles}>
						Products
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
