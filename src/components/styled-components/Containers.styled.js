import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style.styled";

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({justifySmall}) => justifySmall};
    padding: ${({padding}) => padding};
    @media screen and (min-width: 768px) {
        justify-content: ${({justifyLarge}) => justifyLarge};
    }
`

export const TransactionOutput = styled.div`
    padding: 0 1em;

    @media screen and (min-width: 768px) {
        padding: 0 3em;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 7em;
    }
`

export const AppContainer = styled.div`
    @media screen and (min-width: 768px) {
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 70% 30%; 
        grid-template-rows: 1fr; 
    }
`

export const SidebarContainer = styled.div`
    display: ${({display}) => display ? "block" : "none"};
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 2em;
    z-index: 10;
    height: 100vh;
    width: 100%;
    background: ${generalColors.lightAccent};

    @media screen and (min-width: 768px) {
        display: block;
        position: static;
    }
`

export const ScrollingContainer = styled.div`
    overflow: auto;
    z-index: 1;
`

export const DailyTransactionData = styled.div`
    border-radius: 10px;
    margin: 1em 0;
    padding: 1.5em 1em;
    background: ${generalColors.lightAccent};
`

export const FixedContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    padding: 2em 0;
    width: 100%;
    z-index: 2;
    background: ${generalColors.white};
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

// TransactionInput
export const ModalContainer = styled.div`
    z-index: 10;
    background: ${generalColors.white};
    height: 100vh;
    position: absolute;
`

export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${({color}) => color < 0 ? generalColors.red : lightTheme.blue};
    border-radius: 50%;
    display: inline-block;

    @media screen and (min-width: 768px) {
        height: 15px;
        width: 15px;
    }
`