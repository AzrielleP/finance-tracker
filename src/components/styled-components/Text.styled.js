import styled from "styled-components";
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

export const LargeHeader = styled.h1`
	font-size: 20px;
	color: ${({ theme }) => theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 36px;
	}
`;

export const Subtitle = styled.p`
	margin: 5px 0;
	font-weight: bold;
	font-size: 14px;
	color: ${({ type, theme }) => handleColorType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 22px;
	}
`;

export const Bold = styled.p`
	font-weight: bold;
	font-size: 12px;
	letter-spacing: 0.1em;
	color: ${({ type, theme }) => handleColorType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 16px;
	}
`;
export const Small = styled.p`
	font-size: 10px;
	letter-spacing: 0.1em;
	color: ${({ type, theme }) => handleColorType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 14px;
	}
`;

export const SmallOverflowingText = styled(Small)`
	overflow: hidden;
	text-overflow: ellipsis;
`;
