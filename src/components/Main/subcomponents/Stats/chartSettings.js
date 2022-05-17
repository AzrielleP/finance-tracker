import { income, expense } from "../../../../styled-components/ThemeColors.styled";

const createData = (data, colorType) => {
	const values = data.map((item) => item.value);
	let total = values.reduce((a, v) => a + v);
	let inPercent = values.map((value) => Math.max((value / total) * 100, 1));

	return {
		labels: data.map((item) => item.categoryName),
		datasets: [
			{
				data: inPercent,
				backgroundColor: colorType === "income" ? income : expense,
				borderWidth: 1,
			},
		],
	};
};

const customization = (data) => {
	const dataValue = data.map((item) => item.value);
	const dataLabel = data.map((item) => item.categoryName);
	return {
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: function (tooltipItem) {
						let value = dataValue[tooltipItem.dataIndex];
						let label = dataLabel[tooltipItem.dataIndex];
						return `${label}: ${value}`;
					},
				},
			},
		},
		layout: {
			padding: 50,
		},
	};
};

export { createData, customization };
