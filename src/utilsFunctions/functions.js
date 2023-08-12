/** @format */

export const getTotalStock = (Arr) =>
	Arr.reduce((acc, curr) => (acc += curr.stock), 0);

export const getTotalDelivered = (Arr) =>
	Arr.reduce((acc, curr) => (acc += curr.delivered), 0);

export const getLowStock = (Arr) =>
	Arr.reduce((acc, curr) => (curr.stock <= 10 ? (acc += 1) : acc), 0);
