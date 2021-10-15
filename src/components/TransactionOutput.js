import React from "react";
import moment from "moment";

import { ArrowButton, NewButton } from "./styled-components/Buttons";
import { LargeHeader, Bold } from "./styled-components/Text";
import { FlexContainer } from "./styled-components/Containers"
import { generalColors }from "./styled-components/Themes-Style"

function Transaction(props) {
	const { getTransactionId, moveToNext, moveToPrevious, dataToRender, setToAddForm } = props;

	return (
		<div>

		<FlexContainer justify = "space-between">
			<FlexContainer>
				<ArrowButton type="button" onClick={moveToPrevious}>
					<LargeHeader>{"<"}</LargeHeader>
				</ArrowButton>

				<LargeHeader>
					{typeof dataToRender.month !== "string"
						? moment.monthsShort(dataToRender.month)
						: dataToRender.month}{" "}
					{dataToRender.year}
				</LargeHeader>

				<ArrowButton type="button" onClick={moveToNext}>
					<LargeHeader>{">"}</LargeHeader>
				</ArrowButton>
			</FlexContainer>

			<NewButton type="button" onClick={setToAddForm}>
				<Bold color = {generalColors.white}>New | + </Bold>
			</NewButton>
		</FlexContainer>

			<p>Income: {dataToRender.monthIncomeTotal ? dataToRender.monthIncomeTotal : 0}</p>
			<p>Expense: {dataToRender.monthExpenseTotal ? dataToRender.monthExpenseTotal : 0}</p>
			<p>Total: {dataToRender.monthTotal ? dataToRender.monthTotal : 0}</p>
			{!dataToRender.hasOwnProperty("dailyTrans") ? (
				"No data found"
			) : (
				<div>
					{dataToRender.dailyTrans.map((subItem, key) => {
						return (
							<div key={key}>
								<p>Day: {subItem.day} </p>
								<p>Income: {subItem.dayIncomeTotal ? subItem.dayIncomeTotal : 0}</p>
								<p>
									Expense: {subItem.dayExpenseTotal ? subItem.dayExpenseTotal : 0}
								</p>
								<p>Total: {subItem.dayTotal ? subItem.dayTotal : 0}</p>

								{subItem.transactions.map((value, key) => {
									return (
										<button
											key={key}
											onClick={getTransactionId}
											data-id={value.id}
										>
											{value.transactionType === "transfer" ? (
												"Transfer"
											) : (
												<p>Category: {value.transactionCategory}</p>
											)}

											{value.transactionType !== "transfer" && (
												<p>Account: {value.fromAccount}</p>
											)}

											{value.transactionType === "transfer" && (
												<div>
													<p>
														{value.fromAccount} - {value.toAccount}{" "}
													</p>
												</div>
											)}
											<p>Amount: {value.transactionAmount}</p>
											<p>Notes: {value.transactionNotes}</p>
										</button>
									);
								})}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
export default Transaction;
