import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style.styled";

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({justify}) => justify};
`

export const Container = styled.div`
    padding: 1em;
`

export const SidebarContainer = styled(Container)`
    height: 100vh;
    background: ${generalColors.lightAccent};
`

export const ScrollingContainer = styled.div`
    position: absolute;
    top: ${({startHeight}) => `${startHeight}em`};
    overflow: auto;
    z-index: 1;
    width: 90%;

    @media screen and (min-width: 1024px) {
        top: ${({startHeight}) => `${startHeight + 6}em`};
    }
`

export const DailyTransactionData = styled.div`
    border-radius: 10px;
    margin: 1em 0;
    padding: 1.5em 1em;
    background: ${generalColors.lightAccent};
`

export const FixedContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 1em;
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
`
export const GridContainerHead = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    border-bottom: 0.5px solid ${generalColors.darkAccent};
    padding-bottom: 1em;
    margin-bottom: 1.5em;
`

export const GIFContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    position: absolute;
    top: 40%;
    width: 90%;

    @media screen and (min-width: 1024px) {
        top: 50%;
    }
`

// TransactionInput
export const ModalContainer = styled.div`
    z-index: 10;
    background: ${generalColors.white};
    height: 100vh;
    position: absolute;
`

