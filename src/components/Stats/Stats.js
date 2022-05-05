import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { createData, customization } from "./chartSettings";
import { groupByCategory } from "../../helpers/groupingData";

// Styled Components
import { ScrollingContainer } from "../../../../styled-components/Default.styled";
import { ChartContainer } from "./Stats.styled";
import { Main } from "../../../../styled-components/Text.styled";

function Stats(props) {
	const { transaction, dateToRender } = props;
	const [incomeCategories, setIncomeCategories] = useState([]);
	const [expenseCategories, setExpenseCategories] = useState([]);

	useEffect(() => {
		setIncomeCategories(groupByCategory(transaction, "income", dateToRender));
		setExpenseCategories(groupByCategory(transaction, "expense", dateToRender));
	}, [transaction, dateToRender]);

	return (
		<ScrollingContainer>
			<ChartContainer>
				<Main>Income</Main>
				{incomeCategories.length === 0 ? (
					<Main>No available data</Main>
				) : (
					<div>
						<Pie
							data={createData(incomeCategories, "income")}
							options={customization(incomeCategories)}
						/>
					</div>
				)}
			</ChartContainer>

			<ChartContainer>
				<Main>Expense</Main>
				{expenseCategories.length === 0 ? (
					<Main>No available data</Main>
				) : (
					<div>
						<Pie
							data={createData(expenseCategories, "expense")}
							options={customization(expenseCategories)}
						/>
					</div>
				)}
			</ChartContainer>
		</ScrollingContainer>
	);
}

export default Stats;
