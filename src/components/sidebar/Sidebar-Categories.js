import React, { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import {createData, customization} from "./charts/chartSettings";
import { groupByCategory } from "../../helpers/groupingData";

// Styled Components
import {ScrollingContainer, ChartContainer} from "../styled-components/Containers.styled";
import {Bold, Small} from "../styled-components/Text.styled";

function SidebarCategories(props) {
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
					<Bold>Income</Bold>
					{incomeCategories.length === 0 ?
						<Small>No available data</Small> :
						<Pie data = {createData(incomeCategories, 'income')} options = {customization(incomeCategories)}/>
					}
				</ChartContainer>
				
				<ChartContainer>
					<Bold>Expense</Bold>
					{expenseCategories.length === 0 ? 
						<Small>No available data</Small> :
						<Pie data = {createData(expenseCategories, 'expense')} options = {customization(expenseCategories)}/>
					}
				</ChartContainer>
			</ScrollingContainer>
	);
}

export default SidebarCategories;
