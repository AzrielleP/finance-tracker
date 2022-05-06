import styled from "styled-components";
import { handleColorTransType } from "./ThemeColors.styled";

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
		font-size: 18px;
	}
`;

export const Bold = styled(Main)`
	font-weight: bold;
`;

export const Light = styled(Main)`
	font-weight: 300;
`;

export const Small = styled.p`
	font-size: 9px;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 14px;
	}
`;

export const OverflowingText = styled(Main)`
	overflow: hidden;
	text-overflow: ellipsis;
`;
