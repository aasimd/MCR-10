/** @format */

import React, { useContext } from "react";
import {
	getTotalStock,
	getTotalDelivered,
	getLowStock
} from "../../utilsFunctions/functions";
import { PageContext } from "../../Context/PageContext";
import "./Dashboard.css";
export const Dashboard = () => {
	const { state } = useContext(PageContext);
	const totalStock = getTotalStock(state?.data);
	const totalDelivered = getTotalDelivered(state?.data);
	const lowStock = getLowStock(state?.data);

	return (
		<div>
			<h1>Dashboard</h1>
			<div className="dashboard-list-card">
				<ul>
					<li>
						<b>
							<span style={{ color: "green" }}>{totalStock}</span>
							<br />
							Total Stock
						</b>
					</li>
					<li>
						<b>
							<span style={{ color: "orange" }}>{totalDelivered}</span>
							<br />
							Total Delivered
						</b>
					</li>
					<li>
						<b>
							<span style={{ color: "red" }}>{lowStock}</span>
							<br />
							Low Stock
						</b>
					</li>
				</ul>
			</div>
		</div>
	);
};
