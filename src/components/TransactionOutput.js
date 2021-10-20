import React from "react";
import moment from "moment";
import { ReactComponent as NoDataImage} from './styled-components/NoData.svg';

import { ArrowButton, NewButton, TransactionDetails } from "./styled-components/Buttons";
import { LargeHeader, Bold, Subtitle, SubtitleLight, Small, SmallOverflowingText } from "./styled-components/Text";
import {
	FlexContainer,
	Container,
	LargeNumberContainer,
	ScrollingContainer,
	DailyTransactionData,
	FixedContainer,
	GridContainerHead,
	GIFContainer
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
						<Bold textAlign = "center">INCOME</Bold>
						<Subtitle textAlign = "center">
							{dataToRender.monthIncomeTotal ? dataToRender.monthIncomeTotal : 0}
						</Subtitle>
					</LargeNumberContainer>

					<LargeNumberContainer>
						<Bold textAlign = "center" color = {generalColors.red}>EXPENSE</Bold>
						<Subtitle textAlign = "center" color = {generalColors.red}>
							{dataToRender.monthExpenseTotal ? Math.abs(dataToRender.monthExpenseTotal) : 0}
						</Subtitle>
					</LargeNumberContainer>

					<LargeNumberContainer>
						<Bold textAlign = "center">TOTAL</Bold>
						<Subtitle textAlign = "center" amount = {dataToRender.monthTotal}>
							{dataToRender.monthTotal ? Math.abs(dataToRender.monthTotal) : 0}
						</Subtitle>
					</LargeNumberContainer>
				</FlexContainer>

			</FixedContainer>

			{!dataToRender.hasOwnProperty("dailyTrans") ? (
				<GIFContainer>
					<NoDataImage/>
					<br/>
					<Small>No Data Available</Small>
				</GIFContainer>
			) : (
				<ScrollingContainer>
					{dataToRender.dailyTrans.map((subItem, key) => {
						return (
							<DailyTransactionData key={key}>
								<GridContainerHead>
									<Bold>{moment(subItem.day).format('DD')} | {moment(subItem.day).format('ddd')}</Bold>
									<Bold>
										{subItem.dayIncomeTotal ? subItem.dayIncomeTotal : 0}
									</Bold>
									<Bold textAlign = 'right' color = {generalColors.red}>
										{subItem.dayExpenseTotal ? Math.abs(subItem.dayExpenseTotal) : 0}
									</Bold>
								</GridContainerHead>

								{subItem.transactions.map((value, key) => {
									return (
										<TransactionDetails
											key={key}
											onClick={getTransactionId}
											data-id={value.id}
										>
											{value.transactionType === "transfer" ? (
												<Small>
													Transfer
												</Small>
											) : (
												<SmallOverflowingText>{value.transactionCategory}</SmallOverflowingText>
											)}
											
											<div>
												<p>{value.transactionNotes}</p>
												{value.transactionType === "transfer" ? (
													<SmallOverflowingText>
														{value.fromAccount} <>&rarr;</> {value.toAccount}{" "}
													</SmallOverflowingText>
												) : (
													<Small>{value.fromAccount}</Small>
												)}
											</div>

											<Small textAlign = "right" amount = {value.transactionAmount}>{Math.abs(value.transactionAmount)}</Small>
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
