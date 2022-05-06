import styled, { css } from "styled-components";
import { generalColors, handleColorButtonType, handleColorTransType } from "../../../../styled-components/ThemeColors.styled";
import { FlexContainer } from "../../../../styled-components/Default.styled";

/* ========== Containers ========== */
export const TitleContainer = styled.div`
	padding: 1em;
`;

export const TransTypeContainer = styled(FlexContainer)`
	margin: 1em 0.5em;
	background-color: ${({ theme }) => theme.background};

	& label:nth-child(4) {
		margin: 0 0.5em;
	}
`;
export const TransInputContainer = styled.div`
	margin: 2em 1em;

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

		& > input {
			color: ${({theme}) => theme.color}
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
		color: ${({ value, theme }) => handleColorTransType(value, theme) || theme.text};
	}
`;

export const RadioLabel = styled.label`
	flex: 1;
	cursor: pointer;
	padding: 0.5em 0.5em;
	border: 0.25px solid ${generalColors.grey};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.background};
	font-size: 12px;
	text-align: center;
	color: ${generalColors.grey};

	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}
`;

export const FormLabel = styled.label`
	font-size: 12px;
	color: ${generalColors.grey};

	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}
`;

const inputStyles = css`
	width: 70vw;
	font-family: "Roboto", sans-serif;
	outline: 0;
	border-width: 0 0 0.5px;
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.textBg};
	border-color: ${generalColors.grey};
	
	@media screen and (min-width: 1024px) {
		width: 37vw;
		max-width: 500px;
		font-size: 18px;
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
	padding: 0.75em 0.5em;
	font: 12px "Roboto", sans-serif;
	color: ${({ value }) => (!value ? ({theme}) => theme.text : generalColors.white)};
	background-color: ${({ value }) => handleColorButtonType(value) || "none"};
	border: 0.5px solid ${({ value }) => handleColorButtonType(value) || generalColors.grey};
	border-radius: 5px;

	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}
`;
