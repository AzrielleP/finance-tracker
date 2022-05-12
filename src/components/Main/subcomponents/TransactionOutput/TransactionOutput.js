import React from "react";
import moment from "moment";
import Totals from "../Totals/Totals";
import DatePicker from "../DatePicker/DatePicker";
import { totalValueFormat, singleValueFormat } from "../../../../helpers/calc";

// Styled Components
import {
	NewButton,
	NewButtonMobile,
	TransactionDetails,
	TransactionOutput,
	GridContainerHead,
	NoDataContainer,
	DailyTransactionData,
	DayContainer
} from "./TransactionOutput.styled";
import {
	Main,
	Bold,
	Small,
	OverflowingText
} from "../../../../styled-components/Text.styled";
import {
	ScrollingContainer,
	FixedContainer,
	FlexHeader,
} from "../../../../styled-components/Default.styled";

function Transaction(props) {
	const {
		getTransactionId,
		moveToNextMonth,
		moveToPreviousMonth,
		dataToRender,
		setToAddForm,
	} = props;

	return (
		<TransactionOutput>
			<FixedContainer>
				<FlexHeader justifySmall="space-between">
					<DatePicker 
						moveToNextMonth = {moveToNextMonth}
						moveToPreviousMonth = {moveToPreviousMonth}
						dataToRender = {dataToRender}
					/>
					<NewButton type="button" onClick={setToAddForm}>
						New | +
					</NewButton>
				</FlexHeader>

				<Totals dataAsset = {dataToRender.monthIncomeTotal}
						dataExpense = {dataToRender.monthExpenseTotal}
						dataTotal = {dataToRender.monthTotal}
						heading = {['Income', 'Expense', 'Total']}
				/>
			</FixedContainer>

			{!dataToRender.hasOwnProperty("dailyTrans") ? (
				<NoDataContainer>
					<Main type = "transData">No Data Available</Main>
				</NoDataContainer>
			) : (
				<ScrollingContainer>
					{dataToRender.dailyTrans.map((subItem, key) => {
						return (
							<DailyTransactionData key={key}>
								<GridContainerHead>
									<div>
										<Bold>
											{moment(subItem.day).format("DD")}
										</Bold>
										<DayContainer day = {moment(subItem.day).format("ddd")}>
											<Small>{moment(subItem.day).format("ddd")}</Small>
										</DayContainer>
									</div>
									<Main type="income">
										{totalValueFormat(subItem.dayIncomeTotal)}
									</Main>
									<Main type="expense">
										{totalValueFormat(subItem.dayExpenseTotal)}
									</Main>
								</GridContainerHead>

								{subItem.transactions.map((value, key) => {
									return (
										<TransactionDetails
											key={key}
											onClick={getTransactionId}
											data-id={value.id}
											amount={value.transactionAmount}
										>
											{value.transactionType === "transfer" ? (
												<Main type = "transData">Transfer</Main>
											) : (
												<OverflowingText type = "transData">
													{value.transactionCategory}
												</OverflowingText>
											)}

											<div>
												<Main>{value.transactionNotes}</Main>
												{value.transactionType === "transfer" ? (
													<OverflowingText type = "transData">
														{value.fromAccount} <>&rarr;</>{" "}
														{value.toAccount}{" "}
													</OverflowingText>
												) : (
													<Main type = "transData">{value.fromAccount}</Main>
												)}
											</div>

											<Main>
												{singleValueFormat(value.transactionAmount)}
											</Main>
										</TransactionDetails>
									);
								})}
							</DailyTransactionData>
						);
					})}
				</ScrollingContainer>
			)}

			<NewButtonMobile onClick={setToAddForm}>+</NewButtonMobile>
		</TransactionOutput>
	);
}
export default Transaction;
