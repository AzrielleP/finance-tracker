import React from "react";
import moment from "moment";

import { ArrowButton, NewButton, TransactionDetails } from "./styled-components/Buttons";
import { LargeHeader, Bold, Subtitle, SubtitleLight, Small } from "./styled-components/Text";
import {
	FlexContainer,
	Container,
	LargeNumberContainer,
	ScrollingContainer,
	DailyTransactionData,
	FixedContainer
} from "./styled-components/Containers";
import { generalColors } from "./styled-components/Themes-Style";

function Transaction(props) {
	const { getTransactionId, moveToNext, moveToPrevious, dataToRender, setToAddForm } = props;

	return (
		<Container>

		<FixedContainer>
			<FlexContainer justify="space-between">
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
					<Bold color={generalColors.white}>New | + </Bold>
				</NewButton>
			</FlexContainer>

			<FlexContainer justify="space-around">
				<LargeNumberContainer>
					<Bold>INCOME</Bold>
					<Subtitle>
						{dataToRender.monthIncomeTotal ? dataToRender.monthIncomeTotal : 0}
					</Subtitle>
				</LargeNumberContainer>

				<LargeNumberContainer>
					<Bold>EXPENSE</Bold>
					<Subtitle>
						{dataToRender.monthExpenseTotal ? dataToRender.monthExpenseTotal : 0}
					</Subtitle>
				</LargeNumberContainer>

				<LargeNumberContainer>
					<Bold>TOTAL</Bold>
					<Subtitle>{dataToRender.monthTotal ? dataToRender.monthTotal : 0}</Subtitle>
				</LargeNumberContainer>
			</FlexContainer>

		</FixedContainer>

			{!dataToRender.hasOwnProperty("dailyTrans") ? (
				<ScrollingContainer>
					<Small>No Data Available</Small>
				</ScrollingContainer>
			) : (
				<ScrollingContainer>
					{dataToRender.dailyTrans.map((subItem, key) => {
						return (
							<DailyTransactionData key={key}>
								<FlexContainer justify="space-between">
									<Bold>{subItem.day}</Bold>
									<Bold>
										{subItem.dayIncomeTotal ? subItem.dayIncomeTotal : 0}
									</Bold>
									<Bold>
										{subItem.dayExpenseTotal ? subItem.dayExpenseTotal : 0}
									</Bold>
									<Bold>{subItem.dayTotal ? subItem.dayTotal : 0}</Bold>
								</FlexContainer>

								{subItem.transactions.map((value, key) => {
									return (
										<TransactionDetails
											key={key}
											onClick={getTransactionId}
											data-id={value.id}
										>
											{value.transactionType === "transfer" ? (
												"Transfer"
											) : (
												<Small>{value.transactionCategory}</Small>
											)}
											
											<div>
												<p>{value.transactionNotes}</p>
												{value.transactionType !== "transfer" && (
													<Small>{value.fromAccount}</Small>
												)}
											</div>

											{value.transactionType === "transfer" && (
													<p>
														{value.fromAccount} - {value.toAccount}{" "}
													</p>
											)}

											<p>{value.transactionAmount}</p>
											
										</TransactionDetails>
									);
								})}
							</DailyTransactionData>
						);
					})}
				</ScrollingContainer>
			)}
		</Container>
	);
}
export default Transaction;
