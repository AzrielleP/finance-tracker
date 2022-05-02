import React from "react";
import moment from "moment";
import { totalValueFormat, singleValueFormat } from "../../helpers/calc";

// Styled Components
import { ReactComponent as SidebarIcon } from "../styled-components/svg/Sidebar.svg";
import {
	ArrowButton,
	NewButton,
	NewButtonMobile,
	TransactionDetails,
	TransactionOutput,
	GridContainerHead,
	NoDataContainer,
	DailyTransactionData,
	LargeNumberContainer,
} from "./TransactionOutput.styled";
import {
	Large,
	Main,
	Bold,
	Light,
	Small,
	OverflowingText
} from "../styled-components/Text.styled";
import {
	FlexContainer,
	ScrollingContainer,
	FixedContainer,
	FlexContainerBordered,
	ShowSidebarButton,
} from "../styled-components/Default.styled";

function Transaction(props) {
	const {
		getTransactionId,
		moveToNextMonth,
		moveToPreviousMonth,
		dataToRender,
		setToAddForm,
		handleSidebar,
		isDarkMode,
	} = props;

	return (
		<TransactionOutput>
			<FixedContainer>
				{/* <ShowSidebarButton onClick={handleSidebar} alignment="left">
					<SidebarIcon />
				</ShowSidebarButton> */}
				<FlexContainerBordered justifySmall="space-between">
					<FlexContainer>
						<ArrowButton type="button" onClick={moveToPreviousMonth}>
							<i class="fa-solid fa-angle-left"></i>
						</ArrowButton>

						<Large>
							{typeof dataToRender.month !== "string"
								? moment.monthsShort(dataToRender.month)
								: dataToRender.month}
							{"  "}
							{dataToRender.year}
						</Large>

						<ArrowButton type="button" onClick={moveToNextMonth}>
							<i class="fa-solid fa-angle-right"></i>
						</ArrowButton>
					</FlexContainer>

					<NewButton type="button" onClick={setToAddForm}>
						New | +
					</NewButton>
				</FlexContainerBordered>

				<FlexContainerBordered justify="space-around">
					<LargeNumberContainer type="income">
						<Light>Income</Light>
						<Main>{totalValueFormat(dataToRender.monthIncomeTotal)}</Main>
					</LargeNumberContainer>

					<LargeNumberContainer type="expense">
						<Light>Expense</Light>
						<Main>{totalValueFormat(dataToRender.monthExpenseTotal)}</Main>
					</LargeNumberContainer>

					<LargeNumberContainer type="total" amount={dataToRender.monthTotal}>
						<Light>Total</Light>
						<Main>{totalValueFormat(dataToRender.monthTotal, true)}</Main>
					</LargeNumberContainer>
				</FlexContainerBordered>
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
									<Bold>
										{moment(subItem.day).format("DD")} |{" "}
										{moment(subItem.day).format("ddd")}
									</Bold>
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
