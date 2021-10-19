import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style";

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({justify}) => justify};
`

export const Container = styled.div`
    padding: 1em;
    background-color: ${generalColors.white};
    height: 100vh;
`

export const ScrollingContainer = styled.div`
    position: absolute;
    top: 10em;
    overflow: auto;
`

export const DailyTransactionData = styled.div`
    border-radius: 10px;
    margin: 1em 0;
    padding: 1.5em 1em;
    background: ${generalColors.lightAccent};
`

export const FixedContainer = styled.div`
    position: fixed;
    top: 1em;
    width: 90%;
`

export const LargeNumberContainer = styled.div`
    flex: 1;
    margin: 0.25em;
    padding: 0.5em;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${generalColors.darkAccent};
    text-align: center;
`