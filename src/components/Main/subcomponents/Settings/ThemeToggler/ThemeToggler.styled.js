import styled from "styled-components";
import { generalColors } from "../../../../../styled-components/ThemeColors.styled";

export const Slider = styled.span`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 23px;
	transition: 0.3s;

	&::before {
		content: "";
		position: absolute;
		top: 3px;
		left: 5px;
		width: 15px;
		height: 15px;
		border-radius: 23px;
		box-shadow: none;
		background-color: ${generalColors.white};
		transition: 0.3s;
	}
`;

export const ThemeTogglerContainer = styled.div`
	width: 50px;
	height: 23px;
	position: relative;

	label {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.themeTogglerBg};
		border: 1px solid ${generalColors.grey};
		border-radius: 23px;
		cursor: pointer;
	}

	input {
		display: none;
	}

	input:checked ~ ${Slider} {
		background-color: ${({ theme }) => theme.themeTogglerBg};
	}

	input:checked ~ ${Slider}::before {
		transform: translateX(23px);
		background-color: ${({ theme }) => theme.themeTogglerBg};
		box-shadow: inset 6px -5px 0px 0px ${generalColors.white};
	}
`;
