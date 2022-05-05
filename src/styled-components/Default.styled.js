import styled, { css } from "styled-components";
import { generalColors } from "./ThemeColors.styled";

// Consists of styles that are used in more than 2 components (except for App)

/* ======== Containers ======== */
export const AppContainer = styled.div`
	@media screen and (min-width: 768px) {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-columns: 70% 30%;
		grid-template-rows: 1fr;
	}

	@media screen and (min-width: 1120px) {
		grid-template-columns: 75% 25%;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${({ justifySmall }) => justifySmall};
	background: ${({ theme }) => theme.textBg};

	@media screen and (min-width: 768px) {
		justify-content: ${({ justifyLarge }) => justifyLarge};
	}
`;

 export const FlexContainerBordered = styled(FlexContainer)`
 	padding: 0.5em 0.5em;
 	border-top: 0.1px solid ${generalColors.border};
 	border-bottom: 0.1px solid ${generalColors.border};
	margin-top: -1px;
	margin-left: -1px;
 `;

export const ScrollingContainer = styled.div`
	overflow: auto;
	z-index: 1;
`;
export const FixedContainer = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
	background-color: ${({ theme }) => theme.background};
`;

/* ======== Modal ======== */
export const ModalBackground = styled.div`
	@media screen and (min-width: 768px) {
		display: ${({ show }) => (show ? "block" : "none")};
		position: absolute;
		top: 0;
		left: 0;
		z-index: 25;
		height: 100vh;
		width: 100vw;
		opacity: 0.6;
		background-color: ${({ theme }) => theme.modalBg};
	}
`;
export const ModalContainer = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	z-index: 20;
	top: 0;
	left: 0;
	background: ${({ theme }) => theme.textBg};

	@media screen and (min-width: 768px) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		height: 35em;
		width: 45em;
		z-index: 30;
		padding: 5em;
		margin-left: auto;
		margin-right: auto;
		border-radius: 10px;
	}
`;