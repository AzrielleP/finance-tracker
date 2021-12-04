import styled, { css } from "styled-components";
import { generalColors } from "../styled-components/ThemeColors.styled";
import { handleColorButtonType, handleColorTransType } from "../styled-components/helper-styled";
import { FlexContainer } from "../styled-components/Default.styled";

/* ========== Containers ========== */
export const TransTypeContainer = styled(FlexContainer)`
	margin: 1em 0;

	& label:nth-child(4) {
		margin: 0 0.5em;
	}
`;
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

	& > div {
		margin: 1em 0;

		& > p {
			color: ${({ theme }) => theme.text};
		}
	}
`;

/* ========== Inputs ========== */
export const FormRadio = styled.input`
	display: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;

	&:checked + label {
		background-color: ${({ theme }) => theme.background};
		border-color: ${({ value, theme }) => handleColorTransType(value, theme) || theme.text};

		p {
			color: ${({ value, theme }) => handleColorTransType(value, theme) || theme.text};
		}
	}
`;
export const FormLabel = styled.label`
	flex: 1;
	cursor: pointer;
	padding: 0.25em 0.5em;
	border: 0.25px solid ${({ theme }) => theme.fadedGrey};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.textBg};

	p {
		text-align: center;
		color: ${({ theme }) => theme.fadedGrey};
	}
`;

const inputStyles = css`
	width: 60vw;
	font-family: "Open Sans", sans-serif;
	outline: 0;
	border-width: 0 0 0.5px;
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.background};
	border-color: ${({ theme }) => theme.border};

	@media screen and (min-width: 768px) {
		width: 30em;
	}

	@media screen and (min-width: 1024px) {
		width: 28em;
		font-size: 16px;
	}
`;

export const FormInput = styled.input`
	${inputStyles}
`;

export const FormSelect = styled.select`
	${inputStyles}
`;

/* ======== Buttons ======= */
export const FormButton = styled.button`
	flex: 1;
	margin: 0.5em 0;
	padding: 0.5em;
	font: bold 14px "Open Sans", sans-serif;
	color: ${({ value }) => (!value ? generalColors.darkGrey : generalColors.white)};
	background-color: ${({ value }) => handleColorButtonType(value) || "none"};
	border: 1px solid ${({ value }) => handleColorButtonType(value) || generalColors.darkGrey};
	border-radius: 5px;
`;
