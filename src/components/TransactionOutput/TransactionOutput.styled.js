import styled from "styled-components";
import { generalColors } from "../styled-components/ThemeColors.styled";

/*  ========== Containers ========== */
export const TransactionOutput = styled.div`
	padding: 0 5vw;

	@media screen and (min-width: 1120px) {
		padding: 0 7em;
	}
`;
export const GridContainerHead = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 0.5em;
	padding-bottom: 1em;
	border-bottom: 0.5px solid ${({ theme }) => theme.border};

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
export const DailyTransactionData = styled.div`
	border-radius: 10px;
	margin: 0 0 1em 0;
	padding: 1.5em 1em;
	background: ${({ theme }) => theme.textBg};
`;

/*  ========== Buttons ========== */
export const ArrowButton = styled.button`
	margin: 0 1em;
	color: ${({ theme }) => theme.text};
`;
export const NewButton = styled.button`
	padding: 0.5em 1em;
	border-radius: 10px;
	background-color: ${generalColors.blue};
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
	margin: 1.5em 0;

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
