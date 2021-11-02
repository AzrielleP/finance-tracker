import React, { useState, useEffect } from "react";
import CategoriesChart from "./charts/CategoriesChart";
import { groupByCategory } from "../../helpers/groupingData";

import {Container} from "../styled-components/Containers.styled";
import * as Text from "../styled-components/Text.styled";

function SidebarCategories(props) {
	const { transaction, dateToRender } = props;
	const [incomeCategories, setIncomeCategories] = useState([]);
	const [expenseCategories, setExpenseCategories] = useState([]);

	useEffect(() => {
		setIncomeCategories(groupByCategory(transaction, "income", dateToRender));
		setExpenseCategories(groupByCategory(transaction, "expense", dateToRender));
	}, [transaction, dateToRender]);

	return (
			<div>
				<p>Income</p>
				{incomeCategories.length === 0 && <Text.Small>No available data</Text.Small>}

				<CategoriesChart data={incomeCategories} />
				{incomeCategories.length > 0 &&
					incomeCategories.map((item, key) => {
						return (
							<div key={key}>
								<Text.Small>
									{item.categoryName}: {item.value}
								</Text.Small>
							</div>
						);
					})}
				
				<p>Expense</p>
				{expenseCategories.length === 0 && <Text.Small>No available data</Text.Small>}

				<CategoriesChart data={expenseCategories} />
				{expenseCategories.map((item, key) => {
					return (
						<div key={key}>
							<Text.Small>
								{item.categoryName}: {item.value}
							</Text.Small>
						</div>
					);
				})}
			</div>
	);
}

export default SidebarCategories;
