import styled, { css } from "styled-components";

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

	@media screen and (min-width: 768px) {
		justify-content: ${({ justifyLarge }) => justifyLarge};
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
	padding: 3em 0 1em 0;
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
	position: absolute;
	height: 100vh;
	width: 100vw;
	z-index: 20;
	padding: 10vw;
	top: 0;
	left: 0;
	background: ${({ theme }) => theme.background};

	@media screen and (min-width: 768px) {
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

/* ======== Buttons ======== */
export const ShowSidebarButton = styled.button`
	display: block;
	${({ alignment }) =>
		alignment === "left"
			? css`
					margin-left: auto;
			  `
			: css`
					margin-right: auto;
			  `}
	border: none;
	&:hover, &:focus, &:active {
		box-shadow: none;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
