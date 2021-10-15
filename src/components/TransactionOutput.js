import React from "react";
import moment from "moment";

function Transaction(props) {
	const { getTransactionId, moveToNext, moveToPrevious, dataToRender } = props;

	return (
		<div>
			<button type="button" onClick={moveToPrevious}>
				Previous
			</button>
			<h1>
				{typeof dataToRender.month !== "string"
					? moment.months(dataToRender.month)
					: dataToRender.month}{" "}
				{dataToRender.year}
			</h1>
			<p>Income: {dataToRender.monthIncomeTotal ? dataToRender.monthIncomeTotal : 0}</p>
			<p>Expense: {dataToRender.monthExpenseTotal ? dataToRender.monthExpenseTotal : 0}</p>
			<p>Total: {dataToRender.monthTotal ? dataToRender.monthTotal : 0}</p>
			<button type="button" onClick={moveToNext}>
				Next
			</button>
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
