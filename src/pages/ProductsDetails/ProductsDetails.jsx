/** @format */

import React, { useContext } from "react";
import "./ProductsDetails.css";
import { PageContext } from "../../Context/PageContext";
import { useNavigate, useParams } from "react-router-dom";

export const ProductsDetails = () => {
	const { state, dispatch } = useContext(PageContext);
	const { productId } = useParams();
	const selectedProduct = state?.data?.find(
		(product) => product.id === Number(productId)
	);
	const {
		id,
		department,
		name,
		description,
		price,
		stock,
		sku,
		supplier,
		delivered,
		imageUrl
	} = selectedProduct;
	const navigate = useNavigate();
	return (
		<div className="single-product-page">
			<div>
				<button onClick={() => navigate(-1)}>Back</button>
				<h1>{name}</h1>
				<div className="single-product-image-container">
					<img src={imageUrl} alt={name} />
				</div>
				<p>
					Description: <b>{description}</b>
				</p>
				<p>
					Price: <b>${price}</b>
				</p>
				<p>
					Stock: <b>{stock}</b>
				</p>
				<p>
					Supplier: <b>{supplier}</b>
				</p>
				<p>
					Department: <b>{department}</b>
				</p>
				<p>
					SKU: <b>${sku}</b>
				</p>
				<p>
					Delivered: <b>{delivered}</b>
				</p>
			</div>
		</div>
	);
};
