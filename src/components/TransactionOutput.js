import React from "react";
import moment from "moment";
import numeral from "numeral";
import { ReactComponent as NoDataImage } from "./styled-components/svg/NoData.svg";

import {
  ArrowButton,
  NewButton,
  TransactionDetails,
} from "./styled-components/Buttons.styled";
import {
  LargeHeader,
  Bold,
  Subtitle,
  SubtitleLight,
  Small,
  OverflowingText,
} from "./styled-components/Text.styled";
import {
  FlexContainer,
  Container,
  LargeNumberContainer,
  ScrollingContainer,
  DailyTransactionData,
  FixedContainer,
  GridContainerHead,
  GIFContainer,
} from "./styled-components/Containers.styled";
import { generalColors } from "./styled-components/Themes-Style.styled";
import { ShowSidebarButton } from "./styled-components/Buttons.styled";
import { ReactComponent as SidebarButton } from "./styled-components/svg/Sidebar.svg";

function Transaction(props) {
  const {
    getTransactionId,
    moveToNext,
    moveToPrevious,
    dataToRender,
    setToAddForm,
    handleSidebar,
  } = props;

  return (
    <Container>
      <FixedContainer>
        <ShowSidebarButton onClick={handleSidebar}>
          <SidebarButton />
        </ShowSidebarButton>
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
            <Bold textAlign="center">INCOME</Bold>
            <Subtitle textAlign="center">
              {dataToRender.monthIncomeTotal
                ? (dataToRender.monthIncomeTotal > 999999
                    ? numeral(dataToRender.monthIncomeTotal).format("0.0a")
                    : numeral(dataToRender.monthIncomeTotal).format("0.00"))
                : numeral(0).format('0.00')}
            </Subtitle>
          </LargeNumberContainer>

          <LargeNumberContainer>
            <Bold textAlign="center" color={generalColors.red}>
              EXPENSE
            </Bold>
            <Subtitle textAlign="center" color={generalColors.red}>
			{dataToRender.monthExpenseTotal
                ? (Math.abs(dataToRender.monthExpenseTotal) > 999999
                    ? numeral(Math.abs(dataToRender.monthExpenseTotal)).format("0.0a")
                    : numeral(Math.abs(dataToRender.monthExpenseTotal)).format("0.00"))
                : numeral(0).format('0.00')}
            </Subtitle>
          </LargeNumberContainer>

          <LargeNumberContainer>
            <Bold textAlign="center">TOTAL</Bold>
            <Subtitle textAlign="center" amount={dataToRender.monthTotal}>
			{dataToRender.monthTotal
                ? (dataToRender.monthTotal > 999999
                    ? numeral(Math.abs(dataToRender.monthTotal)).format("0.0a")
                    : numeral(Math.abs(dataToRender.monthTotal)).format("0.00"))
                : numeral(0).format('0.00')}
            </Subtitle>
          </LargeNumberContainer>
        </FlexContainer>
      </FixedContainer>

      {!dataToRender.hasOwnProperty("dailyTrans") ? (
        <GIFContainer>
          <NoDataImage />
          <br />
          <Small>No Data Available</Small>
        </GIFContainer>
      ) : (
        <ScrollingContainer startHeight={12}>
          {dataToRender.dailyTrans.map((subItem, key) => {
            return (
              <DailyTransactionData key={key}>
                <GridContainerHead>
                  <Bold>
                    {moment(subItem.day).format("DD")} |{" "}
                    {moment(subItem.day).format("ddd")}
                  </Bold>
                  <Bold>
				  {subItem.dayIncomeTotal
                ? (subItem.dayIncomeTotal > 999999
                    ? numeral(Math.abs(subItem.dayIncomeTotal)).format("0.0a")
                    : numeral(Math.abs(subItem.dayIncomeTotal)).format("0.00"))
                : numeral(0).format('0.00')}
                  </Bold>
                  <Bold textAlign="right" color={generalColors.red}>
					{subItem.dayExpenseTotal
					? (Math.abs(subItem.dayExpenseTotal) > 999999
						? numeral(Math.abs(subItem.dayExpenseTotal)).format("0.0a")
						: numeral(Math.abs(subItem.dayExpenseTotal)).format("0.00"))
					: numeral(0).format('0.00')}
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
                        <p>Transfer</p>
                      ) : (
                        <OverflowingText>
                          {value.transactionCategory}
                        </OverflowingText>
                      )}

                      <div>
                        <p>{value.transactionNotes}</p>
                        {value.transactionType === "transfer" ? (
                          <OverflowingText>
                            {value.fromAccount} <>&rarr;</> {value.toAccount}{" "}
                          </OverflowingText>
                        ) : (
                          <p>{value.fromAccount}</p>
                        )}
                      </div>

                      <p textAlign="right" amount={value.transactionAmount}>
                        {numeral(Math.abs(value.transactionAmount)).format('0.00')}
                      </p>
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
