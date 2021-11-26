import styled, { css } from "styled-components";
import { generalColors } from "./ThemeColors.styled";

const handleColorType = (type) => {
	switch (type) {
		case "income":
			return generalColors.blue;
		case "expense":
			return generalColors.red;
		default:
			return false;
	}
};

export const SidebarRadio = styled.input`
	display: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
`;

export const FormRadio = styled.input`
	display: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;

	&:checked + label {
		background-color: ${({ theme }) => theme.background};
		border-color: ${({ value, theme }) => handleColorType(value, theme) || theme.text};

		p {
			color: ${({ value, theme }) => handleColorType(value, theme) || theme.text};
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

export const FormButton = styled.button`
	margin: 0.5em;
`;
