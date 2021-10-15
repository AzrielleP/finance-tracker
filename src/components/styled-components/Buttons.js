import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style";

// Buttons inside TransactionOutput
export const ArrowButton = styled.button`
	color: ${lightTheme.blue};
	margin: 1em;
`
export const NewButton = styled.button`
	padding: 0.5em 1em;
	border-radius: 10px;
	background-color: ${generalColors.lightBlue};
`