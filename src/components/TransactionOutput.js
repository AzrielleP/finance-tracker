import React from "react";
import moment from "moment";
import { totalValueFormat, singleValueFormat } from "../helpers/calc";
import { ReactComponent as NoDataImage } from "./styled-components/svg/NoData.svg";
import { ArrowButton, NewButton, TransactionDetails } from "./styled-components/Buttons.styled";
import {
    LargeHeader,
    Bold,
    Subtitle,
    SubtitleLight,
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
import { generalColors } from "./styled-components/Themes-Style.styled";
import { ShowSidebarButton } from "./styled-components/Buttons.styled";
import { ReactComponent as SidebarIcon } from "./styled-components/svg/Sidebar.svg";

function Transaction(props) {
    const { getTransactionId, moveToNext, moveToPrevious, dataToRender, setToAddForm, handleSidebar } = props;

    return (
        <TransactionOutput>
            <FixedContainer>
                <ShowSidebarButton onClick={handleSidebar} alignment='left'>
                    <SidebarIcon />
                </ShowSidebarButton>
                <FlexContainer justifySmall='space-between'>
                    <FlexContainer>
                        <ArrowButton type='button' onClick={moveToPrevious}>
                            <LargeHeader>{"<"}</LargeHeader>
                        </ArrowButton>

                        <LargeHeader>
                            {typeof dataToRender.month !== "string"
                                ? moment.monthsShort(dataToRender.month)
                                : dataToRender.month}
                            {"  "}
                            {dataToRender.year}
                        </LargeHeader>

                        <ArrowButton type='button' onClick={moveToNext}>
                            <LargeHeader>{">"}</LargeHeader>
                        </ArrowButton>
                    </FlexContainer>

                    <NewButton type='button' onClick={setToAddForm}>
                        <Bold color={generalColors.white}>New | + </Bold>
                    </NewButton>
                </FlexContainer>

                <FlexContainer justify='space-around'>
                    <LargeNumberContainer>
                        <Bold>INCOME</Bold>
                        <Subtitle>{totalValueFormat(dataToRender.monthIncomeTotal)}</Subtitle>
                    </LargeNumberContainer>

                    <LargeNumberContainer>
                        <Bold color={generalColors.red}>EXPENSE</Bold>
                        <Subtitle color={generalColors.red}>{totalValueFormat(dataToRender.monthExpenseTotal)}</Subtitle>
                    </LargeNumberContainer>

                    <LargeNumberContainer>
                        <Bold>TOTAL</Bold>
                        <Subtitle amount={dataToRender.monthTotal}>{totalValueFormat(dataToRender.monthTotal)}</Subtitle>
                    </LargeNumberContainer>
                </FlexContainer>
            </FixedContainer>

            {!dataToRender.hasOwnProperty("dailyTrans") ? (
                <NoDataContainer>
                    <NoDataImage />
                    <br />
                    <Small>No Data Available</Small>
                </NoDataContainer>
            ) : (
                <ScrollingContainer>
                    {dataToRender.dailyTrans.map((subItem, key) => {
                        return (
                            <DailyTransactionData key={key}>
                                <GridContainerHead>
                                    <Bold>
                                        {moment(subItem.day).format("DD")} | {moment(subItem.day).format("ddd")}
                                    </Bold>
                                    <Bold>{totalValueFormat(subItem.dayIncomeTotal)}</Bold>
                                    <Bold textAlign='right' color={generalColors.red}>
                                        {totalValueFormat(subItem.dayExpenseTotal)}
                                    </Bold>
                                </GridContainerHead>

                                {subItem.transactions.map((value, key) => {
                                    return (
                                        <TransactionDetails key={key} onClick={getTransactionId} data-id={value.id}>
                                            {value.transactionType === "transfer" ? (
                                                <Small>Transfer</Small>
                                            ) : (
                                                <SmallOverflowingText>{value.transactionCategory}</SmallOverflowingText>
                                            )}

                                            <div>
                                                <Small>{value.transactionNotes}</Small>
                                                {value.transactionType === "transfer" ? (
                                                    <SmallOverflowingText>
                                                        {value.fromAccount} <>&rarr;</> {value.toAccount}{" "}
                                                    </SmallOverflowingText>
                                                ) : (
                                                    <Small>{value.fromAccount}</Small>
                                                )}
                                            </div>

                                            <Small textAlign='right' amount={value.transactionAmount}>
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
