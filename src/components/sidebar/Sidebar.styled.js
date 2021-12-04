import styled, { css } from "styled-components";
import { generalColors } from "../styled-components/ThemeColors.styled";
import { FlexContainer, FixedContainer } from "../styled-components/Default.styled";

/* ========== Containers ========== */
export const SidebarContainer = styled.div`
	display: ${({ $display }) => ($display ? "block" : "none")};
	position: absolute;
	left: 0;
	top: 0;
	padding: 0 8vw;
	z-index: 10;
	min-height: 100vh;
	width: 100%;
	background: ${({ theme }) => theme.background};

	@media screen and (min-width: 768px) {
		display: block;
		position: static;
		padding: 0 2vw;
		border-left: 0.1px solid ${({ theme }) => theme.fadedGrey};
	}
`;
export const SidebarFixedContainer = styled(FixedContainer)`
	background-color: ${({ theme }) => theme.background};
`;
export const SidebarSelectors = styled(FlexContainer)`
	padding: 1em 0 0.5em 0;
	border-bottom: 5px solid ${generalColors.blue};
	position: relative;

	label {
		cursor: pointer;
	}

	&:after {
		position: absolute;
		bottom: -5px;
		height: 5.1px;
		width: 50%;
		${({ option }) =>
			option === "categories"
				? css`
						right: 0;
				  `
				: css`
						left: 0;
				  `};
		content: "";
		background-color: ${({ theme }) => theme.background};
	}

	@media screen and (min-width: 768px) {
		padding: 0.5em 0 0.5em 0;
		margin: 0 0 0.5em 0;
	}

	@media screen and (min-width: 1120px) {
		padding: 1.5em 0 0.5em 0;
	}
`;

/* ========== Inputs ========== */
export const SidebarRadio = styled.input`
	display: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
`;
