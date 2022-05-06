import styled, { css } from "styled-components";
import { generalColors } from "../../styled-components/ThemeColors.styled";

/* ========== Containers ========== */
export const SidebarContainer = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 10;
	width: 100%;
	border-top: 0.25px solid ${generalColors.grey};

	@media screen and (min-width: 1024px) {
		display: block;
		position: static;
		padding: 0 2vw;
		height: 100vh;
		border-right: 0.1px solid ${generalColors.grey};
	}
`;

export const SidebarSelectors = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height:100%;
	padding: 0.5em 0 0.5em 0;
	position: relative;
	background: ${({ theme }) => theme.background};

	@media screen and (min-width: 1024px) {
		flex-flow: column;
		align-items: flex-start;
		justify-content: center;
		padding: 10vw 0;
		margin: 0 0 0.5em 0;
	}
`;

/* ========== Inputs ========== */
export const SidebarLabel = styled.label`
	cursor: pointer;
	text-align: center;
	color: ${generalColors.grey};

	i {
		display: block;
		font-size: 18px;
		margin-bottom: 0.2em;
	}

	@media screen and (min-width: 1024px) {
		margin: 2em 1em;
		i {
			display: inline;
			margin-right: 1em;
			font-size: 20px;
		}
	}
`;

export const SidebarRadio = styled.input`
	display: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;

	&:checked {
		& + ${SidebarLabel} {
			color: ${generalColors.red};
		}
	}
`;

