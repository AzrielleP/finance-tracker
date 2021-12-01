import styled, { css } from "styled-components";
import { generalColors } from "./ThemeColors.styled";

const handleColorType = (type) => {
    switch (type) {
        case "income" : return generalColors.blue;
        case "expense" : return generalColors.red;
        default : return false;
    }
}

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
    padding: 3em 0 1em 0;
    width: 100%;
    z-index: 2;
    background-color: ${({theme}) => theme.background};
`
export const LargeNumberContainer = styled.div`
    flex: 1;
    margin: 0.25em;
    padding: 0.5em;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${({type, theme}) => handleColorType(type, theme) || theme.text};

    p {
        text-align: center;
        color: ${({type, theme}) => handleColorType(type, theme) || theme.text};
    };
`

// Modal
export const ModalBackground = styled.div`
    @media screen and (min-width: 768px) {
        display: ${({show}) => show? "block": "none"};
        position: absolute;
        top: 0;
        left: 0;
        z-index: 25;
        height: 100vh;
        width: 100vw;
        opacity: 0.6;
        background-color: ${({theme}) => theme.modalBg};   
    }         
`
export const ModalContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 20;
    padding: 10vw;
    top: 0;
    left: 0;
    background: ${({theme}) => theme.background};

    @media screen and (min-width: 768px) {
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        height: 35em;
        width: 45em;
        z-index: 30;
        padding: 5em;
        margin-left: auto; 
        margin-right: auto; 
        border-radius: 10px;
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

    @media screen and (min-width: 1024px) {
        grid-template-columns: 75% 25%;
    }
`

// TransactionOutput
export const TransactionOutput = styled.div`
    padding: 0 5vw;

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
    padding-bottom: 1em;
    border-bottom: 0.5px solid ${({theme}) => theme.border};

    p:nth-child(3) {
        text-align: right;
    }

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
    background: ${({theme}) => theme.textBg};
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
    background: ${({theme}) => theme.background};

    @media screen and (min-width: 768px) {
        display: block;
        position: static;
        padding: 0 2vw;
        border-left: 0.1px solid ${({theme}) => theme.fadedGrey};
    }
`
export const SidebarFixedContainer = styled(FixedContainer)`
    background-color: ${({theme}) => theme.background};
`
export const SidebarSelectors = styled(FlexContainer)`
    padding: 1em 0 0.5em 0;
    border-bottom: 5px solid ${generalColors.blue};
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
        background-color: ${({theme}) => theme.background};
    }

    @media screen and (min-width: 768px) {
        padding: 0.5em 0 0.5em 0;
        margin: 0 0 0.5em 0;
    }

    @media screen and (min-width: 1024px) {
        padding: 1.5em 0 0.5em 0;
    }
`
export const ChartContainer = styled.div`
    min-height: 30vh;

    div {
            margin: auto;
            max-width: 20em; 
    }
  
    @media screen and (min-width: 1024px) {
        div {
            padding: 1em;
        }
    }
`

export const AccountTotalContainer = styled.div`
    width: 100%;
    border-bottom: 0.5px solid ${({theme}) => theme.border};

    div {
        padding-bottom: 1em;
        width: 100%;
    }

    p {
        color: ${({type}) => handleColorType(type)};
    }
`
export const AccountContainer = styled(FlexContainer)`
    justify-content: space-between;
    margin: 1.25em 0.5em 0 0.5em;

    ${FlexContainer} {
        gap: 1em;
    }

    p {
        color: ${({theme}) => theme.text};
    }
`
export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${({color}) => color < 0 ? generalColors.red : generalColors.blue};
    border-radius: 50%;

    @media screen and (min-width: 768px) {
        height: 15px;
        width: 15px;
    }
`

// TransactionInput
export const TransTypeContainer = styled(FlexContainer)`
    margin: 1em 0;

    & label:nth-child(4) {
        margin: 0 0.5em;
    }
`

export const TransInputContainer = styled.div`
    margin: 2em 0;

    & button:nth-child(1) {
        margin-right: 0.5em;
    }

    & button:nth-child(2) {
        margin: 0 0.25em;
    }

    & button:nth-child(3) {
        margin-left: 0.5em;
    }

    & >div {
        margin: 1em 0;

        & > p {
            color: ${({theme}) => theme.text}
        }
    }
`