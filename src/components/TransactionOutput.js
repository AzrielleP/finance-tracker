import React from "react";
import moment from "moment";
import { totalValueFormat, singleValueFormat } from "../helpers/calc";
import { ReactComponent as NoDataImageLight } from "./styled-components/svg/NoData-Light.svg";
import { ReactComponent as NoDataImageDark } from "./styled-components/svg/NoData-Dark.svg";
import { ArrowButton, NewButton, TransactionDetails } from "./styled-components/Buttons.styled";
import {
	LargeHeader,
	Bold,
	Subtitle,
	Small,
	SmallOverflowingText,
} from "./styled-components/Text.styled";
import {
	FlexContainer,
	TransactionOutput,
	LargeNumberContainer,
	ScrollingContainer,
	DailyTransactionData,
	FixedContainer,
	GridContainerHead,
	NoDataContainer,
} from "./styled-components/Containers.styled";
import { ShowSidebarButton } from "./styled-components/Buttons.styled";
import { ReactComponent as SidebarIcon } from "./styled-components/svg/Sidebar.svg";

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
				<ShowSidebarButton onClick={handleSidebar} alignment="left">
					<SidebarIcon />
				</ShowSidebarButton>
				<FlexContainer justifySmall="space-between">
					<FlexContainer>
						<ArrowButton type="button" onClick={moveToPreviousMonth}>
							<LargeHeader>{"<"}</LargeHeader>
						</ArrowButton>

						<LargeHeader>
							{typeof dataToRender.month !== "string"
								? moment.monthsShort(dataToRender.month)
								: dataToRender.month}
							{"  "}
							{dataToRender.year}
						</LargeHeader>

						<ArrowButton type="button" onClick={moveToNextMonth}>
							<LargeHeader>{">"}</LargeHeader>
						</ArrowButton>
					</FlexContainer>

					<NewButton type="button" onClick={setToAddForm}>
						New | +
					</NewButton>
				</FlexContainer>

				<FlexContainer justify="space-around">
					<LargeNumberContainer type="income">
						<Bold>INCOME</Bold>
						<Subtitle>{totalValueFormat(dataToRender.monthIncomeTotal)}</Subtitle>
					</LargeNumberContainer>

					<LargeNumberContainer type="expense">
						<Bold>EXPENSE</Bold>
						<Subtitle>{totalValueFormat(dataToRender.monthExpenseTotal)}</Subtitle>
					</LargeNumberContainer>

					<LargeNumberContainer type="total" amount={dataToRender.monthTotal}>
						<Bold>TOTAL</Bold>
						<Subtitle>{totalValueFormat(dataToRender.monthTotal, true)}</Subtitle>
					</LargeNumberContainer>
				</FlexContainer>
			</FixedContainer>

			{!dataToRender.hasOwnProperty("dailyTrans") ? (
				<NoDataContainer>
					{!isDarkMode ? <NoDataImageLight /> : <NoDataImageDark />}
                    <br/>
					<Small>No Data Available</Small>
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
									<Bold type="income">
										{totalValueFormat(subItem.dayIncomeTotal)}
									</Bold>
									<Bold type="expense">
										{totalValueFormat(subItem.dayExpenseTotal)}
									</Bold>
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
												<Small>Transfer</Small>
											) : (
												<SmallOverflowingText>
													{value.transactionCategory}
												</SmallOverflowingText>
											)}

											<div>
												<Small>{value.transactionNotes}</Small>
												{value.transactionType === "transfer" ? (
													<SmallOverflowingText>
														{value.fromAccount} <>&rarr;</>{" "}
														{value.toAccount}{" "}
													</SmallOverflowingText>
												) : (
													<Small>{value.fromAccount}</Small>
												)}
											</div>

											<Small>
												{singleValueFormat(value.transactionAmount)}
											</Small>
										</TransactionDetails>
									);
								})}
							</DailyTransactionData>
						);
					})}
				</ScrollingContainer>
			)}
		</TransactionOutput>
	);
}
export default Transaction;
