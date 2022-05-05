import styled, { css } from "styled-components";
import { generalColors } from "../../styled-components/ThemeColors.styled";
import { FlexContainer } from "../../styled-components/Default.styled";

/* ========== Containers ========== */
export const SidebarContainer = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 10;
	width: 100%;
	border-top: 0.25px solid ${generalColors.grey};

	@media screen and (min-width: 768px) {
		display: block;
		position: static;
		padding: 0 2vw;
		border-left: 0.1px solid ${generalColors.grey};
	}
`;

export const SidebarSelectors = styled(FlexContainer)`
	padding: 1em 0 0.5em 0;
	position: relative;
	background: ${({ theme }) => theme.background};

	label {
		cursor: pointer;
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
