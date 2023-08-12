/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/HomePage/HomePage";
import { Departments } from "./pages/Departments/Departments";
import { Products } from "./pages/Products/Products";
import { NavBar } from "./Components/NavBar/NavBar";
import { ProductsDetails } from "./pages/ProductsDetails/ProductsDetails";
import { Modal_1 } from "./Components/Modal/Modal_1";

function App() {
	return (
		<div className="App">
			<div className="main-nav">
				<NavBar />
			</div>
			<div className="active-route">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/departments" element={<Departments />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:productId" element={<ProductsDetails />} />
					<Route path="/add-new-product" element={<Modal_1 />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
