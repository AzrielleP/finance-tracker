import React, { useState, useEffect } from "react";
import DataToShow from "./DataToShow";
import DatePicker from "../DatePicker/DatePicker";
import { groupByCategory } from "../../../../helpers/groupingData";

// Styled Components
import {
    FixedContainer,
    ScrollingContainer,
    FlexHeader,
    FlexContainer,
} from "../../../../styled-components/Default.styled";
import { MobileScrollingContainer, RadioContainer, StatsRadio, StatsFlexContainer, DesktopScrollingContainer } from "./Stats.styled";
import { Bold } from "../../../../styled-components/Text.styled";

function Stats(props) {
    const { transaction, dateToRender, dataToRender, moveToNextMonth, moveToPreviousMonth } = props;
    const [incomeCategories, setIncomeCategories] = useState([]);
    const [expenseCategories, setExpenseCategories] = useState([]);

    const [selection, setSelection] = useState("income");

    const handleSelection = (event) => {
        let value = event.target.value;
        setSelection(value);
    };

    useEffect(() => {
        setIncomeCategories(groupByCategory(transaction, "income", dateToRender, dataToRender));
        setExpenseCategories(groupByCategory(transaction, "expense", dateToRender, dataToRender));
    }, [transaction, dateToRender, dataToRender]);

    return (
        <div>
            <FixedContainer>
                <FlexHeader>
                    <DatePicker
                        moveToNextMonth={moveToNextMonth}
                        moveToPreviousMonth={moveToPreviousMonth}
                        dataToRender={dataToRender}
                    />
                </FlexHeader>

                {/* Mobile Mode */}
                <RadioContainer selection={selection} justifySmall='space-around'>
                    <StatsRadio
                        type='radio'
                        name='statsSelection'
                        value='income'
                        checked={selection === "income"}
                        onChange={handleSelection}
                        id='income'
                    />

                    <Bold htmlFor='income' as='label'>
                        Income
                    </Bold>

                    <StatsRadio
                        type='radio'
                        name='statsSelection'
                        value='expense'
                        checked={selection === "expense"}
                        onChange={handleSelection}
                        id='expense'
                    />

                    <Bold htmlFor='expense' as='label'>
                        Expense
                    </Bold>
                </RadioContainer>
            </FixedContainer>

            {/* Mobile Mode */}
            <MobileScrollingContainer>
                {selection === "income" && (
                    <DataToShow data = {incomeCategories} type = "income"/>
                )}

                {selection === "expense" && (
                    <DataToShow data = {expenseCategories} type = "expense"/>
                )}
            </MobileScrollingContainer>

            {/* Desktop Mode */}
            <DesktopScrollingContainer>
                    <StatsFlexContainer>
                        <DataToShow data = {incomeCategories} type = "income"/>
                        <DataToShow data = {expenseCategories} type = "expense"/>
                    </StatsFlexContainer>
            </DesktopScrollingContainer>
        </div>
    );
}

export default Stats;
