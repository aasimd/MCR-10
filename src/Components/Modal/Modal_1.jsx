/** @format */

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal_1.css";
import { PageContext } from "../../Context/PageContext";
export const Modal_1 = () => {
	const { state, dispatch } = useContext(PageContext);
	const [newProductDetails, setNewProductDetails] = useState({
		id: null,
		department: "",
		name: "",
		description: "",
		price: "",
		stock: "",
		sku: "",
		supplier: "",
		delivered: "",
		imageUrl: ""
	});
	let newProduct = {
		id: Number(newProductDetails?.id),
		department: newProductDetails?.department,
		name: newProductDetails?.name,
		description: newProductDetails?.description,
		price: Number(newProductDetails?.price),
		stock: Number(newProductDetails?.stock),
		sku: newProductDetails?.sku,
		supplier: newProductDetails?.supplier,
		delivered: Number(newProductDetails?.delivered),
		imageUrl: newProductDetails?.imageUrl
	};
	const navigate = useNavigate();
	return (
		<div className="add-new-product">
			<h1>Add New Product</h1>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					state?.data?.push(newProduct);
					setTimeout(navigate(-1), 100);
				}}
			>
				<label>Department:</label>
				<select
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							department: event.target.value,
							id: state?.data?.length + 1
						}))
					}
				>
					<option value={"No Department Selected"}>Select Department</option>
					{["Kitchen", "Clothing", "Toys"].map((dept) => (
						<option value={dept}>{dept}</option>
					))}
				</select>
				<label>Name: </label>
				<input
					required
					type="text"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							name: event.target.value
						}))
					}
					value={newProductDetails?.name}
				/>
				<label>Description: </label>
				<input
					required
					type="text"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							description: event.target.value
						}))
					}
					value={newProductDetails?.description}
				/>
				<label>Price (in $): </label>
				<input
					required
					type="number"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							price: Number(event.target.value)
						}))
					}
					value={newProductDetails?.price}
				/>
				<label>Stock:</label>
				<input
					required
					type="number"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							stock: Number(event.target.value)
						}))
					}
					value={newProductDetails?.stock}
				/>
				<label>SKU:</label>
				<input
					required
					type="text"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							sku: event.target.value
						}))
					}
					value={newProductDetails?.sku}
				/>
				<label>Supplier: </label>
				<input
					required
					type="text"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							supplier: event.target.value
						}))
					}
					value={newProductDetails?.supplier}
				/>
				<label>Delivered:</label>
				<input
					required
					type="number"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							delivered: Number(event.target.value)
						}))
					}
					value={newProductDetails?.delivered}
				/>
				<label>Image URL: </label>
				<input
					type="url"
					onChange={(event) =>
						setNewProductDetails((p) => ({
							...p,
							imageUrl: event.target.value
						}))
					}
					value={newProductDetails?.imageUrl}
				/>
				<div>
					<input type="submit" />
					<button onClick={() => navigate(-1)}>Cancel</button>
				</div>
			</form>
		</div>
	);
};
