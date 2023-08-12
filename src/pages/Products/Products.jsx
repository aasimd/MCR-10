/** @format */

import React, { useContext } from "react";
import "./Products.css";
import { PageContext } from "../../Context/PageContext";
import { HeaderForProducts } from "../../Components/HeaderForProducts/HeaderForProducts";
import { NavLink } from "react-router-dom";
export const Products = () => {
	const { state, dispatch, filteredArray } = useContext(PageContext);
	// const productNameClickHandler = (productName) => {};
	return (
		<div>
			<h1>Products</h1>
			<div>
				<HeaderForProducts />
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<table style={{ width: "90%" }}>
					<tr>
						<th className="table-1-column">Image</th>
						<th className="table-2-column">Name</th>
						<th className="table-3-column">Description</th>
						<th className="table-4-column">Price</th>
						<th className="table-5-column">Stock</th>
						<th className="table-6-column">Supplier</th>
					</tr>

					{filteredArray?.map((product) => (
						<tr key={product?.id}>
							<td className="table-1-column">
								<img src={product.imageUrl} alt={product.name} />
							</td>
							<td className="table-2-column">
								<NavLink to={`/products/${product.id}`}>{product.name}</NavLink>
							</td>
							<td className="table-3-column">{product?.description}</td>
							<td className="table-4-column">${product.price}</td>
							<td className="table-5-column">{product?.stock}</td>
							<td className="table-6-column">{product?.supplier}</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	);
};
