import styled, {css} from "styled-components";
import { FlexContainer, ScrollingContainer } from "../../../../styled-components/Default.styled";
import { generalColors, income, expense } from "../../../../styled-components/ThemeColors.styled";
import { DayContainer } from "../TransactionOutput/TransactionOutput.styled";

export const MobileScrollingContainer = styled(ScrollingContainer)`
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

export const DesktopScrollingContainer = styled(ScrollingContainer)`
	display: none;

	@media screen and (min-width: 1024px) {
		display: block;
	}
`;

export const StatsFlexContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1em;
`;

export const DataContainer = styled.div`
	min-height: 30vh;
	overflow: hidden;
	background: ${({theme}) => theme.textBg};
	margin-bottom: 5em;

	p {
		display: inline-block;
	}
	
	& > p {
		display: block;
		margin: 5em;
		text-align: center;
		color: ${generalColors.grey};
	}

	@media screen and (min-width:1024px) {
		height: inherit;
		width: 100%;
		margin: -1px 0 0 -1px;
		border: 0.5px solid ${generalColors.grey};
	}
`;

export const DataContainerHeading = styled.div`
	display: none;

	@media screen and (min-width: 1024px) {
		display: block;
		margin-top: 2em;
		text-align: center;
	}
`

export const PieContainer = styled.div`
	width: 100%;
	padding: 4vw 16vw;

	@media screen and (min-width:1024px) {
		padding: 1em 5vw;
	}

	@media screen and (min-width: 1440px) {
		padding: 1em 10vw;
	}

`;

export const RadioContainer = styled(FlexContainer)` 
	padding: 1em 0 0.5em 0;
	border-bottom: 3px solid ${generalColors.red};
	position: relative;
	label {
		cursor: pointer;
	}
	&:after {
		position: absolute;
		bottom: -5px;
		height: 5.1px;
		width: 50%;
		${({ selection }) =>
			selection === "income"
				? css`
						right: 0;
				  `
				: css`
						left: 0;
				  `};
		content: "";
		background-color: ${({ theme }) => theme.textBg};
	}

	@media screen and (min-width: 1024px) {
		display: none;
	}
`
export const PercentContainer = styled(DayContainer)`
	margin: 0 1em 0 0;
	color: ${generalColors.white};
	background-color: ${({index, type}) => 
		type === "income" ? income[index] : expense[index]
	};

	@media screen and (min-width: 1024px) {
		width: 3.5em;
	}
`;

export const StatsRadio = styled.input`
	display: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
`