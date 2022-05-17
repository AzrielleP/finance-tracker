import React from "react";
import { totalValueFormat } from "../../../../helpers/calc";

// Styled Components
import { FlexContainerBordered } from "../../../../styled-components/Default.styled";
import { LargeNumberContainer } from "./Totals.styled";
import { Light, Main } from "../../../../styled-components/Text.styled";

function Totals(props) {
    const { dataAsset, dataExpense, dataTotal, heading } = props;
    return (
        <FlexContainerBordered justify='space-around'>
            <LargeNumberContainer type='income'>
                <Light>{heading[0]}</Light>
                <Main>{totalValueFormat(dataAsset)}</Main>
            </LargeNumberContainer>

            <LargeNumberContainer type='expense'>
                <Light>Expense</Light>
                <Main>{totalValueFormat(dataExpense)}</Main>
            </LargeNumberContainer>

            <LargeNumberContainer type='total' amount={dataTotal}>
                <Light>Total</Light>
                <Main>{totalValueFormat(dataTotal, true)}</Main>
            </LargeNumberContainer>
        </FlexContainerBordered>
    );
}

export default Totals;
