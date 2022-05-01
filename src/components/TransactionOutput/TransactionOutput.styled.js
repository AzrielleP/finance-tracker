import styled from "styled-components";
import { generalColors } from "../styled-components/ThemeColors.styled";
import { handleColorTransType } from "../styled-components/helper-styled";

/*  ========== Containers ========== */
export const TransactionOutput = styled.div`
	@media screen and (min-width: 1120px) {
		padding: 0 7em;
	}
`;

export const DailyTransactionData = styled.div`
	margin: 0 0 1em 0;
	border-top: 0.1px solid ${generalColors.border};
	border-bottom: 0.1px solid ${generalColors.border};
	background: ${({ theme }) => theme.textBg};
`;

export const GridContainerHead = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 0.5em;
	padding: 0.5em 1em;
	border-bottom: 0.5px solid ${generalColors.border};

	p:nth-child(3) {
		text-align: right;
	}
`;

export const NoDataContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
`;

export const LargeNumberContainer = styled.div`
	flex: 1;
	margin: 0.5em;
	text-align: center;

	p:nth-child(2) {
		color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};
	}
`;

/*  ========== Buttons ========== */
export const ArrowButton = styled.button`
	margin: 0 1em;
	color: ${({ theme }) => theme.text};
	
	&:hover, &:focus, &:active {
		box-shadow: none;
	}
`;
export const NewButton = styled.button`
	padding: 0.75em 1em;
	border-radius: 10px;
	background-color: ${generalColors.red};
	font: bold 14px "Open Sans", sans-serif;
	color: ${generalColors.white};
`;
export const TransactionDetails = styled.button`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 1em;
	align-items: center;
	width: 100%;
	padding: 0.5em 1em;
	
	&:hover, &:focus, &:active {
		box-shadow: none;
	}

	p {
		text-align: left;
	}

	p:nth-child(3) {
		text-align: right;
		color: ${({ theme, amount }) => {
			if (amount && amount > 0) {
				return generalColors.blue;
			} else if (amount && amount < 0) {
				return generalColors.red;
			} else {
				return theme.text;
			}
		}};
	}
`;
