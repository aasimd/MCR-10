/** @format */

import React, { useReducer } from "react";
import { createContext } from "react";
import { inventoryData } from "../data";
export const PageContext = createContext();

const reducerFunction = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "setSelectedCategory":
			return { ...state, selectedCategory: payload };
		case "setShowLowStock":
			return { ...state, showLowStock: payload };
		case "setSortType":
			return { ...state, sortType: payload };
		case "setSelectedProduct":
			return { ...state, selectedProduct: payload };
		case "addNewProduct":
			return { ...state, data: [...state?.data, payload] };
		default:
			return state;
	}
};
export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {
		data: [...inventoryData],
		selectedCategory: "All Departments",
		showLowStock: false,
		sortType: "Name",
		selectedProduct: {}
	});
	const filterArray = () => {
		const filteredByCategory = [...state?.data]?.filter((product) => {
			return state?.selectedCategory === "All Departments"
				? true
				: state?.selectedCategory === product?.department;
		});
		const lowStockProducts = state?.showLowStock
			? [...filteredByCategory]?.filter((product) => product?.stock <= 10)
			: filteredByCategory;
		const sortProducts = () => {
			switch (state?.sortType) {
				case "Name":
					return [...lowStockProducts].sort((a, b) =>
						a.name.toLowerCase().localeCompare(b.name.toLowerCase())
					);
				case "Price":
					return [...lowStockProducts].sort((a, b) => a.price - b.price);
				case "Stock":
					return [...lowStockProducts].sort((a, b) => a.stock - b.stock);
				default:
					return [...lowStockProducts];
			}
		};
		return sortProducts();
	};
	const filteredArray = filterArray();
	return (
		<PageContext.Provider value={{ state, dispatch, filteredArray }}>
			{children}
		</PageContext.Provider>
	);
};
