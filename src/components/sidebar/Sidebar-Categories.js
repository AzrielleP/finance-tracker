import React, { useState, useEffect } from "react";
import CategoriesIncome from "./charts/CategoriesIncome";
import CategoriesExpense from "./charts/CategoriesExpense";
import { groupByCategory } from "../../helpers/groupingData";

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
			<h2>Categories</h2>
			<div>
				<h3>Income</h3>
				{incomeCategories.length === 0 && <p>No available data</p>}
				{incomeCategories.length > 0 &&
					incomeCategories.map((item, key) => {
						return (
							<div key={key}>
								<p>
									{item.categoryName}: {item.value}
								</p>
							</div>
						);
					})}
				<CategoriesIncome data={incomeCategories} />

				<h3>Expense</h3>
				{expenseCategories.length === 0 && <p>No available data</p>}
				{expenseCategories.map((item, key) => {
					return (
						<div key={key}>
							<p>
								{item.categoryName}: {item.value}
							</p>
						</div>
					);
				})}
				<CategoriesExpense data={expenseCategories} />
			</div>
		</div>
	);
}

export default SidebarCategories;
