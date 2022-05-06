import styled from "styled-components";
import { generalColors,handleColorTransType } from "../../../../styled-components/ThemeColors.styled";

/*  ========== Containers ========== */
export const TransactionOutput = styled.div`
	padding-bottom: 5em;
	@media screen and (min-width: 1120px) {
		padding: 0 7em;
	}
`;

export const DailyTransactionData = styled.div`
	margin: 0 0 1em 0;
	border-top: 0.1px solid ${generalColors.grey};
	border-bottom: 0.1px solid ${generalColors.grey};
	background: ${({ theme }) => theme.textBg};
`;

export const GridContainerHead = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 0.5em;
	align-items: center;
	padding: 0.25em 1.5em;
	border-bottom: 0.5px solid ${generalColors.grey};

	& p {
		display: inline;
	}

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
	text-align: center;

	p:nth-child(2) {
		color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};
	}
`;

export const DayContainer = styled.div`
	display: inline-block;
	width: 2em;
	border-radius: 5px;
	margin-left: 0.5em;
	padding: 0.05em 0.25em 0.25em 0.25em;
	text-align: center;
	background-color: ${({day}) => {
		switch(day) {
			case "Sun":
				return generalColors.red;
			case "Sat":
				return generalColors.blue;
			default:
				return generalColors.grey;
		}
	}};

	p {
		color: ${generalColors.white};
	}
`;

/*  ========== Buttons ========== */
export const NewButton = styled.button`
	display: none;
	@media screen and (min-width: 1120px) {
		padding: 0.75em 1em;
		border-radius: 10px;
		background-color: ${generalColors.red};
		font-size: 20px;
		color: ${generalColors.white};
	}

`;

export const NewButtonMobile = styled.button`
	position: fixed;
	bottom: 3em;
	right: 0.7em;
	padding: 0.5em 0.8em;
	border-radius: 50%;
	font-size: 20px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	background-color: ${generalColors.red};
	color: ${generalColors.white};
`

export const TransactionDetails = styled.button`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 1em;
	align-items: center;
	width: 100%;
	padding: 0.5em 1.5em;
	
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
