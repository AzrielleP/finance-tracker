import styled, { css } from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style.styled";

// GENERAL
export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({justifySmall}) => justifySmall};

    @media screen and (min-width: 768px) {
        justify-content: ${({justifyLarge}) => justifyLarge};
    }
`
export const ScrollingContainer = styled.div`
    overflow: auto;
    z-index: 1;
`
export const FixedContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    padding: 2em 0 1em 0;
    width: 100%;
    z-index: 2;
    background-color: ${generalColors.white};
`
export const LargeNumberContainer = styled.div`
    flex: 1;
    margin: 0.25em;
    padding: 0.5em;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${generalColors.darkAccent};
    text-align: center;

    p {
        text-align: center;
    }
`

// App
export const AppContainer = styled.div`
    @media screen and (min-width: 768px) {
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 70% 30%; 
        grid-template-rows: 1fr; 
    }
`

// TransactionOutput
export const TransactionOutput = styled.div`
    padding: 0 8vw;

    @media screen and (min-width: 1024px) {
        padding: 0 7em;
    }
`
export const GridContainerHead = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0.5em;
    border-bottom: 0.5px solid ${generalColors.darkAccent};
    padding-bottom: 1em;
    align-items: center;
`
export const NoDataContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
`
export const DailyTransactionData = styled.div`
    border-radius: 10px;
    margin: 0 0 1em 0;
    padding: 1.5em 1em;
    background: ${generalColors.lightAccent};
`

// Sidebar
export const SidebarContainer = styled.div`
    display: ${({$display}) => $display ? "block" : "none"};
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 8vw;
    z-index: 10;
    min-height: 100vh;
    width: 100%;
    background: ${generalColors.lightAccent};

    @media screen and (min-width: 768px) {
        display: block;
        position: static;
        padding: 0 2vw;
    }
`
export const SidebarFixedContainer = styled(FixedContainer)`
    background-color: ${generalColors.lightAccent};
`
export const SidebarSelectors = styled(FlexContainer)`
    padding: 1em 0 0.5em 0;
    border-bottom: 5px solid black;
    position: relative;

    label {
        cursor: pointer;
    }

    &:after {
        position: absolute;
        bottom: -5px;
        height: 5.1px;
        width: 50%;
        ${({option}) => option === "categories" ?
        css`
            right: 0;
        `
        :
        css`
            left: 0;
        `
        };
        content: "";
        background-color: ${generalColors.lightAccent};
    }

    @media screen and (min-width: 768px) {
        padding: 0.5em 0 0.5em 0;
        margin: 0 0 0.5em 0;
    }

    @media screen and (min-width: 1024px) {
        padding: 1.5em 0 0.5em 0;
        margin: 0 0 2em 0;
    }
`
export const ChartContainer = styled.div`
    min-height: 30vh;
    @media screen and (min-width: 1024px) {
        margin: 0 2em 2em 2em;
    }
`
export const AccountContainer = styled(FlexContainer)`
    justify-content: space-between;
    margin: 1.25em 0.5em 0 0.5em;

    ${FlexContainer} {
        gap: 1em;
    }
`
export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${({color}) => color < 0 ? generalColors.red : lightTheme.blue};
    border-radius: 50%;

    @media screen and (min-width: 768px) {
        height: 15px;
        width: 15px;
    }
`

// TransactionInput
export const ModalContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    padding: 2em;
    background: ${generalColors.white};
`

export const TransTypeContainer = styled(FlexContainer)`
    margin: 1em 0;

    & label:nth-child(4) {
        margin: 0 0.5em;
    }
`

export const TransInputContainer = styled.div`
    margin: 1em 0;
`