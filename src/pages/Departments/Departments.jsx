/** @format */

import React, { useContext } from "react";
import "./Departments.css";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../Context/PageContext";
export const Departments = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const deptClickHandler = (categoryname) => {
		dispatch({ type: "setSelectedCategory", payload: categoryname });
		setTimeout(() => navigate("/products"), 10);
	};
	return (
		<div className="departments-card">
			<h1>Departments</h1>
			<div className="dashboard-list-card">
				<ul>
					<li onClick={() => deptClickHandler("Kitchen")}>
						<b>Kitchen</b>
					</li>
					<li onClick={() => deptClickHandler("Clothing")}>
						<b>Clothing</b>
					</li>
					<li onClick={() => deptClickHandler("Toys")}>
						<b>Toys</b>
					</li>
				</ul>
			</div>
		</div>
	);
};
