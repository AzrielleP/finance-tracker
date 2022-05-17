import styled from "styled-components";
import { generalColors } from "./ThemeColors.styled";

// Consists of styles that are used in more than 2 components (except for App)

/* ======== Containers ======== */
export const AppContainer = styled.div`
	@media screen and (min-width: 1024px) {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-columns: 20% 80%;
		grid-template-rows: 1fr;
	}

	@media screen and (min-width: 1440px) {
		grid-template-columns: 15% 85%;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${({ justifySmall }) => justifySmall};
	background: ${({ theme }) => theme.textBg};

	@media screen and (min-width: 1024px) {
		justify-content: ${({ justifyLarge }) => justifyLarge};
	}
`;

 export const FlexContainerBordered = styled(FlexContainer)`
 	padding: 0.5em 1.5em;
 	border-top: 0.1px solid ${generalColors.grey};
 	border-bottom: 0.1px solid ${generalColors.grey};
	margin-top: -1px;
	margin-left: -1px;
 `;

 export const FlexHeader = styled(FlexContainerBordered)`
	padding: 1em 7vw;

	@media screen and (min-width: 1024px) {
		padding: 2em 7vw;
	}
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
	@media screen and (min-width: 1024px) {
		display: ${({ show }) => (show ? "block" : "none")};
		position: absolute;
		top: 0;
		left: 0;
		z-index: 25;
		height: 100vh;
		width: 100vw;
		opacity: 0.6;
		background-color: ${generalColors.modalBg};
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
	padding: 5vw;

	@media screen and (min-width: 1024px) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		height: 60vh;
		width: 60vw;
		max-width: 825px;
		z-index: 30;
		margin-left: auto;
		margin-right: auto;
		border-radius: 10px;
	};
`;