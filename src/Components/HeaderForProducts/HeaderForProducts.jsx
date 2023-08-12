/** @format */

import React, { useContext } from "react";
import "../../pages/Products/Products.css";
import { PageContext } from "../../Context/PageContext";
import { useNavigate } from "react-router-dom";
export const HeaderForProducts = () => {
	const { state, dispatch } = useContext(PageContext);
	const departmentOptionChangeHandler = (event) => {
		dispatch({ type: "setSelectedCategory", payload: event.target.value });
		console.log(state?.selectedCategory);
	};
	const sortOptionChangeHandler = (event) => {
		// console.log(event.target.value);
		dispatch({ type: "setSortType", payload: event.target.value });
		console.log(state?.sortType);
	};
	const navigate = useNavigate();
	return (
		<header className="products-header">
			<div>
				<select onChange={(event) => departmentOptionChangeHandler(event)}>
					<option
						value="All Departments"
						selected={
							state?.selectedCategory === "All Departments" ? true : false
						}
					>
						All Departments
					</option>
					<option
						selected={state?.selectedCategory === "Kitchen" ? true : false}
						value="Kitchen"
					>
						Kitchen
					</option>
					<option
						selected={state?.selectedCategory === "Clothing" ? true : false}
						value="Clothing"
					>
						Clothing
					</option>
					<option
						selected={state?.selectedCategory === "Toys" ? true : false}
						value="Toys"
					>
						Toys
					</option>
				</select>
			</div>
			<div>
				<label for="low-stock">
					<input
						type="checkbox"
						id="low-stock"
						onClick={() => {
							dispatch({
								type: "setShowLowStock",
								payload: !state?.showLowStock
							});
						}}
					/>
					Low Stock Items
				</label>
			</div>
			<div>
				<select onChange={(event) => sortOptionChangeHandler(event)}>
					{["Name", "Price", "Stock"].map((type) => (
						<option value={type}>{type}</option>
					))}
				</select>
			</div>
			<button onClick={() => navigate("/add-new-product")}>New</button>
		</header>
	);
};
