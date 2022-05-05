import styled from "styled-components";
import { handleColorTransType } from "./helper-styled";

export const Large = styled.p`
	font-weight: bold;
	font-size: 14px;
	color: ${({ theme }) => theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 36px;
	}
`;

export const Main = styled.p`
	font-size: 12px;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 20px;
	}
`;

export const Bold = styled.p`
	font-weight: bold;
	font-size: 12px;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 20px;
	}
`;
export const Light = styled.p`
	font-weight: 300;
	font-size: 12px;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 20px;
	}
`;

export const Small = styled.p`
	font-size: 9px;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 16px;
	}
`;

export const OverflowingText = styled(Main)`
	overflow: hidden;
	text-overflow: ellipsis;
`;
