import styled, {css} from "styled-components";
import { generalColors, light, dark } from "./ThemeColors.styled";

// Buttons inside TransactionOutput
export const ArrowButton = styled.button`
	margin: 0 1em;
	color: ${({theme}) => theme.text};
`
export const NewButton = styled.button`
	padding: 0.5em 1em;
	border-radius: 10px;
	background-color: ${generalColors.blue};
    font: bold 14px 'Open Sans', sans-serif;
    color: ${generalColors.white};
`

export const TransactionDetails = styled.button`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1em;
    align-items: center;
    width: 100%;
    margin: 1.5em 0;

    p:nth-child(3) {
        text-align: right;
        color: ${({theme, amount}) => {
            if (amount && amount > 0) {
                return generalColors.blue;
            }
            else if (amount && amount < 0) {
                return generalColors.red;
            }
            else {
                return theme.text;
            }
        }}
    }
`

// App
export const ShowSidebarButton = styled.button`
    display: block;
    ${({alignment}) => alignment === 'left' ? 
        css`
            margin-left: auto;
        `
        :
        css`
            margin-right: auto;
        `
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`

// TransactionInput Form
export const FormButton = styled.button`
    flex: 1;
    padding: 0.75em;
    font: bold 14px 'Open Sans', sans-serif;
    color: ${({fontColor}) => fontColor};
    background-color: ${({bgColor}) => bgColor};
    border: 1px solid ${({borderColor}) => borderColor};
    border-radius: 5px;
`